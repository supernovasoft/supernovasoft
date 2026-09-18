/** Shared motion vocabulary. Kept out of component files so fast-refresh stays happy. */

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const stagger = (delayChildren = 0) => ({
  animate: { transition: { staggerChildren: 0.08, delayChildren } },
});
