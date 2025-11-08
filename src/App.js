import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

// Dashboard Component
function Dashboard() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  const statsData = {
    started: { count: 23, change: 12.5 },
    inProgress: { count: 47, change: 12.5 },
    completed: { count: 23, change: 12.5 }
  };
  
  const messages = [
    { 
      id: 1, 
      name: 'John Doe', 
      message: 'Can we schedule a meeting to discuss the project progress?', 
      time: '10:30 AM',
      fullMessage: `Hi Team,\n\nI hope this message finds you well. I wanted to schedule a meeting to discuss the current project progress...`
    },
    { 
      id: 2, 
      name: 'Sarah Wilson', 
      message: 'I need to discuss the case details from yesterday meeting.', 
      time: '9:15 AM',
      fullMessage: `Hello,\n\nFollowing up on our meeting yesterday, I need to discuss the case details more thoroughly...`
    }
  ];

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  const handleBackToMessages = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="dashboard-content">
      <div className="stats-section">
        <div className="stat-card">
          <h3>Started</h3>
          <div className="stat-value">{statsData.started.count}</div>
          <div className="stat-change positive">
            ↑ {statsData.started.change}% from yesterday
          </div>
        </div>
        
        <div className="stat-card">
          <h3>In progress</h3>
          <div className="stat-value">{statsData.inProgress.count}</div>
          <div className="stat-change positive">
            ↑ {statsData.inProgress.change}% from yesterday
          </div>
        </div>
        
        <div className="stat-card">
          <h3>Completed</h3>
          <div className="stat-value">{statsData.completed.count}</div>
          <div className="stat-change positive">
            ↑ {statsData.completed.change}% from yesterday
          </div>
        </div>
      </div>
      
      <div className="map-section">
        <h2>Map View</h2>
        <div className="map-placeholder">
          <div className="map-content">
            <div className="map-points">
              <div className="map-point active" style={{top: '30%', left: '40%'}}>
                <div className="point-tooltip">Case #1234</div>
              </div>
              <div className="map-point" style={{top: '60%', left: '60%'}}>
                <div className="point-tooltip">Case #1235</div>
              </div>
            </div>
            <p>Active Cases Overview</p>
          </div>
        </div>
      </div>
      
      <div className="messages-section">
        <h2>Messages</h2>
        {!selectedMessage ? (
          <div className="messages-list">
            {messages.map(message => (
              <div 
                key={message.id} 
                className="message-item"
                onClick={() => handleMessageClick(message)}
              >
                <div className="message-avatar">
                  {message.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-sender">{message.name}</span>
                    <span className="message-time">{message.time}</span>
                  </div>
                  <p className="message-preview">{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="message-detail">
            <div className="message-header-detail">
              <button className="back-button" onClick={handleBackToMessages}>
                ← Back to Messages
              </button>
              <div className="message-sender-info">
                <div className="message-avatar large">
                  {selectedMessage.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="message-sender-name">{selectedMessage.name}</div>
                  <div className="message-time-detail">{selectedMessage.time}</div>
                </div>
              </div>
            </div>
            <div className="message-full-content">
              <p>{selectedMessage.fullMessage}</p>
            </div>
            <div className="message-actions">
              <button className="action-btn reply-btn">Reply</button>
              <button className="action-btn forward-btn">Forward</button>
              <button className="action-btn delete-btn">Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// My Projects Component
function MyProjects() {
  const projects = [
    {
      id: 1,
      name: 'SafeText Mobile App',
      status: 'In Progress',
      progress: 75,
      deadline: '2024-12-15',
      team: ['John Doe', 'Sarah Wilson', 'Mike Chen']
    },
    {
      id: 2,
      name: 'Data Analytics Dashboard',
      status: 'Completed',
      progress: 100,
      deadline: '2024-11-20',
      team: ['Emily Davis', 'Robert Brown']
    },
    {
      id: 3,
      name: 'Security Enhancement',
      status: 'Planning',
      progress: 25,
      deadline: '2025-01-30',
      team: ['John Doe', 'Lisa Wang']
    },
    {
      id: 4,
      name: 'API Integration',
      status: 'In Progress',
      progress: 60,
      deadline: '2024-12-05',
      team: ['Mike Chen', 'Sarah Wilson']
    }
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>My Projects</h1>
        <button className="add-btn">+ New Project</button>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            
            <div className="progress-section">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{width: `${project.progress}%`}}
                ></div>
              </div>
              <span className="progress-text">{project.progress}% Complete</span>
            </div>
            
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">Deadline:</span>
                <span className="detail-value">{project.deadline}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Team:</span>
                <div className="team-members">
                  {project.team.map((member, index) => (
                    <span key={index} className="team-member">{member}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="project-actions">
              <button className="action-btn view-btn">View Details</button>
              <button className="action-btn edit-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Case Files Component
function CaseFiles() {
  const cases = [
    {
      id: 1,
      caseNumber: 'CT-2024-001',
      title: 'Data Security Breach Investigation',
      status: 'Open',
      priority: 'High',
      assignedTo: 'John Doe',
      createdDate: '2024-11-01',
      lastUpdated: '2024-11-08'
    },
    {
      id: 2,
      caseNumber: 'CT-2024-002',
      title: 'User Privacy Compliance Review',
      status: 'In Progress',
      priority: 'Medium',
      assignedTo: 'Sarah Wilson',
      createdDate: '2024-10-25',
      lastUpdated: '2024-11-07'
    },
    {
      id: 3,
      caseNumber: 'CT-2024-003',
      title: 'Mobile App Security Audit',
      status: 'Closed',
      priority: 'High',
      assignedTo: 'Mike Chen',
      createdDate: '2024-10-15',
      lastUpdated: '2024-11-05'
    },
    {
      id: 4,
      caseNumber: 'CT-2024-004',
      title: 'API Security Assessment',
      status: 'Open',
      priority: 'Critical',
      assignedTo: 'Emily Davis',
      createdDate: '2024-11-05',
      lastUpdated: '2024-11-08'
    }
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Case Files</h1>
        <div className="header-actions">
          <button className="filter-btn">Filter</button>
          <button className="add-btn">+ New Case</button>
        </div>
      </div>
      
      <div className="cases-table-container">
        <table className="cases-table">
          <thead>
            <tr>
              <th>Case Number</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned To</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map(caseItem => (
              <tr key={caseItem.id}>
                <td className="case-number">{caseItem.caseNumber}</td>
                <td className="case-title">{caseItem.title}</td>
                <td>
                  <span className={`status-badge ${caseItem.status.toLowerCase()}`}>
                    {caseItem.status}
                  </span>
                </td>
                <td>
                  <span className={`priority-badge ${caseItem.priority.toLowerCase()}`}>
                    {caseItem.priority}
                  </span>
                </td>
                <td className="assigned-to">{caseItem.assignedTo}</td>
                <td className="last-updated">{caseItem.lastUpdated}</td>
                <td>
                  <div className="case-actions">
                    <button className="action-btn view-btn">View</button>
                    <button className="action-btn edit-btn">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Settings Component
function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  
  const tabs = [
    { id: 'profile', label: 'Profile Settings' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'preferences', label: 'Preferences' }
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>Settings</h1>
      </div>
      
      <div className="settings-container">
        <div className="settings-sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="settings-section">
              <h3>Profile Information</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" defaultValue="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="john.doe@safetext.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select defaultValue="security">
                  <option value="security">Security</option>
                  <option value="development">Development</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
              <button className="save-btn">Save Changes</button>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="settings-section">
              <h3>Security Settings</h3>
              <div className="security-item">
                <div>
                  <h4>Password</h4>
                  <p>Last changed 30 days ago</p>
                </div>
                <button className="change-btn">Change Password</button>
              </div>
              <div className="security-item">
                <div>
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <button className="enable-btn">Enable 2FA</button>
              </div>
              <div className="security-item">
                <div>
                  <h4>Login Sessions</h4>
                  <p>Manage your active login sessions</p>
                </div>
                <button className="view-btn">View Sessions</button>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h3>Notification Preferences</h3>
              <div className="notification-item">
                <div>
                  <h4>Email Notifications</h4>
                  <p>Receive email alerts for important updates</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="notification-item">
                <div>
                  <h4>Push Notifications</h4>
                  <p>Get instant notifications on your device</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="notification-item">
                <div>
                  <h4>SMS Alerts</h4>
                  <p>Critical alerts via SMS</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          )}
          
          {activeTab === 'preferences' && (
            <div className="settings-section">
              <h3>Application Preferences</h3>
              <div className="form-group">
                <label>Language</label>
                <select defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div className="form-group">
                <label>Time Zone</label>
                <select defaultValue="est">
                  <option value="est">Eastern Time (EST)</option>
                  <option value="pst">Pacific Time (PST)</option>
                  <option value="cst">Central Time (CST)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Theme</label>
                <select defaultValue="light">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <button className="save-btn">Save Preferences</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main App Component with Router
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const getActiveNav = () => {
    if (currentPath === '/') return 'dashboard';
    if (currentPath === '/my-projects') return 'my-projects';
    if (currentPath === '/case-files') return 'case-files';
    if (currentPath === '/settings') return 'settings';
    return 'dashboard';
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const getPageTitle = () => {
    switch(currentPath) {
      case '/': return 'Dashboard';
      case '/my-projects': return 'My Projects';
      case '/case-files': return 'Case Files';
      case '/settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">ST</div>
          <span className="logo-text">SafeText</span>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li 
              className={getActiveNav() === 'dashboard' ? 'active' : ''}
              onClick={() => handleNavigation('/')}
            >
              Dashboard
            </li>
            <li 
              className={getActiveNav() === 'my-projects' ? 'active' : ''}
              onClick={() => handleNavigation('/my-projects')}
            >
              My Projects
            </li>
            <li 
              className={getActiveNav() === 'case-files' ? 'active' : ''}
              onClick={() => handleNavigation('/case-files')}
            >
              Case Files
            </li>
            <li 
              className={getActiveNav() === 'settings' ? 'active' : ''}
              onClick={() => handleNavigation('/settings')}
            >
              Settings
            </li>
          </ul>
        </nav>
        
        <div className="profile-section">
          <div className="profile-avatar">JD</div>
          <div className="profile-info">
            <div className="profile-name">John Doe</div>
            <div className="profile-role">Administrator</div>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <header className="header">
          <h1>{getPageTitle()}</h1>
          <div className="header-actions">
            <button className="notification-btn">
              <span className="notification-badge">3</span>
              <span className="bell-icon">🔔</span>
            </button>
            <div className="user-menu">
              <span>John Doe</span>
            </div>
          </div>
        </header>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/case-files" element={<CaseFiles />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
