import { Link } from 'react-router-dom'
import './Navbar.scss';
import logo from '../Components/fillingHeart.gif';

function Navbar() {
	return (
		<nav>
			<a href="./">
				<img id = "logos" src={logo} alt="pixel hearts for luke <3" />
			</a>
			<li>
				
				<Link to ='/'> Message</Link>
				<Link to ='/'> You+Me</Link>
				<Link to ='/'> Analytics</Link>

			</li>
		</nav>
	);
}

export default Navbar;
