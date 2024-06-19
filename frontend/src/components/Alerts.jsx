import React, { useState, useEffect } from 'react';
import CommunicationService from '../services/CommunicationService';
import '../styles/alerts.css';

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const unsubscribe = CommunicationService.subscribeAlerts(newAlerts => {
            setAlerts(currentAlerts => [...currentAlerts, ...newAlerts]);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const dismissAlert = alertId => {
        setAlerts(currentAlerts => currentAlerts.filter(alert => alert.id !== alertId));
    };

    return (
        <div className="alerts-container">
            {alerts.map(alert => (
                <div key={alert.id} className="alert-container">
                    <p>{alert.message}</p>
                    <button className="alert-button" onClick={() => dismissAlert(alert.id)}>Dismiss</button>
                </div>
            ))}
        </div>
    );
};

export default Alerts;
