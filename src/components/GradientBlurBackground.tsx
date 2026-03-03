import { memo } from 'react';

/**
 * Reusable gradient blur background effect
 * Used across multiple pages for consistent visual styling
 * Creates purple/magenta gradient blur orbs
 */
export const GradientBlurBackground = memo(function GradientBlurBackground() {
  return (
    <div className="absolute inset-0 opacity-20" aria-hidden="true">
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#8620e0] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#f900f1] rounded-full blur-[100px]" />
    </div>
  );
});
