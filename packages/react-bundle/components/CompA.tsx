import { useMyContext } from '@my/react-bundle-context'

import type { FC } from 'react'

const CompA: FC = () => {
  const { count, setCount } = useMyContext()!
  return <>
    <div>CompA count: { count }</div>
    <button onClick={() => setCount(count + 1)}>CompA addCount</button>
  </>
}

export default CompA