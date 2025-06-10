import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faLinkedinIn,
    faGithub,
    faThreads
  } from '@fortawesome/free-brands-svg-icons';

const text = 'I\'m software developer based in Ostrava, Czech Republic, interested in web development, mountains, and good food. Currently I\'m working as a Software Developer under Quorum software, lending hand on Energy Components and it\'s extensions.';
const freeToHire = 'I\'ll be free to work from August 1st 2025. If you are interested, you can contact me at ';
const whereToFindMe = 'You can find me on numerous sites, try your luck finding me, or you can use shortcuts here '

export default function About() {
    return (
        <div id="about" className="page">
            <p className="text-textprimary">How did you even end up here?</p>
            <p className='text-textrest'>{text}</p>
            <p className='text-textrest pt-5'>{freeToHire}<a style={{color: '#6d4aff'}} href='mailto:badura.denis@pm.me'>{'e-mail'}</a> {', or on '}
                <a style={{color: 'blue'}} href="https://linkedin.com/in/denis-badura">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
            </p>
            <p className='text-textrest pt-5'>{
            whereToFindMe
}
            <a style={{color: 'darkmagenta'}} href="https://instagram.com/denis.badura">
                <FontAwesomeIcon icon={faInstagram}/>
            </a> { ', here ' }
            <a href="https://threads.com/denis.badura">
                <FontAwesomeIcon icon={faThreads}/>
            </a> { ', also here ' }
            <a style={{color: 'blue'}} href="https://linkedin.com/in/denis-badura">
                <FontAwesomeIcon icon={faLinkedinIn}/>
            </a> { ', or here ' }
            <a href="https://github.com/denis.badura">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            </p>
        </div>
    )
}
