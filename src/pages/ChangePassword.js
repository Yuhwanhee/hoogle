import React, { useEffect, useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import { Navigate, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const ChangePassword = () => {

   const [chps, setChps] = useState('')
   const [chps2, setChps2] = useState('')



   useEffect(() => {
      if (!localStorage.getItem('token')) {
         window.location.href = '/'
      }
   }, [])


  



   const navigate = useNavigate()



   const changePassword = async () => {
      if (chps === chps2) {
         try {
            const response = await fetch('http://127.0.0.1:9595/change-password', {
               method: 'POST',
               headers: {
                  'Content-type': 'application/json'
               },

               body: JSON.stringify({
                  userId: jwtDecode(localStorage.getItem('token')).userId,
                 pswd: chps
               })
            })

            if (response.status === 200) {
               const { token } = await response.json()
               localStorage.removeItem('token')
               localStorage.setItem('token', token)
               alert('변경 성공')
               window.location.href = '/'
            }

         } catch (err) {
            console.log(err)
         }
      } else {
         alert('다시 입력해주세요')
         return;
      }
   }


   return (
      <div>
         <div className='center' style={{ color: 'white', cursor: 'pointer', justifyContent:'flex-end'}} onClick={() => navigate('/')}>
            <div className='center' style={{width:'50%', fontSize: '60px', justifyContent:'flex-end'}}>           
                hoogle
            </div>
            <div style={{width:'43%',justifyContent:'flex-end', display:'flex'}}   >
            <ProfileComponent/>
            </div>
         
         </div>
     


         <div className='center' style={{ marginTop: "100px", minWidth: '600px', height: 'auto',flexDirection: 'column', color: 'white' }}>
            비밀번호 변경
            <input style={{ width: "200px", height: '20px' }} onChange={(e) => setChps(e.target.value)} />
            <div style={{ marginTop: '100px' }}>
               비밀번호 확인
            </div>

            <input style={{ width: "200px", height: '20px' }} onChange={(e) => setChps2(e.target.value)} />

            <div style={{ marginTop: '30px' }}>
               <div className='center' style={{
                  width: '100px', height: '100px', backgroundColor: 'white', color: 'black',
                  cursor: 'pointer'
               }} onClick={() => changePassword()}>
                  확인
               </div>
            </div>
         </div>


      </div>
   )


}
export default ChangePassword