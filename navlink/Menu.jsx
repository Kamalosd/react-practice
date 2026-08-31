import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            // /a dia kothai nia jbe to dia blbo.isactive proprty raect routr provide kre ota dstructr kre nia sbo to waala att match krche kine navlink r sthe
            <ul><NavLink className={(isActive)=>isActive?'active-item':'pendinG-item'}   to="/">home</NavLink></ul>
                  <ul><NavLink  className={(isActive)=>isActive?'active-item':'pendinG-item'} to="/product">product</NavLink></ul>
                        <ul><NavLink className={(isActive)=>isActive?'active-item':'pendinG-item'} to="/profile">prof</NavLink></ul>
        </div>
    );
};

export default Menu;