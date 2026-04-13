"use client";

import { useState, useEffect } from "react";

const BASE_COUNT = 179;
const STORAGE_KEY = "dtp_visit_count";
const SESSION_KEY = "dtp_session_visited";

export function useVisitorCount() {
  const [count, setCount] = useState<number>(BASE_COUNT);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) ?? "0", 10);
    const alreadyVisited = sessionStorage.getItem(SESSION_KEY);

    let current = stored;
    if (!alreadyVisited) {
      current = stored + 1;
      localStorage.setItem(STORAGE_KEY, String(current));
      sessionStorage.setItem(SESSION_KEY, "1");
    }

    setCount(BASE_COUNT + current);
  }, []);

  return count;
}
