import React from 'react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Dashboard = ({ onLogout, isAuthenticated }) => {
  // Simplified navigation items
  const navItems = [
    { icon: 'house-fill', text: 'Dashboard' },
    { icon: 'file-earmark', text: 'Orders' },
    { icon: 'cart', text: 'Products' },
    { icon: 'people', text: 'Customers' },
    { icon: 'graph-up', text: 'Reports' }
  ];

  const savedReports = [
    { icon: 'file-earmark-text', text: 'Current month' },
    { icon: 'file-earmark-text', text: 'Last quarter' },
    { icon: 'file-earmark-text', text: 'Social engagement' }
  ];

  return (
    <div className="d-flex flex-column vh-100">
      <Header onLogout={onLogout} isAuthenticated={isAuthenticated} />
      
      <div className="container-fluid flex-grow-1 overflow-hidden">
        <div className="row h-100">
          {/* Simplified Sidebar */}
          <div className="sidebar col-md-3 col-lg-2 p-0 bg-body-tertiary d-flex flex-column">
            <div className="p-3 border-bottom">
              <h5>Company Name</h5>
            </div>
            
            <div className="overflow-y-auto flex-grow-1">
              <ul className="nav flex-column">
                {navItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <i className={`bi bi-${item.icon}`}></i>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>

              <h6 className="sidebar-heading px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                Saved Reports
              </h6>
              
              <ul className="nav flex-column mb-2">
                {savedReports.map((report, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <i className={`bi bi-${report.icon}`}></i>
                      {report.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto p-3 border-top">

            </div>
          </div>

          {/* Main Content Area */}
          <main className="col-md-9 col-lg-10 px-md-4 pt-3 overflow-auto">
            <div className="d-flex justify-content-between flex-wrap border-bottom pb-3 mb-3">
              <h2>Dashboard Overview</h2>
              <div className="btn-toolbar gap-2">
                <button className="btn btn-sm btn-outline-secondary">Share</button>
                <button className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
            </div>

            {/* Placeholder for chart */}
            <div className="chart-container bg-light rounded mb-4" style={{height: "300px"}}>
              <div className="d-flex h-100 align-items-center justify-content-center text-muted">
                Chart Visualization Area
              </div>
            </div>

            {/* Simplified Data Table */}
            <h5>Recent Activity</h5>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td>{1000 + i}</td>
                      <td>Sample Item {i + 1}</td>
                      <td>Active</td>
                      <td>2023-06-{10 + i}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;