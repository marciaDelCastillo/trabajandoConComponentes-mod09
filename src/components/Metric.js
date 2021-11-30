import React from 'react';
import propTypes from 'prop-types';

const Metric = ({color,value,title, icono})=>{
    let clases = "card border-left-"+color+" shadow h-100 py-2";
    let clasesTitulo = "text-xs font-weight-bold text-"+color+" text-uppercase mb-1"
    let clasesIcono = "fas fa-"+icono+" fa-2x text-gray-300";
    return(
        <div className="col-md-4 mb-4">
							<div className={clases}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className={clasesTitulo}>{title}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
										</div>
										<div className="col-auto">
											<i className={clasesIcono}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
    )
}
Metric.propTypes= {
    title:propTypes.string.isRequired,
    color: propTypes.string,
    value: propTypes.number.isRequired,
    icono: propTypes.isRequired
}
Metric.defaultProps= {
    color: 'danger',
    icono: 'user',
    value: 100
}

export default Metric;