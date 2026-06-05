import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** Single centered reading column — matches the reference's max-w-3xl measure. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl px-6 lg:px-0", className)}>
      {children}
    </div>
  );
}
