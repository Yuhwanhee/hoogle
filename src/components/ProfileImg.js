import React from 'react'

const ProfileImg = ({ userProfile, userName, customSize, width, height, preview }) => {
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
            width: customSize ? width : '50px', height: customSize ? height : '50px', color: 'white', borderRadius: customSize ? '300px':'30px',
            backgroundColor: 'orange', fontSize: customSize ? '50px':'26px', overflow: 'hidden'
        }}>
            {userProfile ? (
                <img src={preview ? preview :`http://117.52.84.41:9595/uploads/${userProfile}`} style={{ width: customSize ? width : '50px', height: customSize ? height : '50px' }} />
            ) : (
                convertName()
            )}

        </div>
    )
}

export default ProfileImg