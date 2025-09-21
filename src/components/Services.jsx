import { Link } from 'react-router-dom';
import './CSS/services.css';

function Services(){
    return(
        <div className="services-container">
            <h3>Services I Offer</h3>
            <p>Click on the service you are interested in to contact me for more information.</p>
            <ul>
                <li><Link to="/contactpage">General Programming</Link></li>
                <li><Link to="/contactpage">Game Development</Link></li>
                <li><Link to="/contactpage">Software Development</Link></li>
            </ul>
        </div>
    );
}

export default Services;