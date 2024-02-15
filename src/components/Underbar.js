import React from 'react'

const Underbar = () => {
    return (
        <div style={{ position: 'absolute', bottom: 0, width: '100vw', height: '100px', backgroundColor: 'black' }}>

            <div style={{ padding: '10px 10px' }}>
                <p3 style={{ color: 'white' }}> 대한민국</p3>
            </div>


            <div style={{ height: '70% -4px', borderTop: '4px solid #181a20', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', width: '200px', padding: '10px' }}>
                    <p>광고</p>
                    <p>비즈니스</p>
                    <p>감색의 원리</p>

                </div>



                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', width: '200px', padding: '10px' }}>
                    <p>개인정보요침</p>
                    <p>약관</p>
                    <p>설정</p>
                </div>




            </div>





        </div>
    )
}

export default Underbar