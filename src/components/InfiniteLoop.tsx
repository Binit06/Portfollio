import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteLoop = ({
  children,
  direction = "left",
  speed = 25,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const [copyCount, setCopyCount] = useState(2);
  const [chunkWidth, setChunkWidth] = useState(0);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current || !baseRef.current) return;

      const viewportWidth = containerRef.current.getBoundingClientRect().width;
      const singleWidth = baseRef.current.getBoundingClientRect().width;

      setChunkWidth(singleWidth);

      const needed = Math.ceil(viewportWidth / singleWidth) + 2;
      setCopyCount(Math.max(2, needed));
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [children]);

  useEffect(() => {
    if (!chunkWidth) return;

    if (direction === "left") {
      controls.start({
        x: [0, -chunkWidth],
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.start({
        x: [-chunkWidth, 0],
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        },
      });
    }
  }, [chunkWidth, direction, speed, controls]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <motion.div animate={controls} className="flex whitespace-nowrap w-max">
        {Array.from({ length: copyCount }).map((_, i) => (
          <div
            key={i}
            className="flex gap-6 pr-6"
            ref={i === 0 ? baseRef : null}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLoop;