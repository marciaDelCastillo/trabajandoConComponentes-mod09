import React, {Component} from 'react';
import ContentRowMovies from './ContentRowMovies.js';
import LastMovieInDb from './LastMovieInDb.js';
import GenresInDb from './GenresInDb.js';

class ContentRowTop extends Component{
    constructor(){
        super();
    }
    render(){
		let vector = [
			{
			title: "Movies in Data Base",
			value: 21,
			color: 'primary',
			icono: 'film'
			},
			{
			title: "Total awards",
			value: 79,
			color: 'success',
			icono: 'award'
			},
			{
			title: "Actors quantity",
			value: 49,
			color: 'warning',
			icono: 'user'
			}
			]
        return(
            <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<ContentRowMovies lista={vector}/>
					<div className="row">
						<LastMovieInDb/>
						<GenresInDb/>
					</div>
				</div>
        )
    }
}
export default ContentRowTop;