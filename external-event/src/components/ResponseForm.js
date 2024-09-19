import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';    
const ResponseForm = () => {
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState('responseForm');

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
            cursor: 'pointer',
        },
        titleLeft: {
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        titleRight: {
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        formWrapper: {
            display: 'flex',
            flex: 1,
        },
        sidebar: {
            width: '20%',
            backgroundColor: '#283a59',
            padding: '20px',
            boxSizing: 'border-box',
        },
        sidebarItem: {
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            backgroundColor: '#283a59',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        activeSidebarItem: {
            backgroundColor: '#00aaff',
        },
        bottomButton: {
            marginTop: 'auto',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#283a59',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        tableContainer: {
            width: '80%',
            padding: '20px',
            boxSizing: 'border-box',
            backgroundColor: '#1c2b44',
            color: '#fff',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#1c2b44',
            color: '#fff',
        },
        tableHeader: {
            backgroundColor: '#00aaff',
            color: '#fff',
            padding: '10px',
            textAlign: 'left',
            borderBottom: '1px solid #ccc',
        },
        tableCell: {
            padding: '10px',
            borderBottom: '1px solid #ccc',
        },
    };

    const goToRequestForm = () => {
        navigate('/external-event-registration');
        setActiveForm('requestForm');
    };

    const goToResponseForm = () => {
        navigate('/response-form');
        setActiveForm('responseForm');
    };

    const goToEventPage = () => {
        navigate('/event-page');
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.header}>
                <div style={styles.titleLeft}>External Event Management</div>
                <div style={styles.titleRight}>Internal Review Assessment</div>
            </div>
            <div style={styles.formWrapper}>
                <div style={styles.sidebar}>
                <div
                        style={styles.bottomButton}
                        onClick={goToEventPage}
                    >
                        Home
                    </div>
                    <div
                        style={{
                            ...styles.sidebarItem,
                            ...(activeForm === 'requestForm' ? styles.activeSidebarItem : {}),
                        }}
                        onClick={goToRequestForm}
                    >
                        Request Form
                    </div>
                    <div
                        style={{
                            ...styles.sidebarItem,
                            ...(activeForm === 'responseForm' ? styles.activeSidebarItem : {}),
                        }}
                        onClick={goToResponseForm}
                    >
                        Response Form
                    </div>
                   
                </div>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.tableHeader}>S.No</th>
                                <th style={styles.tableHeader}>Name</th>
                                <th style={styles.tableHeader}>Roll No</th>
                                <th style={styles.tableHeader}>Event Name</th>
                                <th style={styles.tableHeader}>Event Organizer</th>
                                <th style={styles.tableHeader}>Approval Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={styles.tableCell}>1</td>
                                <td style={styles.tableCell}>John Doe</td>
                                <td style={styles.tableCell}>12345</td>
                                <td style={styles.tableCell}>Tech Talk</td>
                                <td style={styles.tableCell}>PSG Organization</td>
                                <td style={styles.tableCell}>Approved</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ResponseForm;
