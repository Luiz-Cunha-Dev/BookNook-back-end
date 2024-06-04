# BookNook API 📚

BookNook API is a backend service that allows users to manage their movie lists. It provides various endpoints for user authentication, managing entertainment data (movies, books, etc.), setting personal goals, and more.

## Technologies Used

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Joi**: A schema description language and data validator for JavaScript objects.
- **Cors**: Cross-Origin Resource Sharing middleware for Express.js.
- **Dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.

## Routes Overview

### Authentication Routes

- **POST /auth/signup**: Register a new user.
- **POST /auth/signin**: Login an existing user.
- **DELETE /auth/logout**: Logout the current user.

### Entertainment Routes

- **GET /entertainment/categories**: Get all categories of entertainment.
- **GET /entertainment/type/:typeName**: Get entertainment by type.
- **GET /entertainment/id/:entertainmentId**: Get entertainment by ID.
- **GET /entertainment/all**: Get all entertainments.
- **GET /entertainment/quantity**: Get the quantity of entertainments.
- **POST /entertainment/create**: Create a new entertainment.
- **POST /entertainment/add/:entertainmentId**: Add an existing entertainment.
- **PUT /entertainment/update/:entertainmentsUsersId**: Update an entertainment.
- **DELETE /entertainment/delete/:entertainmentsUsersId**: Delete an entertainment.

### Goals Routes

- **GET /goals/all**: Get all goals.
- **POST /goals/create**: Create a new goal.

### Ranking Routes

- **GET /ranking/general**: Get general ranking information.

### User Routes

- **PUT /user/informations**: Update user information.
- **PUT /user/darkmode**: Toggle dark mode setting for user.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- PostgreSQL database

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Luiz-Cunha-Dev/projeto21-autoral-back-end.git
   ```

2. Install dependencies:

   ```bash
   cd projeto21-autoral-back-end
   npm install
   ```

3. Configure the environment variables by creating a .env file based on the .env.example file and provide the necessary values.

4. Set up your PostgreSQL database and run the necessary SQL queries to create the database schema.

5. Start the server:

   ```bash
   npm run dev
   ```

## Usage

### Routes

- POST /auth/signup: Creates a new user account.
- POST /auth/signin: Logs in an existing user.
- DELETE /auth/logout: Logs out the current user.
  
For more detailed information on routes, please refer to the codebase.

## Contributors

- Luiz Miguel da Cunha (@luiz-Cunha-Dev)

## Version History

- 1.0.0: Initial release
