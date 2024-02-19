import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {




   const [name, setName] = useState('')
   const [password2, setPassword2] = useState('')
   const [id, setId] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate()








   const handleSignUp = async () => {
      try {
         const response = await fetch('http://127.0.0.1:9595/signup', {
            method: 'POST',
            headers: {
               'Content-type': 'application/json'
            },

            body: JSON.stringify({
               id: id,
               password: password,
               name: name
            })
         })
         if (response.status === 200) {
            const { token } = await response.json()
            localStorage.setItem('token', token);
            navigate('/')

         } else {
            alert('실패')
         }
      } catch (err) {
         console.log(err)
      }
   }







   return (
      <div className='f-white' style={{ display: 'flex', felxDirection: 'column', justifyContent: 'center', alighnItem: 'center' }}>
         <div style={{ width: '928px', padding: '60px 16px 70px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '20px', width: '400px', textAlign: 'left', marginBottom: '40px' }}>회원가입</div>

            <div style={{ fontSize: '14px', color: '#77777', width: '400px', textAlign: "left", marginBottom: ' 12px' }}>아이디</div>
            <input type='text' className='no-focus' style={{
               width: '370px', height: '25px', padding: '10px 15px',color:'black', border: '1px solid rgba(0,0,0,0.3', fontSize: '12px', marginBottom: '25px'
            }} value={id} onChange={(e) => setId(e.target.value)} />

            <div style={{ fontSize: '14px', color: '#77777', width: '400px', textAlign: "left", marginBottom: ' 12px' }}>비밀번호</div>
            <input type='password' className='no-focus' style={{
               width: '370px', height: '25px', padding: '10px 15px',color:'black', border: '1px solid rgba(0,0,0,0.3', fontSize: '12px', marginBottom: '25px'
            }} value={password} onChange={(e) => setPassword(e.target.value)} />

            <div style={{ fontSize: '14px', color: '#77777', width: '400px', textAlign: "left", marginBottom: ' 12px' }}>비밀번호 확인</div>
            <input type='password' className='no-focus' style={{
               width: '370px', height: '25px', padding: '10px 15px',color:'black', border: '1px solid rgba(0,0,0,0.3', fontSize: '12px', marginBottom: '25px'
            }} value={password2} onChange={(e) => setPassword2(e.target.value)} />

            <div style={{ fontSize: '14px', color: '#77777', width: '400px', textAlign: "left", marginBottom: ' 12px' }}>이름</div>
            <input type='text' className='no-focus' style={{
               width: '370px', height: '25px', padding: '10px 15px',color:'black', border: '1px solid rgba(0,0,0,0.3', fontSize: '12px', marginBottom: '25px'
            }} value={name} onChange={(e) => setName(e.target.value)} />

            <div className='center' style={{width:'100px', height:'100px', backgroundColor:'white',color:'black', cursor:'pointer' }} onClick={()=>handleSignUp()}>
            회원가입하기
            </div>


         </div>
      </div>
   )
}

export default SignUp