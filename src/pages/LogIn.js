import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'

const LogIn = () => {


  const { ps } = useParams()



  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    if (ps) {
      fetchData()
    }
  }, [ps])


  const navigate = useNavigate()




  const handleLogin = async () => {
    let isSecond;
    if (ps) {
      isSecond = true
    } else {
      isSecond = false
    }
    const response = await fetch('http://127.0.0.1:9595/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify({
        id: id,
        isSecond: isSecond,
        ps: ps,
      })
    })
    if (response.status === 200) {
      const data = await response.json()
      navigate(`/logIn/${data.userId}`)
      setId('')
    } else if (response.status === 400) {
      alert('통실')
    } else if (response.status === 201) {
      alert('로그인 성공')
      const { token } = await response.json()
      localStorage.setItem('token', token);
      window.location.href = '/'
    } else if (response.status === 401) {
      alert('비밀번호가 일치하지 않습니다.')
    }
  }






  const handleKeyDownLogin = (e) => {
    const key = e.code;
    switch (key) {
      case 'Enter':
        handleLogin();
        break;
      default:

    }
  }




  const fetchData = async () => {
    console.log('function fetchdata running')
    try {
      const response = await fetch('http://127.0.0.1:9595/fetch-user-data', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },

        body: JSON.stringify({
          user: ps
        })
      })

      if (response.status === 200) {
        const data = await response.json()
        setUserInfo(data)
      }

    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div style={{ border: '1px solid red', display: "flex", justifyContent: 'center', alignItems: 'center', height: '500px', flexDirection: 'column' }}>

      <div style={{
        fontSize: '34px', color: 'white', width: '120px', margintop: ' 100px', border: '1px solid yellow', height: "auto",
        display: 'flex', justifyContent: 'center'
      }}>
        <p>{ps ? '비밀번호' : '아이디'}</p>

      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <>
          {(userInfo && ps) && (
            <ProfileImg userProfile={userInfo.profile} userName={userInfo.name} />
          )}
        </>
        <p style={{ color: 'white', fontSize: "30px", marginLeft: '20px' }}>
          {(userInfo.name && ps) && userInfo.name}
        </p>
      </div>



      <input type='text' className='no-focus' style={{
        width: '200px', height: '25px', padding: '10px 15px', border: '1px solid rgba(0,0,0,0.3', fontSize: '12px', marginTop: '100px'
      }} value={id} onChange={(e) => setId(e.target.value)} onKeyDown={handleKeyDownLogin} />

      <div>
        <div className='center' style={{ border: '1px solid blue', width: ' 100px', height: '50px', marginTop: '30px', cursor: 'pointer' }}
          onClick={() => handleLogin()}>
          <p style={{ color: 'white' }}>
            다음
          </p>


        </div>
        <p className='center' onClick={() => navigate('/signup')} style={{
          color: 'white', fontSize: '22px', marginTop: '10px',
          cursor: 'pointer'
        }}>
          회원가입
        </p>
      </div>
    </div>

  )
}

export default LogIn