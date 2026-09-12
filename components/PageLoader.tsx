"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-blue-950 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative grid h-20 w-20 place-items-center">
          <div className="absolute inset-0 rounded-full border-2 border-slate-700" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-emerald-400 border-r-emerald-400" />
          <span className="text-xl font-black tracking-tight">AFT</span>
        </div>

        <div className="text-center">
          <p className="text-sm font-bold tracking-tight">AFT SOFT AND LIMITED</p>
          <p className="mt-2 text-[10px] font-normal uppercase tracking-[0.28em] text-slate-300">
            Loading Experience
          </p>
        </div>

        <div className="h-1 w-44 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/2 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
}
