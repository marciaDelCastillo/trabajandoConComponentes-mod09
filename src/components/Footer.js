import React, {Component} from 'react';

class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Dashboard 2021</span>
                </div>
            </div>
        </footer>
        )
    }
}
export default Footer;