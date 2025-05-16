import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 py-10 text-[var(--text-secondary)]">
      {items.map((item, idx) => {
        const Icon = item.Icon;

        return (
          <div
            key={idx}
            className="relative group block p-1 sm:p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-600/[0.8] block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-md w-full p-1 sm:p-2 overfflow-hidden bg-black group-hover:ring-2 ring-green-500 relative z-20 transition-all duraton-500 cursor-pointer">
              <div className="py-10 z-50 relative space-y-5">
                <Icon className="w-6 sm:w-8 h-6 sm:h-8 mx-auto" />
                <p className="sm:text-2xl font-bold text-center  text-xl text-[var(--text-secondary)]">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};