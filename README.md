# OAuth Project

## Project Overview
This project is a simple OAuth 2.0 authorization server built with TypeScript and Express. It supports the Authorization Code Grant flow, generating JWT access and refresh tokens.

## Features
- OAuth 2.0 Authorization Code Flow
- JWT Access Tokens
- Refresh Tokens
- Environment-based configuration

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/upfirst_oauth.git
cd upfirst_oauth
npm install
```

### Running the Project
#### Development Mode
```bash
npm run dev
```
This starts the server using **ts-node** and **nodemon** for hot-reloading.

#### Production Mode
```bash
npm run build
npm start
```
This compiles TypeScript to JavaScript in the `dist/` folder and starts the server.

## .env Configuration
The project relies on environment variables defined in a `.env` file located in the root directory. Below are the required variables:

```
PORT=8080
JWT_SECRET=your_super_secret_key
```

### Variable Descriptions
- **PORT**: The port on which the server will run (default: 8080).
- **JWT_SECRET**: Secret key for signing JWT tokens (should be a long, random string).

## API Endpoints

### Authorization Endpoint
- **URL**: `GET /api/oauth/authorize`
- **Query Params**: `response_type`, `client_id`, `redirect_uri`, `state`

### Token Endpoint
- **URL**: `POST /api/oauth/token`
- **Body Params**: `grant_type`, `code`, `client_id`, `redirect_uri`

## License
This project is licensed under the ISC License.

