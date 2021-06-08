import "./TopBar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";
function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link className="backToHome " to="/">
          <span className="logo">BuddyWOD</span>
        </Link>
      </div>
      <div className="topbarMiddle">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile">
          <img
            src="/assets/people/1.jpeg"
            alt="profile avatar"
            className="topbarImage"
          />
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
