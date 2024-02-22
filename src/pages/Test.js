import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileImg from '../components/ProfileImg'

const Test = () => {

   const navigate = useNavigate()

   const [token, setToken] = useState({})
   const [img, setImg] = useState([])
   const [preview, setPreview] = useState('')

   useEffect(() => {
      if (!localStorage.getItem('token')) {
         navigate(-1)
      } else {
         setToken(jwtDecode(localStorage.getItem('token')))
      }
   }, [])

   // useEffect(()=>{
   //    console.log('qqq : ', preview)
   // },[preview])


   const handleImgChange = (e) => {
      e.preventDefault()
      const reader = new FileReader()
      const file = e.target.files[0]
      reader.onloadend = () => {
         setImg([file])
         setPreview(reader.result)
      }
      reader.readAsDataURL(file)
      // e.target.value = ''
   }

   const handleSubmit = async () => {
      try {
         const formData = new FormData()
         formData.append('userId', token.userId)
         formData.append('img', img[0])


         const response = await fetch('http://117.52.84.41:9595/test', {
            method: 'POST',
            body: formData
         })
         if (response.status === 200) {
            const { token } = await response.json()
            localStorage.setItem('token', token);
            navigate('/')
         }
      } catch (err) {

      }
   }

   return (
      <div className='f-white center' style={{ width: '100vw', height: '100dvh' }}>
         <div className='center' style={{ width: '80vw', height: "80dvh", border: '1px solid white', flexDirection: 'column' }}>
            <ProfileImg userProfile={token.profile} userName={token.name} customSize={true} width={'300px'} height={'300px'} preview={preview && preview} />
            <input type='file' style={{ width: '200px', height: '30px', border: '1px solid white',marginTop:'50px' }} onChange={(e) => handleImgChange(e)} />
            <div className='center' onClick={() => handleSubmit()} style={{ width: '100px', height: '30px', border: '1px solid white', borderRadius: '5px', marginTop: '20px' }}>
               등록
            </div>
         </div>
      </div>
   )
}

export default Test