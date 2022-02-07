import React from "react";
import NotificationItem from "./NotificationItem";

const Navbarcontainer = () => {
  return (
    <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fa fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" className="nav-link">
            خانه
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            تماس
          </a>
        </li>
      </ul>

      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input
            className="form-control form-control-navbar"
            type="search"
            placeholder="جستجو"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="fa fa-comments-o"></i>
            <span className="badge badge-danger navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
            <div className="dropdown-divider"></div>

            <NotificationItem
              link="#"
              image="dist/img/user8-128x128.jpg"
              alt="User Avatar"
              user="پیمان احمدی"
            />

            <div className="dropdown-divider"></div>
            <NotificationItem
              link="#"
              image="dist/img/user3-128x128.jpg"
              alt="User Avatar"
              user="سارا احمدی"
            />

            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">
              مشاهده همه پیام‌ها
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="fa fa-bell-o"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
            <span className="dropdown-item dropdown-header">15 نوتیفیکیشن</span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fa fa-envelope ml-2"></i> 4 پیام جدید
              <span className="float-left text-muted text-sm">3 دقیقه</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fa fa-users ml-2"></i> 8 درخواست دوستی
              <span className="float-left text-muted text-sm">12 ساعت</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fa fa-file ml-2"></i> 3 گزارش جدید
              <span className="float-left text-muted text-sm">2 روز</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">
              مشاهده همه نوتیفیکیشن
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarcontainer;
