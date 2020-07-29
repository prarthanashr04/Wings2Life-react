import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';

function Header(){
    
    return (
        <div className="Header">
            <Navbar fixed="top" dark color ="dark">
              <div className="container">
                <NavbarBrand >Wings2Life</NavbarBrand>
              </div>
            </Navbar>
        </div>
      );
    
}

export default Header;