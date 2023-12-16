// eslint-disable-next-line import/no-named-as-default
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './lang/en.json'
import nb from './lang/nb.json'
import zh_cn from './lang/zh-cn.json'
import appConfig from '@/configs/app.config'

const resources = {
    en: {
        translation: en,
    },
    zhCn: {
        translation: zh_cn,
    },
    nb: {
        translation: nb,
    },
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: appConfig.locale,
    lng: appConfig.locale,
    interpolation: {
        escapeValue: false,
    },
})

export const dateLocales: {
    [key: string]: () => Promise<ILocale>
} = {
    en: () => import('dayjs/locale/en'),
    nb: () => import('dayjs/locale/nb'),
    zhCn: () => import('dayjs/locale/zh-cn'),
}

export default i18n
