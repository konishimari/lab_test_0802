import React from "react";
import style from "../styles/test.module.scss";
import "react-image-gallery"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Bestview1 = "https://www.nta.co.jp/media/tripa/static_contents/nta-tripa/item_images/images/000/033/516/medium/e5e2d51e-1ec7-483d-a005-22684687b434.jpg?1550659738"
const Bestview2 = "https://tabippo.net/wp-content/uploads/20161018173213/unspecified35.jpg"
const Bestview3 = "https://tabippo.net/wp-content/uploads/20161018170752/unspecified17.jpg"
const Bestview4 = "https://tabippo.net/wp-content/uploads/20161018174318/unspecified47.jpg"
const Bestview5 = "https://media.vogue.co.jp/photos/5ee833fefdcf3b2d662a01c2/master/w_1600,c_limit/VJ-travel-world-dawn-03.jpg" 
const Bestview6 = "https://media.vogue.co.jp/photos/5ee8347bc92ebfbd113dac34/master/w_1600,c_limit/VJ-travel-world-dawn-06.jpg"
const Bestview7 = "https://media.vogue.co.jp/photos/5ee8351ea53ff566640aec9b/master/w_1600,c_limit/VJ-travel-world-dawn-10.jpg"
const Bestview8 = "https://i0.wp.com/tabijikan.jp/wp-content/uploads/2014/06/20140607-13-1.jpg?resize=1024%2C678&ssl=1"
const Bestview9 = "https://i0.wp.com/tabijikan.jp/wp-content/uploads/2014/06/20140607-13-4.jpg?resize=1024%2C684&ssl=1"
const Bestview10 = "https://i0.wp.com/tabijikan.jp/wp-content/uploads/2014/07/20140702-40-3.jpg?resize=640%2C427&ssl=1"   



const news = () => {
    const settings = {
    }
    
    return (
        <div>
            <p className={style.test}>World Trip Planner</p>
            <p className={style.subtitle}>見てみたい絶景TOP10</p>
            
            <img src={Bestview1} alt="イエローナイフ" width={500} height={500} loading="lazy"/>
            <img src={Bestview2} alt="アマゾン川" width={500} height={500} loading="lazy"/>    
            <img src={Bestview3} alt="グアナファト" width={500} height={500} loading="lazy"/>
            <img src={Bestview4} alt="ユウニ湖" width={500} height={500} loading="lazy"/>
            <img src={Bestview5} alt="トスカーナ" width={500} height={500} loading="lazy"/>
            <img src={Bestview6} alt="パガン" width={500} height={500} loading="lazy"/>
            <img src={Bestview7} alt="カナディアンロッキー" width={500} height={500} loading="lazy"/>
            <img src={Bestview8} alt="ヘネラル・カレーラ湖" width={500} height={500} loading="lazy"/>
            <img src={Bestview9} alt="ソコトラ島" width={500} height={500} loading="lazy"/>
            <img src={Bestview10} alt="アブラハム湖" width={500} height={500} loading="lazy"/>
        </div>
    );
}

export default news;