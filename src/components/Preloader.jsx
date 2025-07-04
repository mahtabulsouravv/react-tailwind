import { useEffect, useState } from "react";

export const Preloader = () => {
  const [visible, setVisible] = useState(true);

  // Simulate loading time; replace with your real loading state
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center overflow-hidden select-none">
          {/* Starfield */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <span
                key={i}
                className="absolute bg-white rounded-full opacity-60 animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 0.5}px`,
                  height: `${Math.random() * 2 + 0.5}px`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          {/* Loading Text */}
          <p className="mt-10 text-primary text-lg tracking-widest font-semibold animate-pulse">
            Loading...
          </p>
        </div>
      )}
    </>
  );
};
