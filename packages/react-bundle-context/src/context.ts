import { createContext, useContext } from 'react'

export type MyContextValue = {
  count: number
  setCount: (val: number) => void
}

export const MyContext = createContext<MyContextValue>(null!)

export const useMyContext = () => {
  const myContext = useContext(MyContext)

  if (myContext === null) {
    console.error('can not find MyContext.Provider')
    return
  }

  return myContext
}