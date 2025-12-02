export const isBrowser = () => typeof window !== 'undefined';

// Detects if the document is in right-to-left (RTL) mode by checking the dir attribute
// on the root HTML element. This is used to adjust scroll offsets for RTL layouts.
export function isRTL() {
  return isBrowser() && document.documentElement.dir === 'rtl';
}
