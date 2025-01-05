# SMS Gateway Demo

A React application demonstrating the integration of an SMS gateway for sending messages.

## Introduction

The SMS Gateway Demo is a React-based application that showcases how to integrate and utilize an SMS gateway service to send messages efficiently. This project serves as a reference for developers looking to implement similar functionality in their applications.

## Features

- Send SMS messages to specified numbers.
- Integration with a third-party SMS gateway API.
- User-friendly interface for message composition.
- Real-time status updates on message delivery.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NandhiniKarvendhan/SMS-gateway-demo.git
   cd SMS-gateway-demo
   ```

2. **Install dependencies:**

Ensure you have Node.js installed. Then, run:

```bash
npm install
```

3. **Set up environment variables:**

Create a .env file in the root directory and add your SMS gateway API credentials:

```bash
REACT_APP_API_BASE_URL=https://api.yourdomain.com
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

4. **Start the development server:**

```bash
npm start
```

The application will be available at http://localhost:3000.

5. **Build the project for production:**

```bash
npm run build
```
