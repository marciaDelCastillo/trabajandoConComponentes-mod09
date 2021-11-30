import React from 'react';
import TableRow from './TableRow.js';

const Table = ({lista})=>{
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Género</th>
                    <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item,i)=><TableRow 
                                                key={item.title+i}
                                                title={item.title}
                                                length={item.length}
                                                rating={item.rating}
                                                genre={item.genre}
                                                awards={item.awards}
                                                />)}
                    
                </tbody>
                </table>
            </>
    )
}
export default Table;