import React, {useRef} from 'react';
import cl from './../../style/KeysMainSeo.module.css';
import {togglePhoto} from "../../redux/keysMainSeo-redux";

const KeysMainSeoItem = ({nameCompany, linkCompany, beenTopTen, becameTopTen, beenTraffic, becameTraffic, schedule, index,scheduleSet})=>{
    let photo = useRef(false)
    return (
        <li className={cl.seoItem}>
            <div className={cl.seoItemBlock}>
                <div className={cl.seoLeftBlock}>
                    <h3 className={cl.seoItemTitle}>Продвижение «{nameCompany}»</h3>
                    <a className={cl.seoItemLink} target='_blank' href={linkCompany}>{linkCompany}</a>
                    <div className={cl.seoChangeBlock}>
                        <div className={cl.seoChangeTop}>
                            <p className={cl.seoChangeTopTitle}>Было:</p>
                            <div className={cl.seoChangeCard}>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeTopDescr}>В ТОП 10 Яндекс</p>
                                    <p className={cl.seoChangeTopCount}>{beenTopTen}</p>
                                </div>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeTopDescr}>Трафик</p>
                                    <p className={cl.seoChangeTopCount}>{beenTraffic} пос/мес</p>
                                </div>
                            </div>
                        </div>
                        <div className={cl.seoChangeBottom}>
                            <p className={cl.seoChangeBottomTitle}>Стало:</p>
                            <div className={cl.seoChangeCard}>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeBottomDescr}>В ТОП 10 Яндекс</p>
                                    <p className={cl.seoChangeBottomCount}>{becameTopTen}</p>
                                </div>
                                <div className={cl.seoChangeGridBlock}>
                                    <p className={cl.seoChangeBottomDescr}>Трафик</p>
                                    <p className={cl.seoChangeBottomCount}>{becameTraffic} пос/мес</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.seoRightBlock}>
                    <p className={cl.seoRightTopTen}>Количество запросов в ТОП-10</p>
                    <div className={cl.seoSwitchBlock}>
                        <div className={cl.seoSwitch} onClick={ e => {
                            console.log(index)
                            e.preventDefault();
                            photo.current.src = schedule.filter(el=> photo.current.src.split('.').slice(0,1).join``.split`/`.reverse()[0] !== el.split('.').slice(0,1).join``.split`/`.reverse()[0])
                            e.target.classList.toggle(cl.active)
                        }
                        }>
                            <span className={cl.seoSwitchitem}></span>
                        </div>
                        <p className={cl.seoSwitchDescr}>Скриншот</p>
                    </div>
                    <div className={cl.seoRightImg}>
                        <img src={schedule[0]}  alt="График, отображающий насколько повысились запросы компании" ref={photo}/>
                        {/*srcSet={scheduleSet + ' ' + '2x'}*/}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default KeysMainSeoItem