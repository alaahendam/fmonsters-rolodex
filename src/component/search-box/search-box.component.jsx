import react from 'react';
import './search-box.styles.css'
export const SearchBox = ({placeholder , handelchange})=>(
    <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handelchange}
    />
)