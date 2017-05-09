import React from 'react';
import NavList from './nav-list';
import { 
    Button
 } from 'react-bootstrap';


const nav_list = [
    {
        item: 'Home'
    },
    {
        item: 'Activities'
    },
    {
        item: 'Groups'
    }

];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nav_list
        };
    }

    render() {
        return (
            <div>
                <span className="label label-default">New</span>
                <h1 className='previous'>Welcome to Baniyagiri</h1>
                <NavList navlist={this.state.nav_list}/>
            </div>
            
        );

    }

}
