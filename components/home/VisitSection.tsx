import Button from "../ui/Button";

const VisitSection = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-4">
        <h1 className="max-w-3xl font-heading text-5xl font-black leading-tight text-white md:text-7xl">
          Make The Pilgrimage
        </h1>
        <div>
          <h2 className="max-w-3xl font-heading text-2xl font-black leading-tight text-white md:text-2xl">
            Address
          </h2>
          <p>1 Kings Rd, Des Moines, IA 50309, United States</p>
        </div>
        <Button
          href="https://maps.google.com/?q=1925+E+Grand+Ave+Des+Moines+IA"
          newTab={true}
        >
          Directions
        </Button>
        <hr />
        <div className="space-y-1">
          <h2 className="max-w-3xl font-heading text-2xl font-black leading-tight text-white md:text-2xl">
            Hours
          </h2>
          <p className="font-bold">Mon-Fri: 4:00 AM - 12:00 AM</p>
          <p className="font-bold">Sat: 8:00 AM - 10:00 PM</p>
          <p className="font-bold">Sun: 8:00 AM - 9:00 PM</p>
        </div>
      </div>
      <div className="min-h-125 overflow-hidden rounded-3xl border-2 border-(--primary)">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.7991538354554!2d-93.58605112392982!3d41.59522757127421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99d786d59809%3A0x2edbb8b6ee8921b8!2s1925%20E%20Grand%20Ave%2C%20Des%20Moines%2C%20IA%2050316!5e0!3m2!1sen!2sus!4v1783032819044!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default VisitSection;

//
/*
TODO: 
Add border to map
Make heading bigger
Make address heading bigger
Bolden "Hours" and days of week
Space out contents to improve readability 
*/
