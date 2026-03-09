import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import MainLayout from './Layouts/MainLayout'
import Toaster from './components/Toaster/Toaster'

function App() {

  return (
    <>
    <Toaster/>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
