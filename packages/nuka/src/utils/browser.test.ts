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

    it.each([
      ['rtl', true],
      ['ltr', false],
      ['', false],
      ['auto', false],
    ])(
      'should return %s when document direction is "%s"',
      (dir, expected) => {
        document.documentElement.dir = dir;
        expect(isRTL()).toBe(expected);
      },
    );
  });
});
