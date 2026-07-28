"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function RouteLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);

    const timer = setTimeout(() => {
      setShow(true);
    }, 250);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null;

  return <div>Loading...</div>;
}