import { Link } from "react-router"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMEMIND</p>
        </Link>

        <Link to="/upload" className="primary-button w-fit">
        Upload Resume
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
