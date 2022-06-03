import ecoSchedule from "../assets/img/keys-seo-eco.svg";
import stroySchedule from "../assets/img/keys-seo-stroy.svg";
import veniSchedule from "../assets/img/key-seo-veni.svg";
import autoSchedule from "../assets/img/keys-seo-auto.svg";
import llumarSchedule from "../assets/img/keys-seo-lumar.svg";
import graffik1 from "../assets/img/graffik1.png";

const initialState = [{
    nameCompany: 'Эковтор',
    linkCompany: 'ec-vtor.ru',
    changeSeo: {
        beenChange: {topTen: '67 запросов', traffic: '312'},
        becameChange: {topTen: '453 запроса', traffic: '1 600'}
    },
    schedule: [ecoSchedule,graffik1],
},
    {
        nameCompany: 'Строймат',
        linkCompany: 'строй-мат.рф',
        changeSeo: {
            beenChange: {topTen: '23 запроса', traffic: '200'},
            becameChange: {topTen: '550 запросов', traffic: '400'}
        },
        schedule: [stroySchedule,graffik1]
    },
    {
        nameCompany: 'Вениколор',
        linkCompany: 'venicolor.ru',
        changeSeo: {
            beenChange: {topTen: '5 запросов', traffic: '50'},
            becameChange: {topTen: '453 запроса', traffic: '2 300'}
        },
        schedule: [veniSchedule,graffik1]
    },
    {
        nameCompany: 'Автоэстетика',
        linkCompany: 'autoestetica-msk.ru',
        changeSeo: {
            beenChange: {topTen: '5 запросов', traffic: '50'},
            becameChange: {topTen: '453 запроса', traffic: '2 300'}
        },
        schedule: [autoSchedule,graffik1]
    },
    {
        nameCompany: 'Люмар',
        linkCompany: 'lumar.ru',
        changeSeo: {
            beenChange: {topTen: '20 запросов', traffic: '50'},
            becameChange: {topTen: '4000 запроса', traffic: '1 800'}
        },
        schedule: [llumarSchedule,graffik1],
    }]

export function KeysMainSeoReducer(state = initialState, action) {
 return state
}

