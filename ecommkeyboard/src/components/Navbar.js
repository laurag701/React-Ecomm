
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='navbar'>
       <nav className="menu">
       <img src="./img/computer.png" className="logo" alt = "" width="125"/>
        <NavLink className='btn-try' to='/'>Home</NavLink>
        <NavLink className='btn-try' to='/products'>Products</NavLink>
        <NavLink className='btn-try' to='/contact'>Contact</NavLink>
    </nav>
    </div>
  )
}
export default Navbar;