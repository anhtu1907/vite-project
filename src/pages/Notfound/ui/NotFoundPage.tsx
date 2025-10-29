import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import PageErrorIcon from '@/shared/assets/icons/PageError.svg?react';

import styles from './NotFoundPage.module.scss';

import { Button } from '@/shared';


export const NotFoundPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleClickBack = () => {
        if(window.history.length < 1) {
            navigate("/");
            return;
        }
        navigate(-1);
    }
    return <div className={styles.wrapper}>
        <div className={styles.content}>
            <PageErrorIcon className={styles.icon} />
            <h3 className={styles.title}>{t('notFound.title')}</h3>
            <p className={styles.description}>{t('notFound.description')}</p>
            <Button
                theme='primary'
                form='rounded'
                className={styles.button}
                onClick={handleClickBack}>
                {t('notFound.goBack')}
            </Button>
        </div>
    </div>
}