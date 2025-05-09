import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.tsx'
import Register from './components/register.tsx'

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App