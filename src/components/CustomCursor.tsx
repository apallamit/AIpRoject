import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    // Move cursor instantly
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05, // Faster movement
        ease: "power1.out",
      });
    };

    // Hover effect (smooth transition)
    const hoverEffect = () => {
      gsap.to(cursor, {
        scale: 1.8,
        backgroundColor: "rgba(255, 215, 0, 0.9)", // Gold color
        duration: 0.1, // Quick transition
      });
    };

    const resetEffect = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(40, 241, 255, 0.5)", // Default
        duration: 0.1, // Quick transition back
      });
    };

    // Event Listeners
    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button, a, .hover-target").forEach((el) => {
      el.addEventListener("mouseenter", hoverEffect);
      el.addEventListener("mouseleave", resetEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a, .hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", hoverEffect);
        el.removeEventListener("mouseleave", resetEffect);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white bg-opacity-50 rounded-full pointer-events-none z-50 transition-transform"
      style={{ mixBlendMode: "difference" }}
    />
  );
};

export default CustomCursor;
