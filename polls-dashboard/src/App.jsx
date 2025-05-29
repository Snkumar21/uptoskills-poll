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
          <div className="polls-header">
            <h2>Polls</h2>
            <button className='poll-btn'>
              <i className="fa fa-plus-circle" aria-hidden="true" style={{ paddingRight: "10px" }}></i>
              Create Poll
            </button>
          </div>
          
          <div className="active-polls">
            <h3>Active Polls</h3>
            <div className="active-poll">
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
          </div>

          <div className="completed-polls">
            <h3>Completed Polls</h3>
            <div className="completed-poll-wrapper">
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
        </div>
      </main>

      <AnalyticsSidebar />
    </div>
  );
}

export default App;