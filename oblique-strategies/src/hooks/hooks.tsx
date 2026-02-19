import { useEffect, useRef, useState } from "react";

export function useSmartTextAlign() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {

    if (!ref.current) {
      return;
    }

    const el = ref.current;

    const observer = new ResizeObserver(() => {
      const styles = getComputedStyle(el);
      const lineHeight = parseFloat(styles.lineHeight);
      const lines = Math.round(el.scrollHeight / lineHeight);

      setIsWrapped(lines > 1);
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, isWrapped };
}
