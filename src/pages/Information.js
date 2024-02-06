import React from 'react'
import Navbar from '../components/Navbar'

const Information = () => {
   return (
      <div style={{ backgroundColor: 'white', width: '100vw', height: '100vw' }} >
         <Navbar />
         <div className='center' style={{ flexDirection: 'column' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>구글의 어쩌구 저쩌구는 세카이노 최강 입니다.</h3>

            {/* <div style={{borderRadius:'20px',overflow:'hidden'}}>
            <iframe width='560' height='290' src='https://www.youtube.com/embed/DC13_hnbzCA?si=L-B0QDedtVy-gmLc' frameborder='0'></iframe>
         </div> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HzD6RYV_vE4?si=19oCQROQcy54Dhsj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='true'
               style={{ borderRadius: '5px' }}>
            </iframe>

         </div>
      </div>
   )
}

export default Information