import NavbarContainer from "./Navbar/NavbarContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";
import FooterContainer from "./Footer/FooterContainer";
import ContentContainer from "./Content/ContentContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper body__container">
        <BrowserRouter>
          <NavbarContainer />

          <SidebarContainer />

          <ContentContainer />

          <aside className="control-sidebar control-sidebar-dark"></aside>

          <FooterContainer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
