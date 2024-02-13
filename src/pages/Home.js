import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'
import { jwtDecode } from 'jwt-decode'
import ProfileComponent from '../components/ProfileComponent'
const Home = () => {





   const navigate = useNavigate()

   const viewRef = useRef(null)

   const [isProfile, setIsProfile] = useState(false)
   // const [isLogin, setIsLogin] = useState(false)
   // const [token, setToken] = useState({})
   // const [isView, setIsView] = useState(false)
   const [search, setSearch] = useState("")











   const handleKeyDownSearch = (e) => {
      const key = e.code;
      switch (key) {
         case 'Enter':
            handleSearch();
            break;
         default:

      }
   }

   const handleSearch = () => {
      window.location.href =` /search?q=${search}`
   }




   return (
      <div>
         <div style={{ width: '100vw', height: '30px', display: 'flex', justifyContent: 'space-between' }}>

            <div style={{ color: 'white', width: '120px', justifyContent: 'space-between', display: 'flex', padding: '40px 20px' }}>
               <div onClick={() => window.location.href = '/information'} style={{ cursor: 'pointer' }}>구글정보</div>
               <p3>스토어</p3>
            </div>

            <ProfileComponent />
         </div >
         <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: 'auto'
         }}>






            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

               <h3 style={{ color: 'white', fontSize: '70px', marginTop: '50px', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>hoogle</h3>

               <div style={{
                  position: 'relative', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginTop: '30px'
               }}>



                  <img src={`${process.env.PUBLIC_URL}/bootique.jpeg`} style={{
                     width: '25px', height: '25px',
                     position: 'absolute', left: '20px'
                  }} />


                  <input type='text' style={{
                     width: '800px', borderRadius: '5px', height: '30px', resize: 'none'
                     , padding: '10px 60px', fontSize: '24px'
                  }} value={search} defaultValue={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDownSearch} />



               </div>
               <div style={{ position: 'absolute', bottom: 0, width: '100vw', height: '100px', backgroundColor: 'black' }}>

                  <div style={{ padding: '10px 10px' }}>
                     <p3 style={{ color: 'white' }}> 대한민국</p3>
                  </div>


                  <div style={{ height: '70% -4px', borderTop: '4px solid #181a20', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', width: '200px', padding: '10px' }}>
                        <p>광고</p>
                        <p>비즈니스</p>
                        <p>감색의 원리</p>

                     </div>



                     <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', width: '200px', padding: '10px' }}>
                        <p>개인정보요침</p>
                        <p>약관</p>
                        <p>설정</p>
                     </div>




                  </div>





               </div>


            </div>
         </div>
      </div >

   )
}

export default Home