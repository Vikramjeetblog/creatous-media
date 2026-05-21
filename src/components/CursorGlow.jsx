import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.background = `
          radial-gradient(
            280px circle at ${mouseX}px ${mouseY}px,
            rgba(255,255,255,0.10),
            transparent 60%
          ),
          radial-gradient(
            160px circle at ${mouseX}px ${mouseY}px,
            rgba(255,255,255,0.06),
            transparent 60%
          )
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-0

        transition-all
        duration-300
      "
    />
  );
};

export default CursorGlow;