import React from "react";
import cl from './../../style/SeoServices.module.css';

const SeoServicesItem = ({title, img, infoItem})=>{
    return (
        <li className={cl.servicesItem}>
            <div className={cl.servicesIHead}>
                <span className={cl.servicesImgBlock}>
                    {img}
                </span>
                <h4 className={cl.servicesITitle}>{title}</h4>
            </div>
            <ul className={cl.servicesIList}>
                {infoItem.map(e=>
                    <li className={cl.servicesIItem}>
                        {e}
                    </li>    
                )}
            </ul>
        </li>
    )
}

export default SeoServicesItem