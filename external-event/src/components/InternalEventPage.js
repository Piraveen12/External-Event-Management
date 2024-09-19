import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const InternalEventPage = () => {
    const navigate = useNavigate(); // Hook to navigate to different routes

    const containerStyle = {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#192841',
        flexDirection: 'column',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2e8bfa',
        padding: '15px',
        color: '#fff',
        cursor: 'pointer',
        width: '100%',
    };

    const headerTitleStyle = {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const sideNavStyle = {
        width: '20%',
        backgroundColor: '#283a59',
        padding: '20px',
        boxSizing: 'border-box',
    };

    const ulStyle = {
        listStyleType: 'none',
        padding: 0,
    };

    const liStyle = {
        color: 'white',
        marginBottom: '20px',
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: '#283a59',
    };

    const activeLiStyle = {
        ...liStyle,
        backgroundColor: '#00aaff',
    };

    const formContainerStyle = {
        width: '80%', // Adjust width as needed
        padding: '40px',
        boxSizing: 'border-box',
        backgroundColor: '#1c2b44',
        color: 'white',
    };

    const formGroupStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    };

    const labelStyle = {
        flex: 1,
    };

    const inputStyle = {
        flex: 2,
        padding: '8px',
        border: 'none',
        borderRadius: '4px',
    };

    const buttonStyle = {
        backgroundColor: '#00aaff',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    // Navigation handlers
    const goToExternalEventRegistration = () => {
        navigate('/external-event-registration'); // Navigate to ExternalEventRegistration page
    };

    const goToIRABookingForm = () => {
        navigate('/ira-booking'); // Navigate to IRABookingForm page
    };

    const goToIRAAssessmentForm = () => {
        navigate('/ira-assessment'); // Navigate to IRAAssessmentForm page
    };

    const goToEventPage = () => {
        navigate('/event-page'); // Navigate to EventPage
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={headerTitleStyle} onClick={goToExternalEventRegistration}>
                    External Event Registration
                </div>
                <div style={headerTitleStyle}>
                    Internal Review Assessment
                </div>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <div style={sideNavStyle}>
                    <ul style={ulStyle}>
                    <li style={liStyle} onClick={goToEventPage}>Home</li> {/* Added click handler */}
                        <li style={activeLiStyle}>IRA Form</li>
                        <li style={liStyle} onClick={goToIRABookingForm}>IRA Booking Form</li>
                        <li style={liStyle} onClick={goToIRAAssessmentForm}>IRA Assessment Valuation</li>
                       
                    </ul>
                </div>
                <div style={formContainerStyle}>
                    <form>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Name:</label>
                            <input type="text" name="name" style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Roll No:</label>
                            <input type="text" name="rollno" style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Special Lab:</label>
                            <input type="text" name="specialLab" style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Event Name:</label>
                            <input type="text" name="eventName" style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Event Category:</label>
                            <input type="text" name="eventCategory" style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>PS Skill:</label>
                            <input type="text" name="psSkill" style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Date and Venue:</label>
                            <input type="text" name="dateVenue" style={inputStyle} />
                        </div>
                        <button type="submit" style={buttonStyle}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InternalEventPage;
