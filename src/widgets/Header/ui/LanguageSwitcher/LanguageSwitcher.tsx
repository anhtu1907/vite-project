import { useTranslation } from 'react-i18next';

import { languageIconList, type SupportedLngsType } from '@/shared/config';

import { AppIcon, Button } from '@/shared';

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language as SupportedLngsType;
    const toggleTranslate = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
    }
    return (
        <Button onClick={toggleTranslate} theme='ghost'>
            <AppIcon Icon={languageIconList[currentLanguage]} />
        </Button>
    )
}