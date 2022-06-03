import React, {useEffect, useRef, useState} from 'react';
import cl from './../../style/VacancyAcc.module.css';

const VacancyAccItem = ({title, descr, whatDo, info, classesItem, classesBlock, classesDescr})=>
{
    const [active, setActive] = useState(false)
    const [signPage, setSignPage]= useState({})
    const widthItem = useRef(false)
    useEffect(()=>{
        setSignPage(false)
        setStyles({'maxHeight':widthItem.current.clientHeight+ 'px'})
    },[widthItem])
    document.addEventListener('resize', ()=>{
        setStyles({'maxHeight':widthItem.current.clientHeight+ 'px'})
    })
    const [styles, setStyles] = useState(0)

    return (
        <div className={active ? [cl.accordion, cl.accordionActive, classesBlock].join` ` : cl.accordion} onClick={e=>{setActive(!active)}}>
            <div className={cl.accordionHeading}>
                <h3 className={cl.accordionTitle}>{title}</h3>
                <div className={cl.accordionSignBlock}>
                    <span className={cl.accordionLineV}></span>
                    <span className={cl.accordionLineH}></span>
                </div>
            </div>
            <div  ref={widthItem} style={active ? styles : {'display':'block'}} className={!signPage ? [cl.accordionBottomBlock, classesItem].join` ` : ''}>
                <div className={cl.accordionCard}>
                    <p className={[cl.accordionDescr, classesDescr].join` `}>{descr}</p>
                    {whatDo !== undefined && <p className={cl.accordionWhatDo}>{whatDo}</p>}
                    {info !== undefined && 
                    <ul className={cl.accordionList}>
                        {info.map(e => 
                        <li className={cl.accordionItem}>
                            <span></span>
                            {e}
                        </li>
                        )}
                    </ul>
                    }
                </div>  
            </div>
        </div>
    )
}

export default VacancyAccItem


// .accordionCard {
//     max-height: 0px;
//     opacity: 0;
// }