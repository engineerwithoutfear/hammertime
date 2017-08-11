import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import '../css/fa/css/font-awesome.min.css'

class ExpandedMenu extends Component {
    render() {
        let activeClass = "menu-container " + this.props.class
        return (
            <div id="site-menu" className={activeClass}>
                <div>
                    <Link to='/' onClick={this.props.toggleMenu} className="navLink"><FontAwesome name='close'/></Link>
                </div>
                <div>
                    <Link to='/settings'><FontAwesome name='gears'/></Link>
                </div>
                <div>
                    <Link to='/about'><FontAwesome name='question'/></Link>
                </div>

            </div>
        )
    }
}

export default ExpandedMenu