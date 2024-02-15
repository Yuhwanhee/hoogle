import React, { useEffect, useState } from 'react'
import ProfileComponent from '../components/ProfileComponent'
import { jwtDecode } from 'jwt-decode'
import Underbar from '../components/Underbar'

const ChangeName = () => {

    const [nickname, setNickname] = useState('')


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/'
        }
    }, [])


    const changeNickname = async () => {


        try {
            const response = await fetch('http://127.0.0.1:9595/change-nickname', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify({
                    userId: jwtDecode(localStorage.getItem('token')).userId,
                    nickname: nickname
                })
            })

            if (response.status === 200) {
                const { token } = await response.json()
                localStorage.removeItem('token')
                localStorage.setItem('token', token)
                window.location.href = '/'
            }

        } catch (err) {
            console.log(err)
        }
    }




    const handleKeyDownChangeNickname = (e) => {
        const key = e.code;
        switch (key) {
            case 'Enter':
                changeNickname();
                break;
            default:

        }
    }





    return (
        <div className='center'>
            <div className='center' style={{
                width: '50%', height: 'auto', fontSize: '40px', color: 'white',
                flexDirection: 'column', marginTop: '130px'
            }}>

                닉넴임 변경

                <input className='no-focus' style={{ width: '200px', height: '30px', marginTop: "30px" }} onChange={(e) => setNickname(e.target.value)} onKeyDown={handleKeyDownChangeNickname} />

                <div className='center' style={{
                    width: '70px', height: '30px',
                    cursor: 'pointer', backgroundColor: 'white', fontSize: '20px', color: 'black', marginTop: '20px'
                }} onClick={() => changeNickname()} >확인</div>
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <ProfileComponent />
            </div>
            <Underbar/>
        </div>
    )
}


export default ChangeName