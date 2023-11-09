import { useTranslations } from 'next-intl'
import { LinkWrapper } from '@/components/ui/LinkWrapper'
import { IncidentDescriptionForm } from '@/app/[locale]/incident/components/IncidentDescriptionForm'
import { client } from '@/lib/apiClient'
import { ApiError } from '@/sdk'
import axios from 'axios'

const getMyPrivateAreasList = async () => {
  const response = await client.v1
    .v1PrivateAreasList()
    .then((res) => console.log(res))
    .catch((err: ApiError) => console.log(err))

  return response
}

export default async function Home() {
  const privateAreasList = await getMyPrivateAreasList()

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
