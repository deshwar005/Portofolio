import React from 'react'
import './Projects.css'
import Projectui from './Projectui'
import netfliximg from '../Images/download.jpg'
function Projects() {
  const url_project ="https://netflix-clone580.netlify.app/";
  return (
    <div>
      <div className='project_main'>

        
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>
        <Projectui image={netfliximg} name={"Netflix"} url={url_project}/>

      </div >
    </div>
  )
}

export default Projects
