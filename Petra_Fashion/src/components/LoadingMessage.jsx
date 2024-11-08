import React from 'react'

const LoadingMessage = () => {
    const messages = [
        "Hold tight! We're fetching the coolest products just for you! 🚀",
        "Good things come to those who wait... Just a moment while we gather the best deals! 🎉",
        "Loading your favorites... Get ready for a shopping spree! 🛍️",
        "What are you in the mood to shop for today? Let’s find out together! 🤔",
        "While you wait, why not grab a snack? 🍕 We’ll be right back with fabulous finds!",
    ];

    // Select a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return <div className="loading-message w-full h-[70vh] text-center flex items-center justify-center px-5 sm:px-0 sm:text-2xl">{randomMessage}</div>;
};


export default LoadingMessage
