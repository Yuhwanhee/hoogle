import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchNavbar from '../components/SearchNavbar'
import judgeSite from '../utils/judgeSite'

const Search = () => {

    const [searchParams] = useSearchParams()
    const query_q = searchParams.get('q')
    const [search, setSearch] = useState(query_q)

    const [data, setData] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log('data : ', data)
    }, [data])


    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:9595/search-data', {
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


                {data.result1?.map((item, index) => (
                    <div style={{ width: '650px', height: 'auto', border: '1px solid red', marginBottom: '30px' }}>
                        <div style={{ width: '650px', height: '38px', border: '1px solid red', color: 'white' }}>
                            {judgeSite(item.path).name}
                            <img src={`${process.env.PUBLIC_URL}/img/${judgeSite(item.path).icon}`} style={{width:'40px'}}/>
                            {item.path}
                        </div>
                        <div style={{ width: '650px', height: '30px', border: '1px solid red', color: 'white' }}>
                            {item.title}
                        </div>
                        <div style={{ width: '650px', height: '45px', border: '1px solid red', color: 'white' }}>
                            {item.write}
                        </div>
                    </div>
                ))}


            </div>




        </div>

    )
}

export default Search