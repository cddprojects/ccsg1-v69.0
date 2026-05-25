"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Keep opacity at 1 so content stays visible if IntersectionObserver never fires (e.g. some previews). */
const fadeUp: Variants = {
  hidden: { opacity: 1, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.12 as const };

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
};

export function MotionSection({
  id,
  className = "",
  children,
  delay = 0,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}

export function MotionStagger({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
