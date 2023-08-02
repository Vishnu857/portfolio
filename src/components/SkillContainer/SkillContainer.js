import React from 'react'
import { Element } from 'react-scroll'
import "./SkillContainer.css";
import { LinearProgress } from '@mui/material';
const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='image'>
            <img src="https://drive.google.com/uc?export=view&id=1VwShu9z4HFOA94cMZnqLs70SLPkaVBjv" alt=''></img>
        </div>
        <div className='text'>
          <h2>SKILLSET</h2>
          <div className='skillcontainer_skills'>
            <h5>C</h5>
            <div className='progress_container'>
              <LinearProgress variant='determinate' value={70}/>
            </div>
          </div>
          <div className='skillcontainer_skills'>
            <h5>JAVA</h5>
            <div className='progress_container'>
              <LinearProgress  variant='determinate' value={90}/>
            </div>
          </div>

          <div className='skillcontainer_skills'>
            <h5>REACT</h5>
            <div className='progress_container'>
              <LinearProgress variant='determinate' value={70}/>
            </div>
          </div>
          <div className='skillcontainer_skills'>
            <h5>NODE JS</h5>
            <div className='progress_container'>
              <LinearProgress variant='determinate' value={60}/>
            </div>
          </div>
          <div className='skillcontainer_skills'>
            <h5>GITHUB</h5>
            <div className='progress_container'>
              <LinearProgress variant='determinate' value={60}/>
            </div>
          </div>
        </div>
    </Element>
  )
}

export default SkillContainer