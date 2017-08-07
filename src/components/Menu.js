import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import '../css/fa/css/font-awesome.min.css'

class Menu extends Component {
    render() {
        let menu;
        if (this.props.menuOpen) {
            menu = <nav className="expandedMenu">
                <div>
                    <Link to='/' onClick={this.props.toggleMenu} className="navLink">home</Link>
                </div>
                <div>
                    <Link to='/about'>about</Link>
                </div>
                <div>
                    <Link to='/settings'>settings</Link>
                </div>
            </nav>
        } else {
            menu = <nav onClick={this.props.toggleMenu} className="compactMenu">
                <FontAwesome name='bars'/></nav>
        }
        return (
            <div className="menu-container">
                {menu}
            </div>
        )
    }
}
export default Menu

// spin style = {{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}