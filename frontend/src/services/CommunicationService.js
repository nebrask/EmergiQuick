const subscribeAlerts = (callback) => {
    const interval = setInterval(() => {
        const mockAlerts = [
            { id: Date.now(), message: "New patient record requires attention!" }
        ];
        callback(mockAlerts);
    }, 10000);

    return () => clearInterval(interval);
};

export default {
    subscribeAlerts,
};