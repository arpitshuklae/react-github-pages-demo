import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <main className="container">
        <h1>React GitHub Pages Demo</h1>

        <p>
          This application is tested, built, and deployed using GitHub Actions.
        </p>

        <p data-testid="count">Count: {count}</p>

        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </main>
  )
}

export default App