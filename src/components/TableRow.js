import React from 'react';

const Table = ({title, length, rating, genre, awards})=>{
    return(
        <>
            <tr>
                    <td>{title}</td>
                    <td>{length}</td>
                    <td>{rating}</td>
                    <td>{genre}</td>
                    <td>{awards}</td>
                    </tr>
        </>
    )
}
export default Table;