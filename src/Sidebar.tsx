import React, { useState } from "react";
import ImageModal from "./ImageModal";

interface SidebarProps {
  pages: any;
}

const defaultUserImg = "https://bit.ly/3rDDSOw";

const Sidebar: React.FC<SidebarProps> = ({ pages }) => {
  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState(defaultUserImg);
  const [clicked, setClicked] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const showInfo = async () => {
    const popup = document.querySelector(".user-popup");
    setClicked((prev) => !prev);
    if (clicked) {
      popup.style.transform = "scale(1)";
      popup.style.opacity = "1";
    } else {
      popup.style.transform = "scale(0)";
      popup.style.opacity = "0";
    }
  };

  const changeImg = (e: any) => {
    if (e.target.value.length > 0) {
      setUserImg(e.target.value);
    }
  };

  if (userImg === "") {
    setUserImg(defaultUserImg);
  }

  return (
    <>
      <div className="side-navigation-bar">
        <div className="side-bar-user-info-outer">
          <div onClick={showInfo} className="info-hitbox" />
          <div className="side-bar-user-info">
            <div className="user-img">
              <img
                onClick={() => setImageModalOpen((prev) => !prev)}
                src={userImg}
                alt="img"
              />
            </div>
            <div className="user-name">
              <input
                onChange={(e) => setUserName(e.target.value)}
                className="sidebar-name-input"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
              {userName ? (userName.slice(-1) === "s" ? "'" : "'s") : ""} Notion
            </div>
          </div>

          <ImageModal
            open={imageModalOpen}
            close={() => setImageModalOpen(false)}
          >
            <input
              className="image-modal-input"
              type="text"
              name="image"
              id="image"
              placeholder="Enter image url"
              onChange={changeImg}
            />
          </ImageModal>

          <div className="user-popup">
            <div className="user-popup-inner">
              <div className="user-popup-flex">
                <div className="user-popup-main">
                  <div className="user-popup-info">
                    <div className="user-popup-icon">
                      <img
                        src={userImg}
                        alt="user-img"
                        width="32px"
                        height="32px"
                      />
                    </div>
                    <div className="user-name-plan">
                      <span className="popup-name-txt">{userName}</span>
                      <span className="popup-plan-txt">Personal Plan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scrollbar">
          <div>
            <div className="scrollbar-title">
              <div className="scrollbar-title-inner">
                <div className="scrollbar-title-inner-2">
                  <div className="scrollbar-title-inner-3">
                    <span>Pages</span>
                  </div>
                </div>
              </div>
            </div>
            {pages.map((page) => {
              return (
                <div key={page.name} className="page-button-outer">
                  <a href="#">
                    <div className="page-button">
                      <div className="page-button-inner">
                        <div className="triangle-container">
                          <div className="triangle-container-inner">
                            <span>
                              <svg viewBox="0 0 100 100" className="triangle">
                                <polygon points="5.9,88.2 50,11.8 94.1,88.2"></polygon>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <span>
                          <span className="scrollbar-page-icon">
                            {page.icon}
                          </span>
                          <span className="scrollbar-page-txt">
                            {page.name ? page.name : "No name"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
