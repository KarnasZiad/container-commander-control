
import React from "react";
import { cn } from "@/lib/utils";

type StatusType = "running" | "stopped" | "error" | "pending";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "running":
        return "bg-green-100 text-green-800 border-green-200";
      case "stopped":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "error":
        return "bg-red-100 text-red-800 border-red-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 text-xs font-medium rounded-full border",
        getStatusStyles(),
        className
      )}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
