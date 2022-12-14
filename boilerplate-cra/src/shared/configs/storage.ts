import Cookies from 'js-cookie';

export class CookieStorage {
  constructor() {}

  static setItem(key: string, item: unknown) {
    const value = typeof item === 'string' ? item : JSON.stringify(item);
    Cookies.set(key, value);
    return item;
  }

  static setPersistItem(key: string, item: unknown) {
    // 2years
    const value = typeof item === 'string' ? item : JSON.stringify(item);
    Cookies.set(key, value, { expires: 365 * 2 });
    return item;
  }

  static getItem(key: string) {
    return Cookies.get(key);
  }

  static removeItem(key: string) {
    Cookies.remove(key);
  }
}

export class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window !== 'undefined') localStorage.setItem(key, item);
  }

  static getItem(key: string) {
    if (typeof window !== 'undefined') return localStorage.getItem(key);

    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') localStorage.removeItem(key);
  }
}
export class SessionStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window !== 'undefined') sessionStorage.setItem(key, item);
  }

  static getItem(key: string) {
    if (typeof window !== 'undefined') return sessionStorage.getItem(key);

    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') sessionStorage.removeItem(key);
  }
}
