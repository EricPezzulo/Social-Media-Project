import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PeopleIcon from "@material-ui/icons/People";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import WorkIcon from "@material-ui/icons/Work";
import EventIcon from "@material-ui/icons/Event";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sideabrListItem">
            <RssFeedIcon className="sidebarIcon" />{" "}
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sideabrListItem">
            <ChatIcon className="sidebarIcon" />{" "}
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sideabrListItem">
            <PlayCircleFilledIcon className="sidebarIcon" />{" "}
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sideabrListItem">
            <PeopleIcon className="sidebarIcon" />{" "}
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sideabrListItem">
            <BookmarkIcon className="sidebarIcon" />{" "}
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sideabrListItem">
            <WorkIcon className="sidebarIcon" />{" "}
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sideabrListItem">
            <EventIcon className="sidebarIcon" />{" "}
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
