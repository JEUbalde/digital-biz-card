import React from "react";
import Profile from '../images/profile.jpg';

export default function Information(){

    return(
        <>
            <img src={Profile} className="profile" alt="profile pic of edward ubalde"/>
            <h1 className="name">John Edward Ubalde</h1>
            <h3 className="job-role">Frontend Developer</h3>
            <a href="https://jeubalde-portfolio.vercel.app/">
                <h5 className="portfolio">jeubalde-portfolio.vercel.app</h5>
            </a>
            
            <div>
                <a href="mailto:johnedward.ubalde@gmail.com">
                    <button className="button-email">Email</button>
                </a>
                <a href="https://www.linkedin.com/in/john-edward-ubalde/">
                    <button className="button-linkedin" >LinkedIn</button>
                </a>
            </div>
        </>
    );
}