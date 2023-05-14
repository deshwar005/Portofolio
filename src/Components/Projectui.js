import React from 'react'
import './Projectui.css'
function Projectui(props) {
  return (
    <div>
        <div className="container">
          <a href={props.url}>
            <div className='project_image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='title'>
              <h1>{props.name}</h1></div>
              </a>
        </div>
      
    </div>
  )
}

export default Projectui
