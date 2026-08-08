import { Sparkles } from "lucide-react";

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`eyebrow${className ? ` ${className}` : ""}`}>
      <Sparkles aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
