import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/inbox'>Inbox</Link>
      <Link to='/starred'>Starred</Link>
    </div>
  )
}

export default Navbar
