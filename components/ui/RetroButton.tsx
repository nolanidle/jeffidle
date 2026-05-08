import { Button } from "@/components/ui/button";

interface RetroButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export function RetroButton({ children, className, ...props }: RetroButtonProps) {
  return (
    <Button
      variant="retro"
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
