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

const images = [
  {
    name: Bestview1,
    place: "イエローナイフ",
    explain:
      "カナダ北部の拠点都市。オーロラが輝く美しい夜空とアウトドア活動や先住民文化の交流が魅力。",
  },
  {
    name: Bestview2,
    place: "アマゾン川",
    explain:
      "南米最大の河川。広大な熱帯雨林と生態多様性があり、カヌー旅行や野生動植物観察が楽しい。",
  },
  {
    name: Bestview3,
    place: "グアナファト",
    explain:
      "メキシコ中部の美しい都市。カラフルな建物、歴史的な街並み、芸術と文化が息づく魅力的な観光地。",
  },
  {
    name: Bestview4,
    place: "ユウニ湖",
    explain:
      "ボリビアの塩湖。乾季には広大な塩の平原が広がり、水面と空の境界が不思議な光景を作り出す。",
  },
  {
    name: Bestview5,
    place: "トスカーナ",
    explain:
      "イタリア中部の風光明美な地域。美しい丘陵、オリーブ畑、ワインヤード、芸術、歴史が調和する美の楽園。",
  },
  {
    name: Bestview6,
    place: "パガン",
    explain:
      "ミャンマーの古都。約2000もの仏塔や寺院が点在し、仏教の聖地として古代の宗教遺産を体感できる。",
  },
  {
    name: Bestview7,
    place: "カナディアンロッキー",
    explain:
      "カナディアンロッキー: カナダの雄大な山脈。氷河、エメラルドグリーンの湖、ハイキング、アウトドアアクティビティが魅力。",
  },
  {
    name: Bestview8,
    place: "ヘネラル・カレーラ湖",
    explain:
      "チリとアルゼンチンに跨る湖。大理石の奇岩と青く透明な水が幻想的な景色を作り出す。",
  },
  {
    name: Bestview9,
    place: "ソコトラ島",
    explain:
      "イエメンの島。固有の植物や生態系があり、独自の文化と美しいビーチが、隔絶された魅力を放つ。",
  },
  {
    name: Bestview10,
    place: "アブラハム湖",
    explain:
      "エチオピアの高原に位置。文化と信仰が交差する地で、美しい湖と周囲の風景が魅力的。",
  },
];

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
        {images.map((img, index) => {
          return (
            <div key={index}>
              <img
                className={style.image}
                src={img.name}
                alt={img.place}
                width={500}
                height={500}
                loading="lazy"
              />
              <h3 className={style.text1}>{img.place}</h3>
              <p className={style.text2}>{img.explain}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
