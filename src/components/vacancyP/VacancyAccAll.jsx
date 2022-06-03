import React from "react";
import cl from './../../style/VacancyAcc.module.css';
import VacancyAccItem from "./VacancyAccItem";

const VacancyAccAll = ({itemList, classesItem, classesBlock, classesDescr})=>{
    return (
        <div className={cl.accordionBlock}>
            {itemList.map(e => <VacancyAccItem classesItem={classesItem} classesDescr={classesDescr} classesBlock={classesBlock} title={e.title} descr={e.descr} whatDo={e.whatdo} info={e.list}/>)}
        </div>
    )
}

export default VacancyAccAll