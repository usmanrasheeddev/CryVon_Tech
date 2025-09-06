      "use client";

import { useEffect, useState } from "react";

export default function StatsCounter({ max = 120 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i <= max) setCount(i);
      else clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [max]);
  return <span className="text-2xl font-bold">{count}+</span>;
}
