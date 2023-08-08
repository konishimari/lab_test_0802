import React from "react";
import style from "../styles/test.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bestview1 =
  "https://www.nta.co.jp/media/tripa/static_contents/nta-tripa/item_images/images/000/033/516/medium/e5e2d51e-1ec7-483d-a005-22684687b434.jpg?1550659738";
const Bestview2 =
  "https://tabippo.net/wp-content/uploads/20161018173213/unspecified35.jpg";
const Bestview3 =
  "https://tabippo.net/wp-content/uploads/20161018170752/unspecified17.jpg";
const Bestview4 =
  "https://tabippo.net/wp-content/uploads/20161018174318/unspecified47.jpg";
const Bestview5 =
  "https://media.vogue.co.jp/photos/5ee833fefdcf3b2d662a01c2/master/w_1600,c_limit/VJ-travel-world-dawn-03.jpg";
const Bestview6 =
  "https://media.vogue.co.jp/photos/5ee8347bc92ebfbd113dac34/master/w_1600,c_limit/VJ-travel-world-dawn-06.jpg";
const Bestview7 =
  "https://media.vogue.co.jp/photos/5ee8351ea53ff566640aec9b/master/w_1600,c_limit/VJ-travel-world-dawn-10.jpg";
const Bestview8 =
  "https://i0.wp.com/tabijikan.jp/wp-content/uploads/2014/06/20140607-13-1.jpg?resize=1024%2C678&ssl=1";
const Bestview9 =
  "https://i0.wp.com/tabijikan.jp/wp-content/uploads/2014/06/20140607-13-4.jpg?resize=1024%2C684&ssl=1";
const Bestview10 =
  "https://i0.wp.com/tabijikan.jp/wp-content/uploads/2014/07/20140702-40-3.jpg?resize=640%2C427&ssl=1";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <p className={style.test}>World Trip Planner</p>
      <p className={style.subtitle}>見てみたい絶景TOP10</p>

      <Slider {...settings}>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview1}
            alt="イエローナイフ"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>イエローナイフ</h3>
          <p className={style.text2}>
            カナダ北部の拠点都市。オーロラが輝く美しい夜空と<br></br>
            アウトドア活動や先住民文化の交流が魅力。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview2}
            alt="アマゾン川"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>アマゾン川</h3>
          <p className={style.text2}>
            南米最大の河川。広大な熱帯雨林と生態多様性があり、カヌー旅行や野生動植物観察が楽しい。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview3}
            alt="グアナファト"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>グアナファト</h3>
          <p className={style.text2}>
            メキシコ中部の美しい都市。カラフルな建物、歴史的な街並み、<br></br>
            芸術と文化が息づく魅力的な観光地。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview4}
            alt="ユウニ湖"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>ユウニ湖</h3>
          <p className={style.text2}>
            ボリビアの塩湖。乾季には広大な塩の平原が広がり、<br></br>
            水面と空の境界が不思議な光景を作り出す。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview5}
            alt="トスカーナ"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>トスカーナ</h3>
          <p className={style.text2}>
            イタリア中部の風光明美な地域。美しい丘陵、オリーブ畑、ワインヤード、芸術、歴史が調和する美の楽園。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview6}
            alt="パガン"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>パガン</h3>
          <p className={style.text2}>
            ミャンマーの古都。約2000もの仏塔や寺院が点在し、仏教の聖地として古代の宗教遺産を体感できる。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview7}
            alt="カナディアンロッキー"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>カナディアンロッキー</h3>
          <p className={style.text2}>
            カナダの雄大な山脈。氷河、エメラルドグリーンの湖、ハイキング、アウトドアアクティビティが魅力。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview8}
            alt="ヘネラル・カレーラ湖"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>ヘネラル・カレーラ湖</h3>
          <p className={style.text2}>
            チリとアルゼンチンに跨る湖。大理石の奇岩と青く透明な水が幻想的な景色を作り出す。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview9}
            alt="ソコトラ島"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>ソコトラ島</h3>
          <p className={style.text2}>
            固有の植物や生態系があり、独自の文化と美しいビーチが、<br></br>
            隔絶された魅力を放つ。
          </p>
        </div>
        <div className={style.photo}>
          <img
            className={style.image}
            src={Bestview10}
            alt="アブラハム湖"
            width={500}
            height={500}
            loading="lazy"
          />
          <h3 className={style.text1}>アブラハム湖</h3>
          <p className={style.text2}>
            エチオピアの高原に位置。文化と信仰が交差する地で、<br></br>
            美しい湖と周囲の風景が魅力的。
          </p>
        </div>
      </Slider>
    </>
  );
}
