const functions = window.parent as any;

type OpenSelector = (title: string, items: OpenSelectorItems[], cb: (key: string, value: string) => void, notClose?: boolean) => void;
type OpenSelectorItems = { key: string; value: string; };
export const OpenSelector = functions.OpenSelector as OpenSelector;

type OpenSelectorAsync = (title: string, items: OpenSelectorItems[], notClose?: boolean) => Promise<{ key: string, value: string }>;
export const OpenSelectorAsync = functions.OpenSelectorAsync as OpenSelectorAsync;

type PromptModal = (title: string, subtitle: string, placeholder: string, cb: (text: string) => void, cancelText?: string, confirmText?: string) => void;
export const PromptModal = functions.PromptModal as PromptModal;

type PromptModalAsync = (title: string, subtitle: string, placeholder: string, cancelText?: string, confirmText?: string) => Promise<string>;
export const PromptModalAsync = functions.PromptModalAsync as PromptModalAsync;

type OpenSelectCamItem = () => Promise<string>;
export const OpenSelectCamItem = functions.OpenSelectCamItem as OpenSelectCamItem;

type OpenSelectPhotoMenu = () => Promise<string>;
export const OpenSelectPhotoMenu = functions.OpenSelectPhotoMenu as OpenSelectPhotoMenu;

const filters = [
    'filter-1977',
    'filter-aden',
    'filter-amaro',
    'filter-ashby',
    'filter-brannan',
    'filter-brooklyn',
    'filter-charmes',
    'filter-clarendon',
    'filter-crema',
    'filter-dogpatch',
    'filter-earlybird',
    'filter-gingham',
    'filter-ginza',
    'filter-hefe',
    'filter-helena',
    'filter-hudson',
    'filter-inkwell',
    'filter-juno',
    'filter-kelvin',
    'filter-lark',
    'filter-lofi',
    'filter-ludwig',
    'filter-maven',
    'filter-mayfair',
    'filter-moon',
    'filter-nashville',
    'filter-perpetua',
    'filter-poprocket',
    'filter-reyes',
    'filter-rise',
    'filter-sierra',
    'filter-skyline',
    'filter-slumber',
    'filter-stinson',
    'filter-sutro',
    'filter-toaster',
    'filter-valencia',
    'filter-vesper',
    'filter-walden',
    'filter-willow',
    'filter-xpro-ii',
] as const;

type ExtractFilter<S extends string> = S extends `${infer R}` ? R : S;
type OpenImage = (url: string, filter: ExtractFilter<typeof filters[number]>, id?: string) => void;
export const OpenImage = functions.OpenImage as OpenImage;

type SendPhoneNotification = (app: string, title: string, text: string, timeout?: number, disableBadge?: boolean) => void;
export const SendPhoneNotification = functions.SendPhoneNotification as SendPhoneNotification;

type SendPhoneNotificationOld = (app: string, title: string, text: string, timeout?: number, disableBadge?: boolean) => void;
export const SendPhoneNotificationOld = functions.SendPhoneNotificationOld as SendPhoneNotificationOld;

type OpenSelectGifMenu = () => Promise<string>;
export const OpenSelectGifMenu = functions.OpenSelectGifMenu as OpenSelectGifMenu;

type OpenRequestMoneyModel = () => Promise<string>;
export const OpenRequestMoneyModel = functions.openRequestMoneyModal as OpenRequestMoneyModel;

type Rotate = (val?: boolean) => void;
export const Rotate = functions.Rotate as Rotate;

type CallData = {
    number: string;
    name: string;
};
type SetupCall = (data: CallData) => void;
export const SetupCall = functions.SetupCall as SetupCall;
