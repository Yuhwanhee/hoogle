import React, { useEffect, useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import convertDate from '../utils/convertDate'

const NewPost = () => {

    const [title, setTitle] = useState('')
    const [write, setWrite] = useState('')
    const [path, setPath] = useState('')
    const [date, setDate] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')

    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetchData()
    }, [])


    const handleSubmit = async () => {
        if (!(title && write && path && year && month && day)) {
            alert('빈칸을 채워 주세요')
            return
        }
        const date = new Date(year, month - 1, day)

        try {
            const response = await fetch('http://117.52.84.41:9595/new-post', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify({
                    title,
                    write,
                    path,
                    date
                })
            })
            if (response.status === 200) {
                fetchData()
            }

        } catch (err) {
            console.log(err)
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch('http://117.52.84.41:9595/test-get-posts')
            const data = await response.json()
            setPosts(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log('qqq :', posts)
    }, [posts])





    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ position: 'absolute', top: 0, right: 20 }}>
                <ProfileComponent />
            </div>


            <div className='center' style={{ width: '100%', height: 'auto', minHeight: '600px',display:'flex',flexDirection:'column', marginTop:'30px' }}>
                <div className='center' style={{ width: '800px', height: 'auto', minHeight: '200px', flexDirection: 'column', paddingBottom: '20px', borderBottom: '2px solid white' }}>
                    <input className='no-focus' placeholder='제목' style={{ width: '300px', height: '30px', paddingLeft: "20px", marginBottom: '30px' }}
                        value={title} defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                    <input className='no-focus' placeholder='내용' style={{ width: '300px', height: '30px', paddingLeft: "20px", marginBottom: '30px' }}
                        value={write} defaultValue={write} onChange={(e) => setWrite(e.target.value)} />
                    <input className='no-focus' placeholder='주소' style={{ width: '300px', height: '30px', paddingLeft: "20px", marginBottom: '30px' }}
                        value={path} defaultValue={path} onChange={(e) => setPath(e.target.value)} />


                    <input className='no-focus' placeholder='연' style={{ width: '300px', height: '30px', paddingLeft: "20px", marginBottom: '30px' }}
                        value={year} defaultValue={year} onChange={(e) => setYear(e.target.value)} />
                    <input className='no-focus' placeholder='월(한 자리일 경우에는 0 붙이기)' style={{ width: '300px', height: '30px', paddingLeft: "20px", marginBottom: '30px' }}
                        value={month} defaultValue={month} onChange={(e) => setMonth(e.target.value)} />
                    <input className='no-focus' placeholder='일(한 자리일 경우에는 0 붙이기)' style={{ width: '300px', height: '30px', paddingLeft: "20px", marginBottom: '30px' }}
                        value={day} defaultValue={day} onChange={(e) => setDay(e.target.value)} />



                    <div className='center' style={{ width: '150px', height: '30px', backgroundColor: 'white', color: 'black' }}
                        onClick={() => handleSubmit()}>
                        확인
                    </div>
                </div>

                <div className='center' style={{marginTop:'20px', flexDirection:'column'}}>
                    {posts.map((item, index) => (
                        <div key={index} style={{display:"flex",marginBottom:'10px',textAlign:'center'}}>
                            <p style={{color:'white',marginRight:'10px'}}>{item.title}</p>
                            <p style={{color:'white'}}>{convertDate(item.date)}</p>
                        </div>
                    ))}
                </div>





            </div>
        </div>

    )
}

export default NewPost