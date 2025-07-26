"use client";
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: "#000" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#00ffcc" },
          links: {
            enable: true,
            color: "#00ffcc",
            distance: 150,
            opacity: 0.5,
          },
          move: { enable: true, speed: 2 },
          number: { value: 50 },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 5 } },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
