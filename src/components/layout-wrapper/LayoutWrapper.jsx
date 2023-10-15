import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutWrapper = () => {
    return (
        <div>
            <div>
            <h1>Layout wrapper</h1>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default LayoutWrapper;