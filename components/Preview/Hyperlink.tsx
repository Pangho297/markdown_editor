import { ReactNode } from "react";

export default function Hyperlink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a href={href} target="_blank" className="text-[#4078f2] underline">
      {children}
    </a>
  );
}
