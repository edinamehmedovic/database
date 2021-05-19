import React from 'react';
import NavbarTop from "../navbar/Navbar";

const PageLayout = ({children}) => {
    return <div>
        <NavbarTop/>
        {children}
    </div>
}

export default PageLayout;