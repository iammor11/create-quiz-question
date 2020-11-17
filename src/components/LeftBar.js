import React from 'react';
import { NavLink } from 'react-router-dom';

import File from '../images/file.svg';
import Image from '../images/image.svg';
import Plus from '../images/plus.svg';
import Video from '../images/video.svg'
import Delete from '../images/trash.svg'

const LeftBar = (props) => {
      
    const handleChg = () => {
        props.setDelBtn(true)
    }
  
    return(
    <>
        <ul style={{listStyleType: 'none', float: 'right', width: '6%', margin: '75px 10px 0 0'}}>
        {props.delBtn ? <li><NavLink to="/add"><img src={Delete} alt="jjbj" /></NavLink></li> : null}
            <li>&nbsp;</li>
            <li><NavLink to="/add" onClick={handleChg} ><img src={Plus} alt="sfa" /></NavLink></li>
            <li><NavLink to="/add"><img src={File} alt="sfa" /></NavLink></li>
            <li><NavLink to="/add"><img src={Image} alt="sfa" /></NavLink></li>
            <li><NavLink to="/add"><img src={Video} alt="sfa" /></NavLink></li>
        </ul>
    </>
    )
}
export default LeftBar