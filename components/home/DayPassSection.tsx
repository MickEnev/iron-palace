import DayPass from "./DayPass";

const passes = [
  {
    title: "1 Day Pass",
    price: 19.99,
    features: ["24-hour gym access", "Recovery room", "Rooftop access"],
  },
  {
    title: "7 Day Pass",
    price: 59.99,
    features: [
      "Free Group Training Session",
      "Recovery room",
      "Rooftop access",
    ],
  },
  {
    title: "30 Day Pass",
    price: 149.99,
    features: ["Free Group Training Session", "Guest pass", "Free T-shirt"],
  },
];

const DayPassSection = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {passes.map((pass) => (
        <DayPass key={pass.title} {...pass} />
      ))}
    </div>
  );
};

export default DayPassSection;
