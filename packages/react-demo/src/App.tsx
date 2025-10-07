import { useMyContext } from '@my/react-bundle-context'
import { CompA } from '@my/react-bundle'
import './App.css'

function App() {
  const { count, setCount } = useMyContext()!

  return (
    <>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>addCount</button>
      <CompA />
    </>
  )
}

export default App
