import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {


  const navigate = useNavigate()

  const [isProfile, setIsProfile] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     setIsLogin(false)
  //   } else {
  //     setIsLogin(true)
  //   }
  // }, [])








  return (
    <div>
      <div style={{ width: '100vw', height: '30px', display: 'flex', justifyContent: 'space-between' }}>

        <div style={{ color: 'white', width: '120px', justifyContent: 'space-between', display: 'flex', padding: '40px 20px' }}>
          <p3>구글정보</p3>
          <p3>스토어</p3>
        </div>

        <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', width: '120px', padding: '40px 20px' }}>
          <p3>구</p3>
          <p3>글</p3>
          <p3>정</p3>
          <p3 style={{ cursor: 'pointer' }} onClick={() => setIsProfile(true)}>보</p3>
          {isProfile && (
            isLogin ? (
              <div style={{
                width: '500px', height: '200px', backgroundColor: 'white', position: 'absolute', margin: '30px', right: '-10px',
                zIndex: 10, background: 'rgba(60,64,67,1)'
              }}>
                <div className='center home-x' style={{
                  width: '40px', height: '40px', borderRadius: '20px', marginLeft: 'auto',
                }}>
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
                <h1 style={{cursor:'pointer'}} onClick={()=>window.location.href ='/logIn'}>로그인페이지로</h1>
              </div>
            )

          )}
        </div>
      </div>
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


            <textarea style={{
              width: '800px', borderRadius: '5px', height: '30px', resize: 'none'
              , padding: '10px 60px', fontSize: '24px'
            }} />



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
    </div>

  )
}

export default Home