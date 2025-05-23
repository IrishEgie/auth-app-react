// src/pages/Main.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export const Main = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex vh-100">
      {/* Slim Sidebar that expands on hover */}
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-primary text-white" 
           style={{width: "60px", transition: "width 0.3s"}}
           onMouseEnter={(e) => e.currentTarget.style.width = "250px"}
           onMouseLeave={(e) => e.currentTarget.style.width = "60px"}>
        
        {/* Brand/Logo - hidden when collapsed, shown when expanded */}
        <div className="d-flex align-items-center mb-3 mb-md-0 text-white text-decoration-none overflow-hidden">
          <span className="fs-4 d-none d-md-inline ms-2">AuthApp</span>
        </div>
        
        <hr className="my-2" />
        
        {/* Navigation Links */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button 
              className="nav-link text-white d-flex align-items-center px-1 py-2" 
              onClick={() => navigate('/')}
            >
              <i className="bi bi-house-door-fill me-3" style={{fontSize: "1.2rem"}}></i>
              <span className="d-none d-md-inline">Home</span>
            </button>
          </li>
          <li>
            <button 
              className="nav-link text-white d-flex align-items-center px-1 py-2" 
              onClick={() => navigate('/about')}
            >
              <i className="bi bi-info-circle-fill me-3" style={{fontSize: "1.2rem"}}></i>
              <span className="d-none d-md-inline">About</span>
            </button>
          </li>
          <li>
            <button 
              className="nav-link text-white d-flex align-items-center px-1 py-2" 
              onClick={() => navigate('/contacts')}
            >
              <i className="bi bi-person-lines-fill me-3" style={{fontSize: "1.2rem"}}></i>
              <span className="d-none d-md-inline">Contacts</span>
            </button>
          </li>
          <li>
            <button 
              className="nav-link text-white d-flex align-items-center px-1 py-2" 
              onClick={() => navigate('/price')}
            >
              <i className="bi bi-currency-dollar me-3" style={{fontSize: "1.2rem"}}></i>
              <span className="d-none d-md-inline">Pricing</span>
            </button>
          </li>
        </ul>
        <hr className="my-2" />
        
        {/* Logout Button */}
        <div className="d-flex align-items-center">
          <Button 
            variant="outline-light" 
            className="d-flex align-items-center px-1 py-2 w-100" 
            onClick={onLogout}
          >
            <i className="bi bi-box-arrow-right me-3" style={{fontSize: "1.2rem"}}></i>
            <span className="d-none d-md-inline">Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4 overflow-auto">
        <h1 className="mb-4">Welcome to Your Dashboard</h1>
        <p className="lead">
          You've successfully logged in to your account. Explore the features using the navigation on the left.
        </p>
        
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title">Quick Actions</h5>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <Button variant="primary" onClick={() => alert('Feature coming soon!')}>
                View Profile
              </Button>
              <Button variant="success" onClick={() => alert('Feature coming soon!')}>
                Settings
              </Button>
              <Button variant="info" onClick={() => alert('Feature coming soon!')}>
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};