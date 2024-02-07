import Link from "next/link";
import { cn } from "~/lib/utils";

export default function LinkButton({ href, className, children }: {
  href: string,
  className?: string,
  children: React.ReactNode,
}) {
  return (
    <Link href={href} className={cn("border-2 bg-transparent px-3 py-1 border-red-400 rounded-md text-red-400 fill-red-400 group transition-colors duration-300 hover:border-white hover:bg-red-400 hover:text-white hover:fill-white focus-visible:border-white focus-visible:bg-red-400 focus-visible:text-white focus-visible:fill-white", className)}>
      {children}
    </Link>
  )
};