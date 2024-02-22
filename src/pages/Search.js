import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchNavbar from '../components/SearchNavbar'
import judgeSite from '../utils/judgeSite'

const Search = () => {

    const [searchParams] = useSearchParams()
    const query_q = searchParams.get('q')
    const query_type = searchParams.get('type')

    const [data, setData] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    // useEffect(() => {
    //     console.log('data : ', data)
    // }, [data])


    const fetchData = async () => {
        try {
            const response = await fetch('http://117.52.84.41:9595/search-data', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify({
                    word: query_q

                })
            })

            if (response.status === 200) {
                const data = await response.json()
                setData(data)
            }

        } catch (err) {
            console.log(err)
        }




    }




    return (
        <div>
            <SearchNavbar />


            <div style={{ marginLeft: '100px' }}>

                {!query_type && (
                    data.result1?.map((item, index) => (
                        <div style={{ width: '650px', height: 'auto', marginBottom: '30px', cursor: 'pointer' }} onClick={() => window.location.href = `/search-result/${item._id}`}>
                            <div style={{ width: '650px', height: '38px', color: 'white', display: 'flex', borderBottom: '1px solid white' }}>

                                <img src={`${process.env.PUBLIC_URL}/img/${judgeSite(item.path).icon}`} style={{
                                    width: '40px', width: '30px', height: 'auto',
                                    display: 'flex'
                                }} />
                                <div style={{ width: '60px', height: 'auto', fontSize: '10px' }}>
                                    {judgeSite(item.path).name}
                                    {item.path}
                                </div>
                            </div>
                            <div style={{ width: '650px', height: '30px', color: 'white' }}>
                                {item.title}
                            </div>
                            <div style={{ width: '650px', height: 'auto', paddingBottom: '20px', color: 'white', borderBottom: '1px solid white', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                {/* 넘치는 글자는 ...으로 표시. width가 설정되어 있어야 동작함.
                                <p style={{width:'540px', textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>{item.write}</p> */}
                                <p style={{ width: '540px' }}>{item.write}</p>
                                {item.img && (
                                    <div style={{ width: '100px', maxHeight: '100px', overflow: 'hidden', borderRadius: '5px' }}>
                                        <img src={item.img} style={{ maxWidth: '100px' }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}

                <div style={{ display: 'flex' }}>
                    {(query_type && query_type === 'img') && (
                        data.result1?.map((item, index) => (

                            <div style={{ height: 'auto', marginBottom: '30px', cursor: 'pointer', marginLeft: '20px' }} onClick={() => window.location.href = `/search-result/${item._id}`}>

                                {item.img && (
                                    <>
                                        <div style={{ width: '100px', maxHeight: '100px', overflow: 'hidden', borderRadius: '5px' }}>

                                            <img src={item.img} style={{ maxWidth: '100px' }} />

                                        </div>
                                        <div style={{ width: '150px', color: 'white', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{item.path}</div>
                                        <div style={{ color: 'white' }}>{item.title}</div>
                                    </>
                                )}

                            </div>

                        ))
                    )}</div>


                {(query_type && query_type === 'video') && (
                    <>
                        {/* <h1 style={{ color: 'white' }}>{query_q}</h1>
                        <h1 style={{ color: 'white' }}>{query_type}</h1> */}
                        <div style={{ display: 'flex' }}>
                            {data.result1?.map((item, index) => (

                                <div style={{ height: 'auto', marginBottom: '30px', cursor: 'pointer', marginLeft: '20px' }} onClick={() => window.location.href = `/search-result/${item._id}`}>

                                    {item.video && (
                                        <>
                                            <div style={{ width: '200px', maxHeight: '200px', overflow: 'hidden', borderRadius: '5px' }}>

                                                <iframe width="200px" height="200px" src={item.video} />

                                            </div>
                                            <div style={{ width: '150px', color: 'white', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{item.path}</div>
                                            <div style={{ color: 'white' }}>{item.title}</div>
                                        </>
                                    )}

                                </div>

                            ))}
                        </div>
                    </>
                )}









            </div>




        </div>

    )
}

export default Search