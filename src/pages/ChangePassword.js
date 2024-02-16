import React from 'react'
import ProfileComponent from '../components/ProfileComponent'

const ChangePassword = () => {
   return (
      <div>
         <div style={{justifyContent:'flex-end', display:'flex'}}>
         <ProfileComponent/>
         </div>
         <div className='center' style={{width: '1450px', height: 'auto',  border:'1px solid yellow', flexDirection:'column', color:'white' }}>
      비밀번호변경
      <input style={{width:"200px", height:'20px'}}/>
      <div style={{marginTop:'100px'}}>
         비밀번호 확인
      </div>

      <input style={{width:"200px", height:'20px'}}/>

         </div>
      </div>
   )
}

export default ChangePassword