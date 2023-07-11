import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from './i18n/settings'
import { useTranslation } from './i18n'


export default async function Page({ params: { lng } }) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    // lng = "de"
    // lng = "it" // TODO we can enable this to change the language
    const { t } = await useTranslation(lng)


  return (
    <>
      <main>
        Hello world
        <div>{lng}</div>
        <Trans t={t} i18nKey="welcome"></Trans>
      </main>
    </>
  )
}
