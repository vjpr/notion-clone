import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
import "./styles.css";

const App: React.FC = () => {
  const [pageName, setPageName] = useState("");
  const [icon, setIcon] = useState();
  const callbackFunction = (name: any, icon: any) => {
    setPageName(name);
    setIcon(icon);
  };

  const pages = [{ name: pageName, icon }];

  return (
    <>
      <div className="outermost-container">
        <div className="flexing-container">
          <Sidebar pages={pages} />

          <div className="main-content">
            <PageHeader parentCallback={callbackFunction} icon="📄" />
            <PageContent pageName={pageName} icon={icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
