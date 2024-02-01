import React from 'react'

const ProfileImg = ({ userProfile, userName }) => {
    const convertName = () => {
        if (userName) {
            const name = userName.substr(0, 2)
            return name
        } else {
            return
        }
    }
    return (
        <div className='center' style={{
            width: '50px', height: '50px', color: 'white', borderRadius: '30px',
            backgroundColor: 'orange', fontSize: '26px', overflow: 'hidden'
        }}>
            {userProfile ? (
                <img src={`${process.env.PUBLIC_URL}/img/${userProfile}`} style={{ width: '50px', height: '50px' }} />
            ) : (
                convertName()
            )}

        </div>
    )
}

export default ProfileImg