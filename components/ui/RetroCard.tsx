import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RetroCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode;
}

export function RetroCard({ children, className, ...props }: RetroCardProps) {
  return (
    <Card
      className={cn(
        "border-2 border-border bg-bg-card shadow-retro hover:border-primary hover:shadow-retro-hover transition-all duration-200",
        className
      )}
      {...props}
    >
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}
