/* eslint-disable react/react-in-jsx-scope */

import Navbar from './navbar/Navbar'
import AppRouter from './router/AppRouter'

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <header>
        <Navbar />
      </header>
      <AppRouter />
    </div>
  )
}

export default App
