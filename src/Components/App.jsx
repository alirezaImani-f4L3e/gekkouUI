import NavbarContainer from "./Navbar/NavbarContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";
import FooterContainer from "./Footer/FooterContainer";
import ContentContainer from "./Body/ContentContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { useState, useEffect } from "react";

TopBarProgress.config({
  barColors: {
    0: "red",
    "1.0": "red",
  },
  shadowBlur: 5,
});

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <TopBarProgress />}
      <div className="wrapper body__container ">
        <BrowserRouter>
          <NavbarContainer />

          <SidebarContainer />

          <ContentContainer loading={loading} setLoading={setLoading} />

          <aside className="control-sidebar control-sidebar-dark"></aside>

          <FooterContainer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
