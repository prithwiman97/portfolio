import { useCallback, useEffect, useState } from "react";

export const useDisplay = () => {
  const [isMobile, setIsMobile] = useState(
    document.documentElement.clientWidth < 768
  );

  const onResize = useCallback(() => {
    setIsMobile(document.documentElement.clientWidth < 768);
  }, [setIsMobile]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  return {
    isMobile,
  };
};
