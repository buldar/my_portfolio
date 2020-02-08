import React from 'react';
import x from './Navigation.module.css'
import One_navi from "./One_navi/One_navi";

const Navigation =() => {
    return (
        <div className={x.navigation}>
            <One_navi title='главнавя'/>
            <One_navi title='ссылка 1'/>
            <One_navi title='ссылка 2'/>
            <One_navi title='ссылка 3'/>
        </div>
    )
}

export default Navigation;
