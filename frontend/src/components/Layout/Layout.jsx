import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

export const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer />
    </div>
    
  )
}

export default Layout