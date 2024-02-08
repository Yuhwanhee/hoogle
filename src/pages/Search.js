import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchNavbar from '../components/SearchNavbar'

const Search = () => {

    const [searchParams] = useSearchParams()
    const query_q = searchParams.get('q')
    const [search, setSearch] = useState(query_q)




    return (
        <div>
            <SearchNavbar />
        

        </div>

    )
}

export default Search