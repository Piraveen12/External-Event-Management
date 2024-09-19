import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const ExternalEventRegistration = () => {
    const navigate = useNavigate(); 
    const [activeForm, setActiveForm] = useState('requestForm');  

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
        },
        titleRight: {
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        formContainer: {
            backgroundColor: '#1c2b44',
            padding: '20px',
            borderRadius: '10px',
            width: '40%',
            marginLeft: '10px',
            marginRight: 'auto',
        },
        label: {
            color: '#fff',
            display: 'block',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '8px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        submitButton: {
            backgroundColor: '#00aaff',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
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
            backgroundColor: '#00aaff', // Highlight color for active item
        },
        formWrapper: {
            display: 'flex',
            flex: 1,
        },
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('You have successfully submitted');
    };

    const goToResponseForm = () => {
        navigate('/response-form'); // Navigate to ResponseForm page
        setActiveForm('responseForm');
    };

    const goToRequestForm = () => {
        navigate('/external-event-registration'); // Navigate to ExternalEventRegistration page
        setActiveForm('requestForm');
    };

    const goToEventPage = () => {
        navigate('/event-page'); // Navigate to EventPage
        setActiveForm('eventPage');
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.header}>
                <div style={styles.titleLeft}>External Event Registration</div>
                <div style={styles.titleRight}>Internal Review Assessment</div>
            </div>
            <div style={styles.formWrapper}>
                <div style={styles.sidebar}>
                <div
                        style={{
                            ...styles.sidebarItem,
                            ...(activeForm === 'eventPage' ? styles.activeSidebarItem : {}),
                        }}
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
                <div style={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <label style={styles.label} htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" style={styles.input} />

                        <label style={styles.label} htmlFor="rollNo">Roll No:</label>
                        <input type="text" id="rollNo" name="rollNo" style={styles.input} />

                        <label style={styles.label} htmlFor="lab">Special Lab:</label>
                        <input type="text" id="lab" name="lab" style={styles.input} />

                        <label style={styles.label} htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" style={styles.input} />

                        <label style={styles.label} htmlFor="eventName">Event Name:</label>
                        <input type="text" id="eventName" name="eventName" style={styles.input} />

                        <label style={styles.label} htmlFor="organizer">Event Organizer:</label>
                        <input type="text" id="organizer" name="organizer" style={styles.input} />

                        <label style={styles.label} htmlFor="link">Event Link:</label>
                        <input type="text" id="link" name="link" style={styles.input} />

                        <label style={styles.label} htmlFor="venue">Event Venue:</label>
                        <input type="text" id="venue" name="venue" style={styles.input} />

                        <button type="submit" style={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ExternalEventRegistration;
