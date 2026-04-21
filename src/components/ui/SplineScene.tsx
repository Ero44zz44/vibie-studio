"use client";

import { Suspense, lazy, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full border-2 animate-spin"
        style={{ borderColor: "rgba(175,136,255,0.2)", borderTopColor: "#af88ff" }}
      />
    </div>
  );
}

export default function SplineScene() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let canvas: HTMLCanvasElement | null = null;

    function fireEvents(clientX: number, clientY: number) {
      // Dispatch on window — Spline runtime may listen here
      window.dispatchEvent(
        new MouseEvent("mousemove", { clientX, clientY, bubbles: true, view: window })
      );
      if (!canvas) return;
      // pointermove — modern Spline versions listen to this
      canvas.dispatchEvent(
        new PointerEvent("pointermove", {
          clientX,
          clientY,
          bubbles: true,
          cancelable: true,
          view: window,
          pointerType: "mouse",
          isPrimary: true,
        })
      );
      // mousemove — fallback for older runtime versions
      canvas.dispatchEvent(
        new MouseEvent("mousemove", { clientX, clientY, bubbles: true, cancelable: true, view: window })
      );
    }

    function onTouch(e: TouchEvent) {
      const t = e.touches[0] ?? e.changedTouches[0];
      if (t) fireEvents(t.clientX, t.clientY);
    }

    // MutationObserver watches for Spline's canvas appearing in the DOM
    const observer = new MutationObserver(() => {
      const found = container.querySelector("canvas");
      if (found && found !== canvas) {
        canvas = found as HTMLCanvasElement;
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    // Check immediately in case it's already there
    canvas = container.querySelector("canvas");

    container.addEventListener("touchstart", onTouch, { passive: true });
    container.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      observer.disconnect();
      container.removeEventListener("touchstart", onTouch);
      container.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {!loaded && <SplineLoader />}
      <Suspense fallback={<SplineLoader />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Spline
            scene={SCENE_URL}
            onLoad={() => setLoaded(true)}
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </Suspense>
    </div>
  );
}
