export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.epmartins.com.br').replace(/\/$/, '');

export const SITE_NAME = 'Eduardo Pires';

export function toAbsoluteUrl(url: string) {
  if (!url) {
    return SITE_URL;
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
}
