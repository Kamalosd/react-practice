import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul><Link to="/">home</Link></ul>
                  <ul><Link to="/product">product</Link></ul>
                        <ul><Link to="/profile">prof</Link></ul>
        </div>
    );
};

export default Menu;
//link ele use kre akta pG teke onno pG a jbo
//navlink 2 to proprty  nia kj kre isactive or is pendinG
