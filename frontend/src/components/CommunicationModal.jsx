import React, { useState } from 'react';
import '../styles/communication.css';

const CommunicationModal = ({ closeModal }) => {
  const [patientId, setPatientId] = useState('');
  const [requestType, setRequestType] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ patientId, requestType, notes });
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Send Update/Request</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Patient ID:
            <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} required />
          </label>
          <label>
            Request Type:
            <select value={requestType} onChange={(e) => setRequestType(e.target.value)} required>
              <option value="">Select Type</option>
              <option value="Radiology">Radiology</option>
              <option value="Pathology">Pathology</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Notes:
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} required />
          </label>
          <button type="submit" className="btn-primary">Send</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default CommunicationModal;
