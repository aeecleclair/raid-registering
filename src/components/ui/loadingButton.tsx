import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./button";

interface LoadingButtonProps {
  variant?:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  isLoading: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const LoadingButton = ({
  isLoading,
  type,
  onClick,
  label,
  className,
  disabled,
  variant = "default",
}: LoadingButtonProps) => {
  return (
    <Button
      variant={variant}
      type={type}
      onClick={onClick}
      className={className}
      disabled={isLoading || disabled}
    >
      {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : label}
    </Button>
  );
};