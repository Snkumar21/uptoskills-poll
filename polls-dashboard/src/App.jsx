// src/App.jsx
import './App.css';
import PollCard from './components/pollcard';
import CompletedPoll from './components/completedPoll';
import AnalyticsSidebar from './components/AnalyticsSidebar';

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>HR Social Hub</h2>
        <ul>
          <li>📄 News Feed</li>
          <li>👤 Profiles</li>
          <li>🏅 Recognition</li>
          <li>👥 Groups</li>
          <li className="active">📊 Polls</li>
          <li>📅 Events</li>
          <li>🖼 Media</li>
        </ul>
        <div className="company-links">
          <li>🏆 Leaderboard</li>
          <li>💡 Spotlights</li>
          <li>📝 HR Blog</li>
        </div>
      </aside>

      <main className="main-content">
        <div className="polls-section">
          <h2>Polls</h2>
          <div className="active-polls">
            <PollCard
              question="Which theme should we pick for Annual Day?"
              options={[
                { label: "Retro Vibes", percent: 45 },
                { label: "Future Forward", percent: 35 },
                { label: "Cultural Fusion", percent: 20 },
              ]}
              comments={24}
              daysLeft={2}
            />
            <PollCard
              question="Do you prefer hybrid or remote work?"
              options={[
                { label: "Hybrid", percent: 65 },
                { label: "Remote", percent: 35 },
              ]}
              comments={18}
              daysLeft={1}
            />
          </div>

          <div className="completed-polls">
            <h3>Completed Polls</h3>
            <CompletedPoll
              question="Best movie of the year?"
              options={[
                { label: "Oppenheimer", percent: 55 },
                { label: "Barbie", percent: 45 },
              ]}
              ended="2 days"
            />
          </div>
        </div>
      </main>

      <AnalyticsSidebar />
    </div>
  );
}

export default App;