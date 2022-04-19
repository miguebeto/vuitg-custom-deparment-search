import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import DeparmentGroup from './DeparmentGroup';
import { SearchBar } from 'vtex.store-components';

const DepartmentSearch = () => {
    const { data, loading } = useQuery(QUERY_VALUE);
    const [slug, setSlug] = useState('');
    console.log("Mi slug seleccionado es: ", slug);
    
    return (loading 
    ? 
    <div>loading...</div> 
    : 
        <div className='flex'>
            <DeparmentGroup 
                deparments={data?.categories[0]?.children} 
                handleSetSlug={setSlug}
            />
            <SearchBar 
                customSearchPageUrl={slug}
                placeholder="¿Qué estás buscando?"
                displayMode="search-and-clear-buttons"
            />
        </div>
    )
}

export default DepartmentSearch;