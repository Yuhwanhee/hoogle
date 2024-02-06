import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

   const navigate = useNavigate()


   const judgePath = (page) => {
      if (window.location.pathname === page) {
         return '2px solid blue'
      } else {
         return ''
      }
   }









   return (
      <div style={{ width: '37vw', height: '80px', backgroundColor: 'white', display: 'flex',marginLeft:'20px' }}>

         <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', width: '37vw', height: '20px' }}>


            <div style={{ color: 'black', fontSize: '20px', cursor: 'pointer', marginTop: '11px' }} onClick={() => navigate('/')}>
               hoogle
            </div>

            <div className='info-o' style={{ cursor: 'pointer', marginTop: '15px', borderBottom: judgePath('/information'), height: '160%' }}onClick={()=>window.location.href="/information"}>
               구글정보
            </div>

            <div className='info-o' style={{ cursor: 'pointer', marginTop: '15px',borderBottom: judgePath('/hoogleonkorea') ,height:'160%'}} onClick={()=>window.location.href='/hoogleonkorea'}>google of korea</div>

            <div className='info-o' style={{ cursor: 'pointer', marginTop: '15px' }}>제품</div>

            <div className='info-o' style={{ cursor: 'pointer', marginTop: '15px' }}>약속</div>

            <div className='info-o' style={{ cursor: 'pointer', marginTop: '15px' }}>스토리</div>


         </div>
      </div>
   )
}

export default Navbar