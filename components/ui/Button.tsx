import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

const Button = ({ children, variant = "primary", href }: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors";

  const variantClasses = {
    primary:
      "bg-[var(--primary)] text-black hover:bg-[var(--primary-hover)] cursor-pointer",
    secondary:
      "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface)] cursor-pointer",
  };

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
