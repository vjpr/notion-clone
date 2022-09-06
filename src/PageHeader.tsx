import React, { useState, useEffect } from "react";

interface HeaderProps {
  icon: string;
  parentCallback: any;
}

const PageHeader: React.FC<HeaderProps> = ({ parentCallback, icon }) => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    parentCallback(pageName, icon);
  }, [pageName]);

  return (
    <>
      <header>
        <div className="current-page">
          <div className="page-button-outer">
            <a href="#">
              <div className="page-button-inner">
                <div>
                  <div className="page-button-icon">
                    <span role="img" aria-label="Page Icon">
                      {icon ? icon : ""}
                    </span>
                  </div>
                  <div className="page-button-text">
                    <textarea
                      value={pageName}
                      onChange={(e) => setPageName(e.target.value)}
                      placeholder="Enter page name"
                    ></textarea>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
