import "./Post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/people/6.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">UserName</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey its my first post!</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="postLikeIcon" />
            <img src="/assets/heart.png" alt="" className="postLikeIcon" />
            <span className="postLikeCounter">78 people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">23 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
