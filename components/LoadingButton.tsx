"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

type LoadingButtonProps = {
  children: React.ReactNode;
  onClick: () => Promise<void> | void;
  className?: string;
};

export function LoadingButton({
  children,
  onClick,
  className,
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);

    // Wait 1 second so the user sees the loader
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <LoaderCircle className="h-4 w-4 animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
}