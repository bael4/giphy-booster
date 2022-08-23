/* eslint-disable react/react-in-jsx-scope */

import Navbar from './navbar/Navbar'
import AppRouter from './router/AppRouter'
import '../styles/App.css'

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <div className="app_header">
        <header>
          <Navbar />
        </header>
      </div>
      <div>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
