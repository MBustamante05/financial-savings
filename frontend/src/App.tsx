import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App