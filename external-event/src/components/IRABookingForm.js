import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const IRABookingForm = () => {
    const navigate = useNavigate(); // Hook to navigate to different routes
    const [selectedDate, setSelectedDate] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');

    // Define available time slots (example times, adjust as needed)
    const availableTimeSlots = [
        '09:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '01:00 PM - 02:00 PM',
        '02:00 PM - 03:00 PM',
        '03:00 PM - 04:00 PM',
    ];

    // Handle date selection
    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        // For demo purposes, we use a static list of time slots.
        // Replace this with an API call to fetch time slots for the selected date if needed
        setTimeSlots(availableTimeSlots);
    };

    // Handle time slot selection
    const handleSlotChange = (event) => {
        setSelectedSlot(event.target.value);
    };

    // Navigation handlers
    const goToInternalEventPage = () => {
        navigate('/internal-event-page'); // Navigate to Internal Event Page
    };

    const goToIRAAssessmentForm = () => {
        navigate('/ira-assessment'); // Navigate to IRA Assessment Form Page
    };

    const goToIRAForm = () => {
        navigate('/internal-event-page'); // Navigate to Internal Event Page
    };

    const goToEventPage = () => {
        navigate('/event-page'); // Navigate to Event Page
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`IRA Booking Form Submitted with Date: ${selectedDate} and Slot: ${selectedSlot}`);
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
                    <li style={liStyle} onClick={goToEventPage}>Home</li>
                        <li style={liStyle} onClick={goToIRAForm}>IRA Form</li>
                        <li style={activeLiStyle}>IRA Booking Form</li>
                        <li style={liStyle} onClick={goToIRAAssessmentForm}>IRA Assessment Valuation</li>
                        
                    </ul>
                </div>
                <div style={formContainerStyle}>
                    <form onSubmit={handleSubmit}>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Name:</label>
                            <input type="text" name="name" style={inputStyle} required />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Roll No:</label>
                            <input type="text" name="rollno" style={inputStyle} required />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Preferred Date:</label>
                            <input
                                type="date"
                                name="date"
                                style={inputStyle}
                                onChange={handleDateChange}
                                required
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Preferred Slot:</label>
                            <select name="slot" style={inputStyle} onChange={handleSlotChange} required>
                                <option value="">Select a time slot</option>
                                {timeSlots.map((slot, index) => (
                                    <option key={index} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </select>
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

export default IRABookingForm;
