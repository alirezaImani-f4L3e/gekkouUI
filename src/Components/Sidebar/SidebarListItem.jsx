import React from "react";
import { Link } from "react-router-dom";

const SidebarListItem = ({ title, link }) => {
  return (
    <li className="nav-item my-1 has-treeview menu-open">
      <Link to={link} className="nav-link ">
        <i className="nav-icon fa fa-dashboard"></i>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default SidebarListItem;
