import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Moneyon Hackathon</h1>
            <div className="links">
                <Link to="/ideas">Idea List</Link>
                <Link to="/submit" style={{
                    color: 'white',
                    backgroundColor: '#04e762',
                    borderRadius: '8px'
                }}>Submit Idea</Link>
            </div>
        </nav>
    );
}

export default Navbar;