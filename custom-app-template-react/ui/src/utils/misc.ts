export const isEnvBrowser = (): boolean => !(window as any).invokeNative;
export const noop = () => { };
export const ICON_SETTINGS = {
  size: 32,
  color: '#ffff',
}
export const formatNumber = (amount: string | number) => new Intl.NumberFormat().format(+amount);
export const defaultNumber = (value: string | number) => String(value).split(",").join("");
export const isEmpty = (value: any) => {
  if (value === undefined || value === null) return true;
  if (value == '') return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (typeof value === 'object' && Object.keys(value).length === 0) return true;
  return false;
}

export const NOTIFICATION = {
  toastStyle: { backgroundColor: 'rgba(0,0,0,0.7)' },
  progressStyle: { backgroundColor: 'rgba(255,255,255,0.1)' },
  theme: 'dark',
  autoClose: 3500,
  draggable: false,
  pauseOnHover: false,
  pauseOnFocusLoss: false
} as {
  toastStyle: React.CSSProperties;
  progressStyle: React.CSSProperties;
  theme: 'dark' | 'light';
  autoClose: number;
  draggable: boolean;
  pauseOnHover: boolean;
  pauseOnFocusLoss: boolean
}

export const load = async (url: string) => {
  await fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
}

export const Wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));