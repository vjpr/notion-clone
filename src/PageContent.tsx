import React, { useEffect, useState } from "react";

interface PageProps {
  pageName: string;
  icon: any;
}

const PageContent: React.FC<PageProps> = ({ pageName, icon }) => {
  const [textValue, setTextValue] = useState("");
  const [dropOpen, setDropOpen] = useState(false);

  const dropDownVisible = async () => {
    const dropDown = await document.querySelector(".dropdown-content");
    setDropOpen((prev) => !prev);

    if (dropOpen) {
      dropDown.style.display = "block";
    } else {
      dropDown.style.display = "none";
    }
  };

  const pressedEnter = (e) => {
    if (e.code === "Enter") {
      const targetElement = e.target || e.srcElement;
      targetElement.style.height = targetElement.offsetHeight + 25 + "px";
    }
  };

  const makeTextOption = async () => {
    const parentDiv = document.querySelector(".appended-fields");
    const textElement = document.createElement("div");
    const textareaElement = document.createElement("textarea");

    textElement.classList.add("text-element");

    textareaElement.setAttribute("placeholder", "Type text here...");
    textareaElement.setAttribute("autocomplete", "off");
    textareaElement.addEventListener("keydown", pressedEnter);
    textareaElement.classList.add("text");

    textElement.append(textareaElement);
    parentDiv?.append(textElement);

    const dropDown = await document.querySelector(".dropdown-content");
    setDropOpen((prev) => !prev);

    if (dropOpen) {
      dropDown.style.display = "block";
    } else {
      dropDown.style.display = "none";
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="page-content-header">
          <div className="page-content-header-inner">
            <div className="page-content-header-title-container">
              <div className="outermost-icon-container">
                <div className="icon-div-1">
                  <div className="icon-div-2">
                    <div className="icon-div-3">{icon}</div>
                  </div>
                </div>
              </div>

              <div className="page-title">
                <div className="title-dropdown-div">
                  <div className="dropdown">
                    <div className="dropdown_parent">
                      <span id="-1" className="add-element">
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          onClick={dropDownVisible}
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                      </span>
                    </div>

                    <div className="dropdown-content">
                      <a
                        onClick={makeTextOption}
                        href="#"
                        className="dropdown-text-option"
                      >
                        <img
                          className="drpdn-icon"
                          src="https://notion-app-clone.herokuapp.com/static/frontend/e308503ff876ee4861ee7e89a8099552.png"
                          alt="text"
                        />
                        <div className="drpdn-text">
                          <p className="drpdn-head">Text</p>
                          <p className="drpdn-sub-head">
                            Just start writing with plain text.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span className="big-title">
                    {pageName ? (
                      pageName
                    ) : (
                      <p style={{ fontSize: 16, fontWeight: 500 }}>
                        Enter page name at top!
                      </p>
                    )}
                  </span>
                </div>
                <p
                  style={{
                    opacity: 0.4,
                    fontSize: 14,
                    fontWeight: 400,
                    marginTop: "1rem"
                  }}
                >
                  Hover over the page title and press the <b>+</b> to add an
                  element...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content-writings">
          <div className="page-writing-outer">
            <div className="page-writing-inner">
              <div className="page-writing-main-words">
                <div className="appended-fields"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
