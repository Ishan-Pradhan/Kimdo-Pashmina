# E-Commerce Website for Kimdo Pashmina

E-commerce website for viewing and purchasing shawls, mufflers, poncho and blankets integrated with khalti test API.

## Table of Contents

- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)


## Installation

1. Clone the repository:
   git clone https://github.com/Ishan-Pradhan/kimdo-pashmina-rework.git

2. Navigate into the project directory:
   cd yourrepository

3. Install dependencies for both the backend and frontend:
   - For the backend:
       cd backend npm install
    - For the frontend:
        cd frontend npm install

## Environment Setup

### Backend

Create a `.env` file in the `backend` directory and add the following variables:

PORT= 
MONGODB_URI=
CORS_ORIGIN=*
JWT_SECRET=
KHALTI_SECRET_KEY=

### Frontend

Create a `.env` file in the `frontend` directory and add the following variable:
REACT_APP_API=

#### Replace the placeholders with the appropriate values for your project.



## Running the Application

### Backend
1. Navigate to the `backend` directory:
   cd backend
2. Start the backend server:
   npm run dev

### Frontend
1. Navigate to the `frontend` directory:
   cd frontend
2. Start the backend server:
   npm run dev
