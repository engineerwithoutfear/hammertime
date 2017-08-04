import React from 'react';
import ProgressPanel from './ProgressPanel'
import Menu from './Menu'

const Header = (props) => (
    <div className="header">
        <Menu {...props} toggleMenu={props.toggleMenu}/>
        <ProgressPanel {...props}/>

    </div>
)

export default Header