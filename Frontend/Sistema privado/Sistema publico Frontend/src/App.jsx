import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Profile from './Page/Profile'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          {/*<Route path="/Pagina" element={<Pagina/>} />*/}
        </Routes>
      </Router>
    </>
  )
}

export default App
