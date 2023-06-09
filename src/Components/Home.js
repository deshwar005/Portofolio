import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/5484597.jpg'
import { Link } from "react-router-dom";
// use the icon



function Home(){
    return(
        <div>
        <nav>
            <div className="wrapper">
           
            <ul className="d-flex ">
            <h3 className="logo"><div className="color">c</div> gunadeshwar</h3>
                <li> <Link className="links" to="/">Home</Link> </li>
                <li> <Link className="links" to="/about">About</Link> </li>
                <li><Link className="links" to="/contact">Contact</Link></li>
                <li><Link className="links" to={"/projects"}>Projects</Link></li>
            </ul>
            </div>
            </nav>
            <div className="Titlecard">
                <div className="box1">
                    <div className="big_box1">
                        <div className="heading typing-animation">
                        Hey,I'm Deshwar,a Web Developer </div>
                        <div className="small_box1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </div>

                    </div>
                    <div className="big_box2">
               

                        <div className="font_img">
                        <button>Contact Me</button>

                        
                        <div className="font_bg">
                            <a href="https://instagram.com/deshwar_sd?igshid=ZGUzMzM3NWJiOQ==">
                            <FontAwesomeIcon  icon={faInstagram} style={{ fontSize: '30px' }} />
                            </a>
                        
                        </div>
                        <div className="font_bg">
                        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px' }} />
                        </div>
                        <div className="font_bg">
                            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }} /></a>
                        </div>
                        <div className="font_bg">
                        <FontAwesomeIcon icon={faBasketballBall} style={{ fontSize: '30px' }}/>
                        </div>
                        </div>
                    
                   
                    
                   
                    </div>
                </div>
                <div className="box2">
      

                        <img className="img-1" src={logo} alt="img1" />



                </div>
            </div>
     
         </div>
    );
}

export default Home;