import React from 'react';

import Menu from '../menu/Menu'
import Footer from '../footer/Footer'; // Componente Footer  

import Juego from './Juego'

//import { userService } from '../_services';

class JuegoPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        //  userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="bg">
                <div className="jumbotron">
                    <div className="container" id="container">
                        {/* <div className="col-sm-8 col-sm-offset-2" id="hijo-container"> */}
                            <div>
                                <div><Menu></Menu></div>
                                <div> <Juego /> </div>
                                <div> <Footer /> </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JuegoPage;