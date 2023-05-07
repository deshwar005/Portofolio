import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

// use the icon



function Home(){
    return(
        <div>
        <nav>
            <div className="wrapper">
            <h3 className="logo"><div className="color">c</div> gunadeshwar</h3>
            <ul className="d-flex ">
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
            </div>
            </nav>
            <div className="Titlecard">
                <div className="box1">
                    <div className="big_box1">
                        <div className="heading">
                        Hey,I'm Abo,a product designer with 7 years of experince
                        </div>
                        <div className="small_box1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </div>

                    </div>
                    <div className="big_box2">
               

                        <div className="font_img">
                        <button>Contact Me</button>

                        
                        <div className="font_bg">
                        <FontAwesomeIcon  icon={faInstagram} style={{ fontSize: '30px' }} />
                        </div>
                        <div className="font_bg">
                        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px' }} />
                        </div>
                        <div className="font_bg">
                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }} />
                        </div>
                        <div className="font_bg">
                        <FontAwesomeIcon icon={faBasketballBall} style={{ fontSize: '30px' }}/>
                        </div>
                        </div>
                    
                   
                    
                   
                    </div>
                </div>
                <div className="box2">
                <div className="big_box1">
                        <div className="heading">
                        Hey,I'm Abo,a product designer with 7 years of experince
                        </div>
                        <div className="small_box1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </div>

                    </div>
                </div>
            </div>
     
         </div>
    );
}

export default Home;