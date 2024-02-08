import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'
import { jwtDecode } from 'jwt-decode'
const Home = () => {


   const img = [{ name: '유튜브', link: 'http://youtube.com', extarnal: true },
   { name: '로그인', path: 'logIn', extarnal: false },
   {
      name: 'test', path: 'test', extarnal: false
   }, {}, {}]


   const navigate = useNavigate()

   const viewRef = useRef(null)

   const [isProfile, setIsProfile] = useState(false)
   const [isLogin, setIsLogin] = useState(false)
   const [token, setToken] = useState({})
   const [isView, setIsView] = useState(false)
   const [search, setSearch] = useState("")



   useEffect(() => {
      if (!localStorage.getItem('token')) {
         setIsLogin(false)
      } else {
         setIsLogin(true)
         setToken(jwtDecode(localStorage.getItem('token')))
      }
   }, [])



   useEffect(() => {
      const handleClickOut = (event) => {
         if (viewRef.current && !viewRef.current.contains(event.target)) {
            setIsView(false)
         }

      }
      document.addEventListener('mousedown', handleClickOut)
      return () => {
         document.removeEventListener('mousedown', handleClickOut)
      }
   }, [])




   const handleLogout = () => {
      localStorage.removeItem('token')
      window.location.reload()
   }



   useEffect(() => {
      console.log('token : ', token)
   }, [token])



   const sureLogout = () => {
      const result = window.confirm('정말 로그 아웃 하시겠습니까')
      if (result) {
         alert('로그아웃 되었습니다')
         handleLogout()
      } else {
         alert('취소 되었습니다')
      }
   }




   const clickMenu = (item) => {
      if (item.extarnal === true) {
         window.location.href = `${item.link}`
      } else if (item.extarnal === false) {
         navigate(`/${item.path}`)
      }
   }



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

            <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', width: '180px', padding: '40px 20px' }}>
               {isLogin ? (
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                     <div>
                        <div onClick={() => setIsView(true)} style={{ cursor: 'pointer' }}>
                           <ProfileImg userProfile={token.profile} userName={token.name} />
                        </div>
                        {isView && (
                           <div className='p-color f-white' ref={viewRef} style={{
                              width: '300px', height: '310px', position: 'absolute',
                              top: 78, right: 30, zIndex: 3, borderRadius: '10px'
                           }}>

                              <div className='center' style={{ flexDirection: 'column', marginTop: '20px' }}>
                                 <div style={{ marginBottom: '20px' }}>{token.id}@gmail.com</div>

                                 <ProfileImg userProfile={token.profile} userName={token.name} customSize={true} width='100px' height='100px' />

                                 <h3 style={{ marginTop: '20px' }}>안녕하세요 {token.name}님</h3>

                                 <h3 onClick={() => sureLogout()} style={{ color: 'black', marginTop: '70px', cursor: 'pointer' }}>로그아웃</h3>

                              </div>
                           </div>


                        )}


                     </div>


                     <div style={{ flexDirection: 'column', display: 'flex', }}>


                        <div className='go-to-menu' style={{ color: 'white', fontSize: '40px', marginLeft: '10px', cursor: 'pointer' }}>
                           :::
                        </div>



                        <div className='go-to-menu-detail' style={{
                           border: '1px solid rgba(0,0,0,0.1)', width: '200px', height: '400px', display: 'flex', flexDirection: 'column',
                           justifyContent: 'space-between', position: 'absolute', padding: '10px', right: '30px', top: '70px',
                           backgroundColor: 'white', zIndex: 10
                        }}>


                           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', justifyItems: 'center' }}>


                              {img.map((item, index) => (
                                 <div key={index} className="menu-click center" style={{
                                    width: '60px', height: '60px', cursor: 'pointer',
                                    flexDirection: 'column'
                                 }}


                                    onClick={() => clickMenu(item)}>
                                    {/* <img src={logo} style={{ width: '30px' }} /> */}
                                    <img src={`${process.env.PUBLIC_URL}/logo192.png`} style={{ width: '30px', marginTop: !item.name && '-21px' }} />
                                    {item.name}
                                 </div>


                              ))}
                           </div>

                        </div>


                     </div>
                  </div>
               ) : (
                  <>
                     <p3>구</p3>
                     <p3>글</p3>
                     <p3>회원가입</p3>
                     <p3 style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/logIn'}>로그인</p3>
                     {/* {isProfile && (
                        isLogin ? (

                           <div style={{ display: 'flex' }}>


                              <div style={{
                                 width: '500px', height: '200px', backgroundColor: 'white', position: 'absolute', margin: '30px', right: '-10px',
                                 zIndex: 10, background: 'rgba(60,64,67,1)'
                              }}>

                                 <div className='center home-x' style={{
                                    width: '40px', height: '40px', borderRadius: '20px', marginLeft: 'auto',
                                 }}>
                                 </div>



                                 <p style={{ color: '#c4c7c5', fontSize: '26px', cursor: 'pointer' }} onClick={() => setIsProfile(false)}>X</p>


                              </div>


                              <h1>hello</h1>
                           </div>
                        ) : (
                           <div style={{
                              width: '500px', height: '200px', backgroundColor: 'white', position: 'absolute', margin: '30px', right: '-10px',
                              zIndex: 10, background: 'rgba(60,64,67,1)'
                           }}>


                              <div className='center home-x' style={{
                                 width: '40px', height: '40px', borderRadius: '20px', marginLeft: 'auto',
                              }}>


                                 <p style={{ color: '#c4c7c5', fontSize: '26px', cursor: 'pointer' }} onClick={() => setIsProfile(false)}>X</p>
                              </div>


                              <h1 style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/logIn'}>로그인페이지로</h1>
                           </div>
                        )

                     )} */}
                  </>
               )}

            </div>
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