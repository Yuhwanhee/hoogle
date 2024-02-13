import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProfileComponent from './ProfileComponent'

const SearchNavbar = () => {

  const [searchParams] = useSearchParams()
  const query_q = searchParams.get('q')
  const [search, setSearch] = useState(query_q)
  const [more, setMore] = useState(false)


  // const test  = () => {
  //   setMore(true)
  //   if(more=== true){
  //     alert('성공')
  //   }

  // }
const moreRef = useRef(null)




  useEffect(() => {
    const handleClickOut = (event) => {
       if (moreRef.current && !moreRef.current.contains(event.target)) {
          setMore(false)
       }

    }
    document.addEventListener('mousedown', handleClickOut)
    return () => {
       document.removeEventListener('mousedown', handleClickOut)
    }
 }, [])










  

  return (
    <div className='f-white' style={{ display: 'flex', height: 'auto', justifyContent:'space-between', padding:'0 20px'}}>
      <div style={{ display: 'flex', flexDirection: 'column',padding:'20px'}}>
        <h3 style={{ color: 'white', marginRight: '20px', }} onClick={() => window.location.href = '/'}>hoolgle </h3>
        <div style={{ display: 'flex', marginTop: '20px',width: '500px', justifyContent: 'space-between' }}>
          <p>전체</p>
          <p>이미지</p>
          <p>동영상</p>
          <p>쇼핑</p>
          <div onClick={() => setMore(true)} style={{ cursor: 'pointer' }}>더보기
          {more && (
          <div ref={moreRef} style={{minWidth:'20px', position:'absolute', height:'auto', backgroundColor:'black', padding:'5px'}}>
            <p>지도</p>
            <p>도서</p>
            <p>금융</p>

          </div>
        )}</div>
       
       
        


        </div>
      </div>
      <input className='no-focus' type='text' style={{ width: '600px', height: '30px', display: 'flex', position: 'absolute', marginLeft: '100px',color:'black' , top:20, padding:'0 10px'}} value={search} defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
      
      <ProfileComponent />


    </div>

  )
}

export default SearchNavbar