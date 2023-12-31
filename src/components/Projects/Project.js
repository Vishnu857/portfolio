 import React from 'react'
import { useState } from 'react'
import "./Project.css"
 
 const Project = ({img,title,desc,link}) => {
  const [show,setShow]=useState(false) 
  return (
     <a href={link}>
      <div className="project"onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        {show?(<div className='project_content'>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>):(<div><p>{title}</p><img src={img} alt=''/></div>)}
      </div>
      
     </a>
   )
 }
 
 export default Project