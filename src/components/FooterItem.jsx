import React from "react";
import { Link } from "react-router-dom";
import cl from '../style/Footer.module.css';

const FooterItem = ({title, info, page, titleClass}) => {
    return (
        <div className={cl.footerIComponent}>
            {page !== undefined ? 
            <Link onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}} to={page}>{title !== 'Меню' ? <a className={[cl.footerICtitle, titleClass].join` `}>{title}</a> : <h4 className={[cl.footerICtitle, titleClass].join` `}>{title}</h4>}</Link>
            :
            title !== 'Меню' ? <a className={[cl.footerICtitle, titleClass].join` `}>{title}</a> : <h4 className={[cl.footerICtitle, titleClass].join` `}>{title}</h4>
            }
            
            <nav>
                <ul className={cl.footerIClist}>
                    {info.map(e=>
                        <li className={[cl.footerICitem, e.class].join` `} key={e.link}>
                            <Link to={e.page} className={cl.footerIClink} onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}}>{e.link}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default FooterItem