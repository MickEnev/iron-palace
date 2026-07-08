import { Resend } from "resend";
import { z } from "zod";

const baseLeadSchema = z.object({
  email: z.email(),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().max(2000).optional(),
});

const leadSchema = z.discriminatedUnion("type", [
  baseLeadSchema.extend({
    type: z.literal("contact"),
    name: z.string().trim().min(1).max(120),
    topic: z.string().trim().max(80).optional(),
  }),
  baseLeadSchema.extend({
    type: z.literal("tour"),
    name: z.string().trim().min(1).max(120),
    preferredDay: z.string().trim().max(40).optional(),
  }),
  z.object({
    type: z.literal("cancellation"),
    email: z.email(),
    barcode: z.string().trim().min(1).max(80),
  }),
]);

type Lead = z.infer<typeof leadSchema>;

const leadLabels: Record<Lead["type"], string> = {
  contact: "Contact message",
  cancellation: "Membership cancellation request",
  tour: "Tour request",
};

const formatLeadForOwner = (lead: Lead) => {
  const rows: string[] = [`Type: ${leadLabels[lead.type]}`, `Email: ${lead.email}`];

  if (lead.type === "cancellation") {
    rows.push(`Barcode: ${lead.barcode}`);
    return rows.join("\n");
  }

  rows.splice(1, 0, `Name: ${lead.name}`);

  if (lead.phone) {
    rows.push(`Phone: ${lead.phone}`);
  }

  if (lead.type === "contact" && lead.topic) {
    rows.push(`Topic: ${lead.topic}`);
  }

  if (lead.type === "tour" && lead.preferredDay) {
    rows.push(`Preferred day: ${lead.preferredDay}`);
  }

  if (lead.message) {
    rows.push("", "Message:", lead.message);
  }

  return rows.join("\n");
};

const getAutoReplyText = (type: Lead["type"]) => {
  if (type === "tour") {
    return "Thanks for requesting a tour at Iron Palace. We received your request and will follow up soon to confirm the details.";
  }

  if (type === "cancellation") {
    return "We received your Iron Palace membership request. Next steps will be reviewed and emailed to you soon.";
  }

  return "Thanks for contacting Iron Palace. We received your message and will get back to you soon.";
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.EMAIL_FROM;
  const gymOwnerEmail = process.env.GYM_OWNER_EMAIL;

  if (!apiKey || !fromEmail || !gymOwnerEmail) {
    return Response.json(
      { message: "Email service is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsedBody = leadSchema.safeParse(body);

  if (!parsedBody.success) {
    return Response.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const lead = parsedBody.data;
  const resend = new Resend(apiKey);

  const ownerEmail = await resend.emails
    .send({
      from: fromEmail,
      to: gymOwnerEmail,
      replyTo: lead.email,
      subject: `New Iron Palace ${leadLabels[lead.type]}`,
      text: formatLeadForOwner(lead),
    })
    .catch((error: unknown) => ({ error }));

  if (ownerEmail.error) {
    console.error("Lead owner notification failed:", ownerEmail.error);

    return Response.json(
      { message: "Could not send your request. Please try again." },
      { status: 500 },
    );
  }

  const autoReply = await resend.emails
    .send({
      from: fromEmail,
      to: lead.email,
      subject: "We received your Iron Palace request",
      text: getAutoReplyText(lead.type),
    })
    .catch((error: unknown) => ({ error }));

  if (autoReply.error) {
    console.error("Lead auto-reply failed:", autoReply.error);

    return Response.json(
      { message: "We received your request, but could not send confirmation." },
      { status: 200 },
    );
  }

  return Response.json({ message: "Request sent." });
}
