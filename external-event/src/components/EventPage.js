import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const EventPage = () => {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#192841',
      flexDirection: 'column',
       margin: 0, // Set margin to 0
      padding: 0,
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
    titleRight: {
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
    activeLi: {
      backgroundColor: '#00aaff',
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
    tableContainer: {
      backgroundColor: '#1c2b44',
      padding: '20px',
      borderRadius: '10px',
      border: 'none',
      width: '80%',
      marginLeft: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: 'none',
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

  // Sample events array
  const events = [
    {
      id: 1,
      code: 'EV001',
      name: 'React Workshop',
      organizer: 'Piraveen',
      link: 'www.reactworkshop.com',
      type: 'Workshop',
      category: 'Technology',
      fromDate: '2024-09-10',
      toDate: '2024-09-12',
    },
    {
      id: 2,
      code: 'EV002',
      name: 'Vue.js Conference',
      organizer: 'Raja',
      link: 'www.vueconf.com',
      type: 'Conference',
      category: 'Technology',
      fromDate: '2024-10-01',
      toDate: '2024-10-03',
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <div style={styles.titleLeft} onClick={() => navigate('/external-event-registration')}>
          External Event Registration
        </div>
        <div style={styles.titleRight} onClick={() => navigate('/internal-event-page')}>
          Internal Review Registration
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={styles.sidebar}>
          <ul style={styles.ul}>
            <li
              style={{ ...styles.li, ...styles.activeLi }}
              onClick={() => navigate('/external-event-registration')}
            >
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
        <div style={styles.tableContainer}>
          <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>Event List</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>S.NO</th>
                <th style={styles.th}>Event Code</th>
                <th style={styles.th}>Event Name</th>
                <th style={styles.th}>Event Organizer</th>
                <th style={styles.th}>Event Link</th>
                <th style={styles.th}>Event Type</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>From Date</th>
                <th style={styles.th}>To Date</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event.id}>
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
  );
};

export default EventPage;
