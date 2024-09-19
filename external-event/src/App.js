import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './components/EventPage';
import Login from './components/Login';
import ExternalEventRegistration from './components/ExternalEventRegistration';
import ResponseForm from './components/ResponseForm';
import InternalEventPage from './components/InternalEventPage';
import IRABookingForm from './components/IRABookingForm'; // Import the IRABookingForm component
import IRAAssessmentForm from './components/IRAAssessmentForm'; // Import the IRAAssessmentForm component
import AddEventForm from './components/AddEventForm'; // Import the AddEventForm component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/event-page" element={<EventPage />} />
                <Route path="/external-event-registration" element={<ExternalEventRegistration />} />
                <Route path="/response-form" element={<ResponseForm />} />
                <Route path="/internal-event-page" element={<InternalEventPage />} />
                <Route path="/ira-booking" element={<IRABookingForm />} /> {/* Route for IRABookingForm */}
                <Route path="/ira-assessment" element={<IRAAssessmentForm />} /> {/* Route for IRAAssessmentForm */}
                <Route path="/add-event" element={<AddEventForm />} /> {/* Route for AddEventForm */}
            </Routes>
        </Router>
    );
}

export default App;
