import React, { useState } from 'react';
import './ChatSystem.css';

import user1 from '../assets/user1.jpg';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.jpeg';

const users = [
    { id: 1, name: 'Josh Cummins', avatar: user4 },
    { id: 2, name: 'Ben Jamin Lee', avatar: user1 },
    { id: 3, name: 'Sam Joseph', avatar: user3 }
];

const initialMessages = {
    1: [{ sender: 'Josh Cummins', text: 'Hey there!' }],
    2: [{ sender: 'Ben Jamin Lee', text: 'Are you coming for lunch?' }],
    3: [{ sender: 'Sam Joseph', text: 'Shared a file with the group!' }]
};

export default function ChatSystem() {
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim() === '') return;
        const newMessage = { sender: 'You', text: input };

        setMessages({
            ...messages,
            [selectedUser.id]: [...(messages[selectedUser.id] || []), newMessage]
        });

        setInput('');
    };

    const handleFileUpload = (file) => {
        const fileMessage = {
        sender: 'You',
        text: `📎 Sent a file: ${file.name}`
        };

        setMessages({
        ...messages,
        [selectedUser.id]: [...(messages[selectedUser.id] || []), fileMessage]
        });
    };

    return (
        <div className="chat-container">
            <div className="chat-sidebar">
                <h3>Messages</h3>
                <ul>
                    {users.map(user => (
                        <li
                            key={user.id}
                            className={selectedUser.id === user.id ? 'active-user' : ''}
                            onClick={() => setSelectedUser(user)}
                        >
                            <img src={user.avatar} alt={user.name} className="user-avatar" />
                            <span>{user.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="chat-main">
                <div className="chat-header">
                    <h3>Chat with {selectedUser.name}</h3>
                    <div className="chat-box">
                        {(messages[selectedUser.id] || []).map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
                            >
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>

                <div className="chat-input-box">
                    <label className="attach-btn" title="Attach a file">
                        📎
                        <input
                            type="file"
                            onChange={(e) => handleFileUpload(e.target.files[0])}
                            style={{ display: 'none' }}
                        />
                    </label>

                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>
    );
}