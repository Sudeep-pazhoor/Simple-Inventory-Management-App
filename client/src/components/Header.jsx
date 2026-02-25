import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {!isAuthenticated ? (
          <>
            <Link to="/login" style={{ ...styles.button, ...styles.login }}>Click Here to Login</Link>
            <Link to="/signup" style={{ ...styles.button, ...styles.signup }}>Create a New Account</Link>
          </>
        ) : (
          <>
       <Link to="/" style={{ ...styles.button, ...styles.dashboard }}>Dashboard</Link>
                <button onClick={logout} style={{ ...styles.button, ...styles.logout }}>Logout</button>
          </>
        )}
          </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'black',padding: '20px',textAlign: 'center',
  },
  nav: {
    display: 'flex', justifyContent: 'center',gap: '15px',
  },
  button: {
    padding: '8px 18px',borderRadius: '25px',
    textDecoration: 'none',color: 'white',
    fontWeight: 'bold',border: 'none',
    cursor: 'pointer',
  },
  login: {
    backgroundColor: '#28a745', 
  },
  signup: {
    backgroundColor: '#ff9800', 
  },
  dashboard: {
    backgroundColor: '#2196f3', 
  },
  logout: {
    backgroundColor: '#f44336', 
  },
};

export default Header;