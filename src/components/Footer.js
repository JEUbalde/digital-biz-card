import React from "react";
import Facebook from '../images/facebook-icon.svg';
import Instagram from '../images/instagram-icon.svg';
import Twitter from '../images/twitter-icon.svg';

export default function Footer(){

    return(
        <footer className="footer">
            <a href="https://www.facebook.com/profile.php?id=100002251694653">
                <img 
                    src={Facebook} 
                    className="facebook-icon" 
                    alt="facebook icon"
                />
            </a>
            <a href="https://www.instagram.com/koyaeddd/">
                <img 
                    src={Instagram} 
                    className="instagram-icon" 
                    alt="instagram icon"
                />
            </a>
            <a href="https://twitter.com/PapiEduardoo">
                <img 
                    src={Twitter} 
                    className="twitter-icon" 
                    alt="twitter icon"
                />
            </a>
        </footer>
    );
}