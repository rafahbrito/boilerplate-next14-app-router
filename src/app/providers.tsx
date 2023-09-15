import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'

function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Providers
