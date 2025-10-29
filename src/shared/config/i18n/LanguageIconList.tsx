import type { FunctionComponent, SVGProps } from "react";
import type { supportedLngs } from "./i18n";

import EnglishIcon from '@/shared/assets/icons/English.svg?react';
import VietnamIcon from '@/shared/assets/icons/VietnamIcon.svg?react';

export type SupportedLngsType = (typeof supportedLngs)[number];

type LanguageIconListType = Record<
    SupportedLngsType,
    FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconListType = {
    en: EnglishIcon,
    vi: VietnamIcon,
}