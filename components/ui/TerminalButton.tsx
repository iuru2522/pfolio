import type { ButtonHTMLAttributes, ReactNode } from "react";

type TerminalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function TerminalButton({
  children,
  className = "",
  type = "button",
  ...props
}: TerminalButtonProps) {
  return (
    <button type={type} className={`deck-btn deck-glitch ${className}`} {...props}>
      {children}
    </button>
  );
}
