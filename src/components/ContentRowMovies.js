import React, {Component} from 'react';
import Metric from './Metric.js';

const ContentRowMovies = ({lista}) =>{
    
        return(
            <div className="row">
                {lista.map((item,index)=>{
                        return <Metric key={index+item.title}
                                        color={item.color}
                                        title={item.title}
                                        value={item.value}
                                        icono={item.icono}
                                />
                    })}
			</div>
        )
}
export default ContentRowMovies;