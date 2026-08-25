"use client";

import { useEffect } from "react";

/**
 * The root layout's <html lang="en"> can't be overridden per-route without
 * splitting the app into route-group layouts. For this single extra locale,
 * flip the attribute client-side instead — cheap, and doesn't require
 * restructuring the layout tree.
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);

  return null;
}
