import "./SideBar.css";
import userImg from "../assets/user.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>HR Social Hub</h2>
      <hr className="divider" />

      <nav>
        <a href="#">News Feed</a>
        <a href="#">Profiles</a>
        <a href="#">Recognition</a>
        <a href="#">Groups</a>
        <a href="#" className="active">Polls</a>
        <a href="#">Events</a>
        <a href="#">Media</a>

        <hr className="divider" />
        <h3>Company</h3>
        <a href="#">Leaderboard</a>
        <a href="#">Spotlights</a>
        <a href="#">HR Blog</a>
      </nav>

      <div className="profile-section">
        <hr className="divider" />
        <div className="profile-info">
          <img src={userImg} alt="User" className="profile-pic" />
          <div className="profile-text">
            <strong>John Doe</strong>
            <p>Product Designer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;