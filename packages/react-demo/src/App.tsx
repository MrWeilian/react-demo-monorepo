import { useMyContext } from '@my/react-bundle-context'
import './App.css'

function App() {
  const { count, setCount } = useMyContext()!

  return (
    <>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>addCount</button>
    </>
  )
}

export default App
