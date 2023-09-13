import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import HomePage from "./pages/Home/HomePage"
import NavBar from "./components/Layout/NavBar"
const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/nav" element={<NavBar />} />
        <Route path="/test" element={"Test"} />
        <Route path="/home" element={<Layout><HomePage /></Layout>} />
        <Route path="/user/login" element={<Layout></Layout>} />
      </Routes>
    </div>
  )
}

export default App
