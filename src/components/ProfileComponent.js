import React, { useEffect, useRef, useState } from 'react'
import ProfileImg from './ProfileImg'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const ProfileComponent = () => {

    const img = [{ name: '유튜브', link: 'http://youtube.com', extarnal: true },
    {
        name: '구글정보', path: 'hoogleonkorea', extarnal: false
    },
    {
        name: '프로필\n변경', path: 'test', extarnal: false
    }, {
        name: '이름변경', path: 'changename', extarnal: false
    }, {
        name: '비밀번호\n변경', path: 'changepassword', extarnal: false
    }, {
        name: '게시글\n작성', path: 'newpost', extarnal: false
    }]


    const navigate = useNavigate()

    const viewRef = useRef(null)


    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState({})
    const [isView, setIsView] = useState(false)


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







    const clickMenu = (item) => {
        if (item.extarnal === true) {
            window.location.href = `${item.link}`
        } else if (item.extarnal === false) {
            navigate(`/${item.path}`)
        }
    }
    const sureLogout = () => {
        const result = window.confirm('정말 로그 아웃 하시겠습니까')
        if (result) {
            alert('로그아웃 되었습니다')
            handleLogout()
        } else {
            alert('취소 되었습니다')
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }


    return (
        <div>
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
                                    top: 100, right: 30, zIndex: 3, borderRadius: '10px'
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
                                justifyContent: 'space-between', position: 'absolute', padding: '10px', right: '30px', top: '100px',
                                backgroundColor: 'white', zIndex: 10
                            }}>


                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', justifyItems: 'center' }}>


                                    {img.map((item, index) => (
                                        <div key={index} className="menu-click center" style={{
                                            width: '60px', height: '60px', cursor: 'pointer',
                                            flexDirection: 'column', textAlign: 'center'
                                        }}


                                            onClick={() => clickMenu(item)}>
                                            {/* <img src={logo} style={{ width: '30px' }} /> */}
                                            <img src={`${process.env.PUBLIC_URL}/logo192.png`} style={{ width: '30px', marginTop: !item.name && '-21px' }} />
                                            <pre style={{ fontSize: '16px' }}>{item.name}</pre>
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
                        <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/signup'}>회원가입</div>
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
        </div>
    )
}

export default ProfileComponent