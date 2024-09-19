import React from 'react';
import { useNavigate } from 'react-router-dom';  
import loginImage from '../assets/login-image.png';  
import '../App.css';
const styles = {
  container: {
    width: '400px',
    minHeight: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#0F172A', // Dark blue background color
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainHeading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    wordWrap: 'break-word'
  },
  image: {
    width: '40%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '20px'
  },
  form: {
    width: '100%'
  },
  formDiv: {
    marginBottom: '20px'
  },
  label: {
    color: '#fff',
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px'
  },
  input: {
    width: '100%',
    padding: '14px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #4B5563',
    fontSize: '18px',
    backgroundColor: '#1E293B',
     color: '#fff'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1f78d1',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  buttonHover: {
    backgroundColor: '#1c66b3'
  },
  secondaryButton: {
    marginTop: '20px',
    backgroundColor: '#f5f5f5',
    color: '#1f78d1',
    border: '1px solid #1f78d1',
    fontSize: '16px'
  }
};

function Login() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here

    // On successful login, navigate to the event page
    navigate('/event-page');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>External Event Management</h1>
      <img src={loginImage} alt="Login" style={styles.image} />
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <div style={styles.formDiv}>
          <label style={styles.label}>Email:</label>
          <input type="email" style={styles.input} required />
        </div>
        <div style={styles.formDiv}>
          <label style={styles.label}>Password:</label>
          <input type="password" style={styles.input} required />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Login
        </button>
      </form>
      
    </div>
  );
}

export default Login;
