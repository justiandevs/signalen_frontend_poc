import { useTranslations } from 'next-intl'
import { LinkWrapper } from '@/components/ui/LinkWrapper'
import { IncidentDescriptionForm } from '@/app/[locale]/incident/components/IncidentDescriptionForm'
import { client } from '@/lib/apiClient'

const getMySignalsList = async () => {
  const response = await client.v1.v1MySignalsList()

  return response
}

export default async function Home() {
  return <IncidentDescriptionPage />
}

function IncidentDescriptionPage() {
  const t = useTranslations('describe-report')

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>{t('heading')}</h1>
        <p>
          {t.rich('description', {
            link: (chunks) => (
              <LinkWrapper href={'/notifications-map'}>{chunks}</LinkWrapper>
            ),
          })}
        </p>
        <IncidentDescriptionForm />
        {}
      </div>
    </>
  )
}
