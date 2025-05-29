// src/App.jsx
import './App.css';
import Sidebar from './components/Sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PollCard from './components/PollCard';
import CompletedPoll from './components/CompletedPoll';
import AnalyticsSidebar from './components/AnalyticsSidebar';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />

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