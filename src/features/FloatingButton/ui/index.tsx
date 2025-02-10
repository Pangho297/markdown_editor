import { cn, Button } from "@/shared";
import { FloatingButtonProps } from "../model/type";

export function FloatingButton({
  icon,
  position = "",
  animation = true,
  ...props
}: FloatingButtonProps) {
  const { className, ...rest } = props;
  return (
    <Button
      className={cn(
        "fixed h-14 w-14 rounded-full p-0",
        position,
        animation && "transition-all duration-300 hover:rotate-90",
        className
      )}
      {...rest}
    >
      {icon}
    </Button>
  );
}
