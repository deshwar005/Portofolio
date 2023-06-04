import React from 'react'
import './Projects.css'
import Projectui from './Projectui'
import netfliximg from '../Images/download.jpg'
import { Link } from "react-router-dom";
function Projects() {
  const url_project ="https://netflix-clone580.netlify.app/";
  return (
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
      <div className='project_main'>

        
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        


      </div >
    </div>
  )
}

export default Projects
