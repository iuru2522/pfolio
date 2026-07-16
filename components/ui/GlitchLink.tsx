import type { AnchorHTMLAttributes, ReactNode } from "react";

type GlitchLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function GlitchLink({
  children,
  className = "",
  ...props
}: GlitchLinkProps) {
  return (
    <a className={`deck-glitch underline-offset-4 hover:underline ${className}`} {...props}>
      {children}
    </a>
  );
}
