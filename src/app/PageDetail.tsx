"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useMemo, useState } from "react";

import PageDetailMobile from "./PageDetailMobile";

export default function PageDetail() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    if (!window) return;
    window.addEventListener("resize", handleResize);
    setScreenWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = useMemo(
    () => screenWidth > 600 && screenWidth <= 960,
    [screenWidth]
  );

  const isMobile = useMemo(() => screenWidth <= 600, [screenWidth]);

  if (screenWidth === 0) return <></>;
  return <PageDetailMobile />;
}
