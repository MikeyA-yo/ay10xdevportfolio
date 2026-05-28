"use client";

import { useState } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {children}
    </>
  );
}
