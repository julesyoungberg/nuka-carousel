import { isBrowser, isRTL } from './browser';

describe('browser utils', () => {
  describe('isBrowser', () => {
    it('should return true in a browser environment', () => {
      expect(isBrowser()).toBe(true);
    });
  });

  describe('isRTL', () => {
    let originalDir: string;

    beforeEach(() => {
      originalDir = document.documentElement.dir;
    });

    afterEach(() => {
      document.documentElement.dir = originalDir;
    });

    it('should return true when document direction is rtl', () => {
      document.documentElement.dir = 'rtl';
      expect(isRTL()).toBe(true);
    });

    it('should return false when document direction is ltr', () => {
      document.documentElement.dir = 'ltr';
      expect(isRTL()).toBe(false);
    });

    it('should return false when document direction is not set', () => {
      document.documentElement.dir = '';
      expect(isRTL()).toBe(false);
    });

    it('should return false when document direction is auto', () => {
      document.documentElement.dir = 'auto';
      expect(isRTL()).toBe(false);
    });
  });
});
