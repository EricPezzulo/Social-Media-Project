import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import "./Profile.css";
function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}post/3.jpeg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}people/7.jpeg`}
                alt=""
                className="profileUserImg"
              />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">username</h4>
            <div className="span profileInfoDesc">Hello freinds!</div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
