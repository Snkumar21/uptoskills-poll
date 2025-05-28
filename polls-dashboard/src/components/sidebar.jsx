import '../App.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>HR Social Hub</h2>
      <nav>
        <a href="#">News Feed</a>
        <a href="#">Profiles</a>
        <a href="#">Recognition</a>
        <a href="#">Groups</a>
        <a href="#" className="active">Polls</a>
        <a href="#">Events</a>
        <a href="#">Media</a>
        <h3>Company</h3>
        <a href="#">Leaderboard</a>
        <a href="#">Spotlights</a>
        <a href="#">HR Blog</a>
      </nav>
    </aside>
  );
};

export default Sidebar;