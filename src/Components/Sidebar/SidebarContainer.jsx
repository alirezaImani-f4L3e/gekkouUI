import SidebarListItem from "./SidebarListItem";

const SidebarContainer = () => {
  function handleWindowEvent(event) {
    event.stopPropagation();
  }
  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      onClick={handleWindowEvent}
    >
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">پنل مدیریت</span>
      </a>

      <div className="sidebar">
        <div>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                محمد اکبری
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <SidebarListItem title="داشبورد" link="/dashboard" />
              <SidebarListItem title="live gekko" link="live" />
              <SidebarListItem title="backTest" link="backtest" />
              <SidebarListItem title="local data" link="localdata" />
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SidebarContainer;
