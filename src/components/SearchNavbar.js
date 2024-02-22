import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProfileComponent from './ProfileComponent'

const SearchNavbar = () => {

  const [searchParams] = useSearchParams()
  const query_q = searchParams.get('q')
  const query_type = searchParams.get('type')
  const [search, setSearch] = useState(query_q)
  const [more, setMore] = useState(false)


  // const test  = () => {
  //   setMore(true)
  //   if(more=== true){
  //     alert('성공')
  //   }

  // }
  const moreRef = useRef(null)
  const moreRef2 = useRef(null)




  useEffect(() => {
    const handleClickOut = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target) && !moreRef2.current.contains(event.target)) {
        setMore(false)
      }

    }
    document.addEventListener('mousedown', handleClickOut)
    return () => {
      document.removeEventListener('mousedown', handleClickOut)
    }
  }, [])





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
    if (query_type) {
      window.location.href = ` /search?q=${search}&type=${query_type}`
    } else {
      window.location.href = ` /search?q=${search}`
    }
  }






  const judgePath = (page) => {
    if (window.location.pathname === page) {
       return '2px solid blue'
    } else {
       return ''
    }
 }






  return (
    <div style={{ display: 'flex', height: 'auto', justifyContent: 'space-between', padding: '0 20px' }}>
      <div className='f-white' style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <h3 style={{ color: 'white', marginRight: '20px',cursor:'pointer' }} onClick={() => window.location.href = '/'}>hoolgle </h3>
        <div style={{ display: 'flex', marginTop: '20px', width: '500px', justifyContent: 'space-between' }}>
          <p style={{cursor:'pointer', borderBottom:judgePath(`/search?q=${query_q}`)}} onClick={()=>window.location.href=`/search?q=${query_q}`}>전체</p>
          <p style={{cursor:'pointer'}} onClick={()=>window.location.href=`/search?q=${query_q}&type=img`}>이미지</p>
          <p style={{cursor:'pointer'}} onClick={()=>window.location.href=`/search?q=${query_q}&type=video`}>동영상</p>
          <p style={{cursor:'pointer'}}>쇼핑</p>
          <div ref={moreRef2} onClick={() => setMore(!more)} style={{ cursor: 'pointer' }}>더보기
            {more && (
              <div ref={moreRef} style={{ minWidth: '20px', position: 'absolute', height: 'auto', backgroundColor: 'black', padding: '5px' }}>
                <p style={{cursor:'pointer'}}>지도</p>
                <p style={{cursor:'pointer'}}>도서</p>
                <p style={{cursor:'pointer'}}>금융</p>

              </div>
            )}</div>





        </div>
      </div>
      <input className='no-focus' type='text' style={{ width: '600px', height: '30px', display: 'flex', position: 'absolute', marginLeft: '100px', color: 'black', top: 20, padding: '0 10px' }} value={search} defaultValue={search} onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDownSearch} />

      <ProfileComponent />


    </div>

  )
}

export default SearchNavbar