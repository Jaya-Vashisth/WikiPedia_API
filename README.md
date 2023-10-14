# WikiPedia_API

This project is an API built with Node.js, TypeScript, Express, and MongoDB. It allows you to search Wikipedia and save results in a MongoDB database.

Getting Started:

Prerequisites:
- Node.js and npm installed.
- MongoDB installed and running locally or remotely.

Installation:
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Create a config file with MongoDB connection settings:
   DATABASE=your-mongodb-connection-url
   PORT=3000

Running the Application:
1. Start the application: `npm start`
2. Access the API at http://localhost:3000/api/wikipedia

API Endpoints:
- GET /api/wikipedia?query=<your-query>: Search Wikipedia by query and return to the user if it's not in the database then save the result and return to the user.

Database Schema:
The MongoDB database contains a collection named "WikipediaEntry"

