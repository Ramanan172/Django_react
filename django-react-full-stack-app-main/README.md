# Django-React-Full-Stack-App

## Overview

This project is a web application built with Django for the backend and Vite+React for the frontend. It uses JWT tokens and Django REST framework for authentication. The application is deployed using Choreo.

## Features

- **Backend:** Django
- **Frontend:** Vite+React
- **Authentication:** JWT tokens with Django REST framework
- **Deployment:** Choreo

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Authentication](#authentication)
- [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [License](#license)

## Installation

### Prerequisites

- Python 3.x
- Node.js
- npm or yarn

### Clone the Repository

```bash
https://github.com/AjinthaSivam/django-react-full-stack-app.git
cd django-react-full-stack-app
```

## Backend Setup

### Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`
```

### Navigate to the backend directory
```bash
cd backend
```

### Install the required packages
```bash
pip install -r requirements.txt
```

### Apply migrations
```bash
python manage.py migrate
```

### Run the backend server
```bash
python manage.py runserver
```

### Access the backend API
- Open your browser and navigate to http://localhost:8000/api/ to access the API endpoints.

## Authentication

- This project uses JWT tokens for authentication. The Django REST framework handles the authentication mechanism.

### Registering a User
```bash
POST /api/register/
{
  "username": "yourusername",
  "password": "yourpassword"
}
```

### Obtaining Access and Refresh Tokens
```bash
POST /api/token/
{
  "username": "yourusername",
  "password": "yourpassword"
}
```

### Refreshing the Access Token
```bash
POST /api/token/refresh/
{
  "refresh": "your-refresh-token"
}
```

## Frontend Setup

### Navigate to the frontend directory
```bash
cd frontend
```

### Install the required packages
```bash
npm install   # or yarn install
```

### Run the frontend development server
```bash
npm run dev     # or yarn dev
```

## Running the Project
- Make sure both the backend and frontend servers are running.

## Deployment
- The project is deployed using Choreo.

## License
- This project is licensed under the MIT License. See the LICENSE file for details.


