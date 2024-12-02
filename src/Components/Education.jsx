import React from 'react'
import "../css/Education.css"

export default function Education() {
  return (
    <div className='fifth-container'>
      <div className="content5">
      <div className="circle5 content5-top-left"></div>
      <div className="circle5 content5-bottom-right"></div>
        <h2 className='education-h2'>Education</h2>
        <div className="education-container">
            <div className='uni'>
                <p className='education-p'>Department of History, Faculty of Humanities, University of Debrecen, Debrecen</p>
                <p className='education-p'>2015-2019</p>
            </div>
            <div className='high-s'>
                <p className='education-p'>Szentanna Sámuel High School, Karcag</p>
                <p className='education-p'>2011-2015</p>
            </div>
            <div className='elementary-s'>
                <p className='education-p'>Elementary School, Kunmadaras</p>
                <p className='education-p'>2011-2003</p>
            </div>
        </div>
      </div>
    </div>
  )
}
