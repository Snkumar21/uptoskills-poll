// src/components/AnalyticsSidebar.jsx
import '../App.css';

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
          <li><strong>Sarah Chen</strong> voted on <em>"Annual Day Theme"</em></li>
          <li><strong>Mike Wilson</strong> commented on <em>"Work Preference"</em></li>
        </ul>
      </div>
    </div>
  );
}