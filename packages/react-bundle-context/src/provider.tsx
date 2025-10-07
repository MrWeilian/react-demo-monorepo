import { useState, useMemo } from 'react'
import { MyContext } from './context'

import type { FC, ReactNode } from 'react'

export const MyContextProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [count, setCount] = useState(1)
  const myContext = useMemo(() => ({
    count,
    setCount
  }), [count])
  return <MyContext.Provider value={myContext}>
    {children}
  </MyContext.Provider>
}