
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = ""
}: BadgeProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors";
  
  const variantClasses = {
    default: "bg-designer-primary/10 text-designer-primary",
    outline: "border border-designer-primary/30 text-designer-primary",
    gradient: "bg-gradient-to-r from-designer-primary to-designer-secondary text-white",
  };
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 rounded",
    md: "text-sm px-3 py-1 rounded-md",
    lg: "px-4 py-1.5 rounded-lg",
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
}
