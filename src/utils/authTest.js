// src/utils/authTest.js
const authTests = {
  clearStorage() {
    localStorage.clear();
    console.log('%c🗑️ LocalStorage cleared!', 'color: #ff4757; font-size: 14px');
    this.printState();
  },

  printState() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    console.group('%c🔍 Current Auth State', 'color: #2ed573; font-size: 14px');
    console.log('%c👥 Registered users:', 'color: #eccc68', users);
    console.log('%c👤 Current session:', 'color: #eccc68', currentUser || 'Not logged in');
    console.groupEnd();
  },

  testSignup(username = 'testuser', email = 'test@example.com', password = 'test123') {
    console.group('%c🔒 Testing Signup', 'color: #3742fa');
    this.clearStorage();
    
    // Mock registration
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      username,
      email,
      password: btoa(password), // Simple hash
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    console.log('%c✅ Signup successful!', 'color: #2ed573');
    this.printState();
    console.groupEnd();
    return newUser;
  },

  testLogin(email = 'test@example.com', password = 'test123') {
    console.group('%c🔑 Testing Login', 'color: #3742fa');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === btoa(password));
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      console.log('%c✅ Login successful!', 'color: #2ed573');
    } else {
      console.log('%c❌ Login failed', 'color: #ff4757');
    }
    
    this.printState();
    console.groupEnd();
    return user;
  }
};

// Export for Jest tests
export { authTests };

// Expose to browser console in development
if (process.env.NODE_ENV === 'development') {
  window.authTests = authTests;
  console.log('%c🔧 authTests available in console (try authTests.testSignup())', 
    'color: #1e90ff; font-size: 14px');
}