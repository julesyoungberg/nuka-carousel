export const isBrowser = () => typeof window !== 'undefined';

export function isRTL() {
  return isBrowser() && document.documentElement.dir === 'rtl';
}
