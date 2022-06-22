import { useState } from "react";
import style from "./app.module.css";

function App() {
  const [active, setActive] = useState(false);
  const [btnText, setBtnText] = useState("Добавить в корзину");
  const [cartText, setCartText] = useState("");
  const [infoText, setInfoText] = useState("");

  const handleInfoClick = () => {
    setInfoText(
      <div className={style.info_Text_btn}>
        <div className={style.infoText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          reprehenderit quae incidunt rerum.
        </div>
        <div>
          <button className={style.btnClose} onClick={handleBtnCloseClick}>
            ❌
          </button>
        </div>
      </div>
    );
  };

  const handleBtnCloseClick = () => {
    setInfoText("");
  };

  const handleCartClick = () => {
    setActive(false);
    setBtnText("Добавить в корзину");
    setCartText("");
  };

  const handleClick = () => {
    setActive(true);
    setBtnText("Уже в корзине");
    setCartText(
      <button className={style.cartBtn} onClick={handleCartClick}>
        удалить из корзины
      </button>
    );
  };

  const btnCartClass = () => (active ? style.cart_btnOff : style.cart_btn);

  return (
    <div className={style.container}>
      <div className={style.img_cont}>
        <img src="https://sneakernews.com/wp-content/uploads/2021/12/18-most-anticipated-2022-air-max-penny.jpg?w=780"  alt="Nike Sneaker"/>
      </div>
      <div className={style.name_price_cont}>
        <div className={style.price_name}>
          <div className={style.name}>Nike Sneaker</div>
          <div className={style.price}>$120</div>
        </div>
        <div className={style.btn_cont}>
          <button className={style.info_btn} onClick={handleInfoClick}>
            Детали
          </button>
          {infoText}
        </div>
      </div>
      <hr />
      <div className={style.info_cont}>
        <div className={style.decription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          libero molestiae a modi, laboriosam numquam illum maiores nobis maxime
          at. Nam nobis excepturi.
        </div>
        <div className={style.btn_cont1}>
          <button
            className={btnCartClass()}
            onClick={handleClick}
            disabled={active}
          >
            {btnText}
          </button>
        </div>
        {cartText}
      </div>
    </div>
  );
}

export default App;
