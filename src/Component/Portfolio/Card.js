import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div onClick={toggleModal} className="box btn_shadow ">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="category d_flex">
          <span>{props.category}</span>
          <label>
            <i className="far fa-heart"></i> {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <a href="#popup" className="arrow">
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image1} alt="" />
            </div>

            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>{props.info}</p>
              <p>{props.tech}</p>
              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  <a href={props.github}>
                    SOURCE CODE <i class="fas fa-chevron-right"></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href={props.demo}>
                    VIEW PROJECT<i class="fas fa-chevron-right"></i>
                  </a>
                </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
