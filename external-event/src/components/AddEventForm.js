import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AddEventForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    code: '',
    name: '',
    organizer: '',
    link: '',
    type: '',
    category: '',
    fromDate: '',
    toDate: '',
  });

  const [eventList, setEventList] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-backend-url.com/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Event added successfully!');
        setEventList([...eventList, formData]);
        setFormData({
          id: '',
          code: '',
          name: '',
          organizer: '',
          link: '',
          type: '',
          category: '',
          fromDate: '',
          toDate: '',
        });
      } else {
        alert('Failed to add event');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#192841',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2e8bfa',
      padding: '15px',
      color: '#fff',
      width: '100%',
    },
    titleLeft: {
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    sidebar: {
      width: '20%',
      backgroundColor: '#283a59',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    ul: {
      listStyleType: 'none',
      padding: 0,
    },
    li: {
      color: 'white',
      marginBottom: '20px',
      cursor: 'pointer',
      padding: '10px',
      backgroundColor: '#283a59',
      borderRadius: '5px',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#00008B',
      color: 'white',
      marginBottom: '20px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      alignSelf: 'flex-start',
    },
    formContainer: {
      backgroundColor: '#1c2b44',
      padding: '20px',
      borderRadius: '10px',
      border: 'none',
      width: '80%',
      marginLeft: '20px',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '10px',
      textAlign: 'left',
      color: '#ffffff',
      backgroundColor: '#2e3b4e',
    },
    td: {
      padding: '10px',
      color: '#ffffff',
      backgroundColor: '#2e3b4e',
    },
    link: {
      color: '#4db8ff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <div style={styles.titleLeft} onClick={() => navigate('/external-event-registration')}>
          External Event Registration
        </div>
        <div style={styles.titleLeft} onClick={() => navigate('/internal-event-page')}>
          Internal Review Registration
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={styles.sidebar}>
          <ul style={styles.ul}>
            <li style={styles.li} onClick={() => navigate('/external-event-registration')}>
              Event List
            </li>
            <li style={styles.li} onClick={() => navigate('/add-event')}>
              Add Event
            </li>
            <li style={styles.li} onClick={() => alert('Logout button clicked')}>
              Logout
            </li>
          </ul>
        </div>
        <div style={{ width: '80%', marginLeft: '20px' }}>
          <div style={styles.formContainer}>
            <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>Add New Event</h2>
            <form onSubmit={handleSubmit}>
              {['id', 'code', 'name', 'organizer', 'link', 'type', 'category'].map((field) => (
                <React.Fragment key={field}>
                  <label style={{ color: '#fff' }}>{`Event ${field.charAt(0).toUpperCase() + field.slice(1)}:`}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                </React.Fragment>
              ))}
              <label style={{ color: '#fff' }}>From Date:</label>
              <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} required />

              <label style={{ color: '#fff' }}>To Date:</label>
              <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} required />

              <button type="submit" style={styles.button}>Submit Event</button>
            </form>
          </div>

          {/* Display the event list */}
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>Event List</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>S.NO</th>
                  <th style={styles.th}>Event Code</th>
                  <th style={styles.th}>Event Name</th>
                  <th style={styles.th}>Organizer</th>
                  <th style={styles.th}>Link</th>
                  <th style={styles.th}>Type</th>
                  <th style={styles.th}>Category</th>
                  <th style={styles.th}>From Date</th>
                  <th style={styles.th}>To Date</th>
                </tr>
              </thead>
              <tbody>
                {eventList.map((event, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{event.code}</td>
                    <td style={styles.td}>{event.name}</td>
                    <td style={styles.td}>{event.organizer}</td>
                    <td style={styles.td}>
                      <a href={`https://${event.link}`} style={styles.link} target="_blank" rel="noopener noreferrer">
                        {event.link}
                      </a>
                    </td>
                    <td style={styles.td}>{event.type}</td>
                    <td style={styles.td}>{event.category}</td>
                    <td style={styles.td}>{event.fromDate}</td>
                    <td style={styles.td}>{event.toDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventForm;
