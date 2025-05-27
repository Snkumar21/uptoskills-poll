// src/components/PollCard.jsx
import './App.css';

export default function PollCard({ question, options, comments, daysLeft }) {
  return (
    <div className="poll-card">
      <h3>{question}</h3>
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
      <div className="poll-meta">
        <span>{comments} comments</span>
        <span>{daysLeft} days left</span>
      </div>
    </div>
  );
}