import '../App.css';
import profilePic from '../assets/user.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <h2>HR Social Hub</h2>
        <hr className="divider" />

        <nav>
          <a href="#">
            <i className="fa fa-home" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            News Feed
          </a>
          <a href="#">
            <i className="fa-regular fa-user" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            Profiles
          </a>
          <a href="#">
            <i className="fa-regular fa-star" aria-hidden="true" style={{ paddingRight: "10px" }}></i>
            Recognition
          </a>
          <a href="#">
            <i className="fa-regular fa-comment" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            Groups
          </a>
          <a href="#" className="active">
            <i className="fa fa-poll" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            Polls
          </a>
          <a href="#">
            <i className="fa-regular fa-calendar" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            Events
          </a>
          <a href="#">
            <i class="fa-regular fa-image" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            Media
          </a>
          <hr className="divider" />
          <h3>Company</h3>
          <a href="#">
            <i class="fa fa-trophy" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            Leaderboard
          </a>
          <a href="#">
            <i class="fa fa-bolt" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            Spotlights
          </a>
          <a href="#">
            <i class="fa fa-blog" aria-hidden="true" style={{paddingRight: "10px"}}></i>
            HR Blog
          </a>
        </nav>
      </div>

      <div className="profile-section" style={{ marginTop: "auto" }}>
        <div className="profile-info">
          <img src={profilePic} alt="User" className="profile-pic" />
          <div className="profile-text">
            <strong>John Doe</strong>
            <p>Frontend Dev</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;