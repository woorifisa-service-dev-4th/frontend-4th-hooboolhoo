'use client'

import dynamic from 'next/dynamic'

const Provider = dynamic(
    () => import('@/components/ui/provider').then((mod) => mod.Provider),
    {
        ssr: false,
    }
)
const ClientProvider = ({children}) => {
  return (
    <Provider>{children}</Provider>
  )
}

export default ClientProvider