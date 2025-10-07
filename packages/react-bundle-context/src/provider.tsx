import { useState, useMemo } from 'react'
import { MyContext } from './context'

export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(1)
  const myContext = useMemo(() => ({
    count,
    setCount
  }), [count])
  return <MyContext.Provider value={myContext}>
    {children}
  </MyContext.Provider>
}