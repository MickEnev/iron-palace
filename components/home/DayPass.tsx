import Button from "../ui/Button";

type DayPassProps = {
  title: string;
  price: number;
  features: string[];
};

const DayPass = ({ title, price, features }: DayPassProps) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-(--surface) p-8 hover:border-(--primary) hover:bg-(--surface-hover) transition">
      <h3 className="font-heading text-3xl font-bold">{title}</h3>
      <hr className="my-4 border-white/10" />
      <p className="mt-4 text-4xl font-black">${price}</p>
      <ul className="mt-6 space-y-2">
        {features.map((feature) => (
          <li className="flex items-center" key={feature}>
            <svg
              className="mr-2 h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <hr className="my-4 border-white/10" />
      <Button>Shop Now</Button>
    </div>
  );
};

export default DayPass;
