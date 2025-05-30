// src/App.jsx
import './App.css';
import Sidebar from './components/Sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ChatSystem from './components/ChatSystem';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <ChatSystem />
      </main>

    </div>
  );
}

export default App;