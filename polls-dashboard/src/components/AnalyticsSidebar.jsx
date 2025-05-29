// src/components/AnalyticsSidebar.jsx
import '../App.css';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';


export default function AnalyticsSidebar() {
  return (
    <div className="analytics-sidebar">
      <h3>Analytics</h3>

      <div className="analytics-block">
        <h4>Weekly Participation</h4>
        <div className="bar-chart">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, idx) => (
            <div key={day} className="bar">
              <div className="value" style={{ height: `${30 + idx * 10}px` }}></div>
              <span>{day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="analytics-block">
        <h4>Current Poll Distribution</h4>
        <div className="donut-chart"></div>
      </div>

      <div className="analytics-block">
        <h4>Recent Activity</h4>
        <ul className="activity-list">
          <li>
            <img src={user1} alt="Sarah Chen" className="activity-avatar" />
            Sarah Chen voted on "Annual Day Theme"
          </li>
          <li>
            <img src={user2} alt="Sarah Chen" className="activity-avatar" />
            Mike Wilson commented on "Work Preference"
          </li>
        </ul>
      </div>
    </div>
  );
}