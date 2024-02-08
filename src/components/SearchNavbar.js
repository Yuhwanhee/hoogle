import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchNavbar = () => {

    const [searchParams] = useSearchParams()
    const query_q = searchParams.get('q')
    const [search, setSearch] = useState(query_q)
    const [more,setMore] = useState(false)


    const test  = () => {
      if(setMore(true)){
        alert('성공')
      }
    }



    return (
        <div className='f-white' style={{ display: 'flex', border: '1px solid yellow' , height:'auto', padding:'20px'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
        <h3 style={{color:'white', marginRight:'20px', }} onClick={() => window.location.href = '/'}>hoolgle </h3>
            <div style={{display:'flex', marginTop:'20px', border:'1px solid red', width:'500px', justifyContent:'space-between'}}>
            <p>전체</p>
            <p>이미지</p>
            <p>동영상</p>
            <p>쇼핑</p>
            <div onClick={()=>setMore(true)} style={{cursor:'pointer'}}>더보기</div>
        </div>
        </div>
            <input type='text' style={{ width: '600px', height: '30px', display:'flex' ,position:'absolute', marginLeft:'100px'}} value={search} defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
    
       
        
        </div>

    )
}

export default SearchNavbar