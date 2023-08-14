# REST API for User Registration and Authentication

This project represents a REST API designed to implement user registration and authentication mechanisms. The API provides a set of endpoints for registering new users, authenticating them, and managing their account information.

## Requirements

To run and use this API, you'll need:

1. **Node.js**: Ensure that you have the LTS version of Node.js installed on your computer. You can download it from the official Node.js website.

2. **npm (Node Package Manager)**: npm is usually installed along with Node.js. It's a tool that helps manage project dependencies.

3. **PostgreSQL**: This is the relational database we will use to store user information. Make sure you have PostgreSQL installed and running.

## Installation

1. Clone the repository on your computer:

```bash
git clone https://github.com/Wihctoh/RestAPI-Auth-Form.git
```

2. Navigate to the project directory:

```bash
cd server
```

3. Install the dependencies:

```bash
npm install
```

## Running

After completing the installation and setting up the environment variables, you can start the server using the following command:

```bash
npm start
```

## Endpoints

1. **POST /api/register: Register a new user. Expects a JSON object with `username` and `password` fields.

2. **POST /api/authorize: Authenticate a user. Expects a JSON object with `username` and `password` fields. Returns a JWT token upon successful authentication.
