import './menu.css';
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="main">
           <Link className="main-item" to="/links">
            Link Gerado
           </Link>
        </div>
    )
}