// pages/notification.js
import React from 'react';

const NotificationPage = () => {
  const handleSendNotification = () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Notification Title', {
          body: 'This is a notification from your Next.js app!',
        });
      });
    }
  };

  return (
    <div>
      <h1>Notification Page</h1>
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
};

export default NotificationPage;
