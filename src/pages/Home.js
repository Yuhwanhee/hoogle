import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'
import { jwtDecode } from 'jwt-decode'
const Home = () => {


  const img = [{ name: '유튜브', link: 'http://youtube.com', extarnal: true },
  { name: '로그인', path: 'logIn', extarnal: false },
  {
    name: 'test' , path:'test', extarnal:false}, {}, {}]


  const navigate = useNavigate()

  const [isProfile, setIsProfile] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState({})

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
      setToken(jwtDecode(localStorage.getItem('token')))
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






  return (
    <div>
      <div style={{ width: '100vw', height: '30px', display: 'flex', justifyContent: 'space-between' }}>

        <div style={{ color: 'white', width: '120px', justifyContent: 'space-between', display: 'flex', padding: '40px 20px' }}>
          <p3>구글정보</p3>
          <p3>스토어</p3>
        </div>

        <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', width: '120px', padding: '40px 20px' }}>
          {isLogin ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div onClick={() => sureLogout()} style={{ cursor: 'pointer' }}>
                <ProfileImg userProfile={token.profile} userName={token.name} />
              </div>
              <div style={{ flexDirection: 'column', display: 'flex',  }}>
                <div className='go-to-menu' style={{ color: 'white', fontSize: '40px', marginLeft: '10px', cursor: 'pointer'}}>
                  :::
                </div>



                <div className='go-to-menu-detail' style={{
                  border: '1px solid rgba(0,0,0,0.1)', width: '200px', height: '400px', display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between', position: 'absolute', padding: '10px', right: '30px', top: '70px',
                  backgroundColor: 'white',zIndex:10
                }}>


                  <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',justifyItems:'center' }}>


                    {img.map((item, index) => (
                      <div key={index} className="menu-click center" style={{
                         width: '60px', height: '60px',cursor:'pointer',
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
              <p3 style={{ cursor: 'pointer' }} onClick={() => setIsProfile(true)}>보</p3>
              {isProfile && (
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

              )}
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
    </div >

  )
}

export default Home