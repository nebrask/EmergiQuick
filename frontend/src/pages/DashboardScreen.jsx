import React, { useState } from 'react';
import Alerts from '../components/Alerts';
import CommunicationModal from '../components/CommunicationModal';
import logo from '../assets/logo.png';
import '../styles/dashboard.css'

const DashboardScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <img src={logo} alt="EmergiQuick Logo" className="dashboard-logo" />
                <h1>Dashboard</h1>
            </header>
            <div className="dashboard-content">
                <button className="btn-primary" onClick={openModal}>
                    Communicate with Departments
                </button>
                {modalVisible && <CommunicationModal closeModal={closeModal} />}
                <Alerts />
            </div>
        </div>
    );
}

export default DashboardScreen;
