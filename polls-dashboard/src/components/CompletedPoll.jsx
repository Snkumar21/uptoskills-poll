// src/components/CompletedPoll.jsx
import '../App.css';

export default function CompletedPoll({ question, options, ended }) {
  return (
    <div className="completed-poll">
      <h4>{question} <span className="closed">Closed</span></h4>
      <ul>
        {options.map((opt, i) => (
          <li key={i}>
            <span>{opt.label}</span>
            <div className="progress-bar">
              <div className="filled" style={{ width: `${opt.percent}%` }}></div>
            </div>
            <span className="percent">{opt.percent}%</span>
          </li>
        ))}
      </ul>
      <div className="ended-text">Ended {ended} ago</div>
    </div>
  );
}