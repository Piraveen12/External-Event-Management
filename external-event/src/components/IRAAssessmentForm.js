import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const IRAAssessmentForm = () => {
    const navigate = useNavigate(); // Hook to navigate to different routes
    const [formData, setFormData] = useState({
        name: '',
        rollno: '',
        eventName: '',
        qualified: '',
        remarks: '',
    });

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert(`IRA Assessment Form Submitted\n
            Name: ${formData.name}\n
            Roll No: ${formData.rollno}\n
            Event Name: ${formData.eventName}\n
            Qualified: ${formData.qualified}\n
            Remarks: ${formData.remarks}`);
    };

    // Navigation handlers
    const goToInternalEventPage = () => {
        navigate('/internal-event-page'); // Navigate to InternalEventPage
    };

    const goToIRABookingForm = () => {
        navigate('/ira-booking'); // Navigate to IRABookingForm
    };

    const goToIRAForm = () => {
        navigate('/internal-event-page'); // Navigate to IRA Form Page
    };

    const goToEventPage = () => {
        navigate('/event-page'); // Navigate to EventPage
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={headerTitleStyle} onClick={goToInternalEventPage}>
                    External Event Registration
                </div>
                <div style={headerTitleStyle}>
                    Internal Review Assessment
                </div>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <div style={sideNavStyle}>
                    <ul style={ulStyle}>
                    <li style={liStyle} onClick={goToEventPage}>Home</li> {/* New Event Page button */}
                        <li style={liStyle} onClick={goToIRAForm}>IRA Form</li>
                        <li style={liStyle} onClick={goToIRABookingForm}>IRA Booking Form</li>
                        <li style={activeLiStyle}>IRA Assessment</li>
                       
                    </ul>
                </div>
                <div style={formContainerStyle}>
                    <form onSubmit={handleSubmit}>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Roll No:</label>
                            <input
                                type="text"
                                name="rollno"
                                value={formData.rollno}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Event Name:</label>
                            <input
                                type="text"
                                name="eventName"
                                value={formData.eventName}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Qualified:</label>
                            <select
                                name="qualified"
                                value={formData.qualified}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            >
                                <option value="">Select qualification status</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Remarks:</label>
                            <textarea
                                name="remarks"
                                value={formData.remarks}
                                onChange={handleChange}
                                style={{ ...inputStyle, height: '100px' }}
                            />
                        </div>
                        <button type="submit" style={buttonStyle}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

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
    width: '80%',
    padding: '40px',
    boxSizing: 'border-box',
    backgroundColor: '#1c2b44',
    color: 'white',
};

const formGroupStyle = {
    display: 'flex',
    flexDirection: 'row', // Ensure horizontal alignment
    alignItems: 'center', // Align items vertically centered
    marginBottom: '15px',
};

const labelStyle = {
    flex: '0 0 30%', // Adjust label width
    marginRight: '10px', // Space between label and input
};

const inputStyle = {
    flex: '1', // Input takes remaining space
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
    marginTop: '20px',
};

export default IRAAssessmentForm;
