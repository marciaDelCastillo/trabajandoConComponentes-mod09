import React, {Component} from 'react';
import TopBar from "./TopBar.js";
import ContentRowTop from "./ContentRowTop.js";
import Footer from "./Footer.js";
import Table from "./Table.js";
import { resetWarningCache } from 'prop-types';

class ContentWrapper extends Component{
    constructor(){
        super();
    }
    render(){
        let vector = [
            {
                title: "Volver al futuro",
                length: 120,
                rating: 9,
                genre: "Ciencia ficción",
                awards: 10
            },
            {
                title: "Esperando la carroza",
                length: 150,
                rating: 10,
                genre: "Comedia",
                awards: 20
            },
            {
                title: "Scarface",
                length: 135,
                rating: 8,
                genre: "Acción",
                awards: 15
            },
            {
                title: "Rápido y furioso",
                length: 142,
                rating: 9,
                genre: "Acción",
                awards: 8
            }
        ]
        return(
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar/>
                    <ContentRowTop/>
                </div>
                <Table lista={vector}/>
                <Footer/>
            </div>
        )
    }
}
export default ContentWrapper;