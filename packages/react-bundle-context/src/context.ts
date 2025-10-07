import { createContext, useContext } from 'react'

export const MyContext = createContext(null)

export const useMyContext = () => {
  const myContext = useContext(MyContext)

  if (myContext === null) {
    console.error('can not find MyContext.Provider')
    return
  }

  return myContext
}