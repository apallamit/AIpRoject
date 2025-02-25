import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const StarWaveAnimation: React.FC = () => {
  const starContainerRef = useRef<HTMLDivElement | null>(null);
  const waveContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");

  useEffect(() => {
    const starContainer = starContainerRef.current;
    const waveContainer = waveContainerRef.current;
    if (!starContainer || !waveContainer) return;

    const stars = starContainer.querySelectorAll(".star");
    const waves = waveContainer.querySelectorAll(".wave");

    // Star Animation (Falling & Twinkling)
    const animateStars = (direction: "down" | "up") => {
      stars.forEach((star) => {
        const randomDuration = 4 + Math.random() * 3;
        const randomDelay = Math.random() * 3;

        gsap.to(star, {
          y: direction === "down" ? "100vh" : "-100vh",
          duration: randomDuration,
          repeat: -1,
          ease: "linear",
          delay: randomDelay,
          scrub:1,
        });

        gsap.to(star, {
          opacity: 0.3 + Math.random() * 0.7,
          repeat: -1,
          yoyo: true,
          duration: 0.5 + Math.random() * 1.5,
          scrub:1,
        });
      });
    };

    animateStars(scrollDirection);

    // Wave Animation (Moving Horizontally & Floating)
    const animateWaves = (speedMultiplier: number) => {
      waves.forEach((wave, index) => {
        const randomDuration = 10 + Math.random() * 6;
        const randomDelay = Math.random() * 2;

        gsap.to(wave, {
          x: "-120vw",
          duration: randomDuration / speedMultiplier,
          repeat: -1,
          ease: "linear",
          delay: randomDelay,
          scrub:1,
        });

        gsap.to(wave, {
          y: `+=${15 + Math.random() * 10}px`,
          repeat: -1,
          yoyo: true,
          duration: 4 + Math.random() * 2,
          ease: "sine.inOut",
          scrub:1,
        });
      });
    };

    animateWaves(scrollSpeed);

    // Adjust animation speed & direction on scroll
    let lastScrollTop = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollSpeed(currentScroll > lastScrollTop ? 1.5 : 0.8);
      setScrollDirection(currentScroll > lastScrollTop ? "down" : "up");
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollSpeed, scrollDirection]);

  return (
    <div>
      {/* Star Rain */}
      <div ref={starContainerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              width: `${4 + Math.random() * 3}px`,
              height: `${4 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Waves */}
      <div ref={waveContainerRef} className="fixed bottom-0 left-0 w-full h-64 pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="wave"
            style={{
              left: `${i * 20}vw`,
              bottom: `${i * 15}px`,
              width: "150vw",
              height: `${80 + i * 20}px`,
              opacity: 0.5 - i * 0.08,
              filter: `blur(${i * 3}px)`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          .star {
            position: absolute;
            background-color: #00FFFF;
            clip-path: polygon(
              50% 0%, 61% 35%, 98% 35%, 68% 57%,
              79% 91%, 50% 70%, 21% 91%, 32% 57%,
              2% 35%, 39% 35%
            );
            opacity: 0.8;
            box-shadow: 0 0 8px rgba(248, 251, 251, 0.8), 0 0 15px #00FFFF;
          }

          .wave {
            position: absolute;
            background: linear-gradient(90deg, rgba(0, 255, 255, 0.5), rgba(0, 191, 255, 0.7));
            clip-path: polygon(
              0% 70%, 10% 50%, 20% 65%, 30% 50%, 40% 75%,
              50% 50%, 60% 65%, 70% 50%, 80% 75%, 90% 50%, 100% 65%
            );
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.6);
          }
        `}
      </style>
    </div>
  );
};

export default StarWaveAnimation;