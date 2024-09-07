/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
    return (
        <div className="flex space-x-8">
            <a href="#" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
