import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: React.ReactNode;
  className?: string;
}

export const SkillBadge = ({
  name,
  level = "intermediate",
  icon,
  className,
}: SkillBadgeProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300";
      case "intermediate":
        return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300";
      case "advanced":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300";
      case "expert":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Badge
      variant="secondary"
      className={cn(
        "transition-colors duration-200 hover:scale-105 transform",
        getLevelColor(level),
        className,
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </Badge>
  );
};
