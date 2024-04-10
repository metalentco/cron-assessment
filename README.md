<!-- Node.js API with MySQL Integration and Cron Job


Overview

Your task is to create a simple RESTful API using Node.js that interacts with a MySQL database. This API will manage a simple resource: users. Each user should have at least the following attributes: id, name, email, and created at. Along with this API, you will set up a cron job that performs a routine database maintenance task.

 

Requirements

 

Database Setup:

Design and create a MySQL database schema for the users table.

Include SQL scripts for setting up the database schema and seeding the table with initial data.

API Development:

Implement the following endpoints:

GET /users: Fetches a list of all users.

GET /users/:id: Fetches a single user by ID.

POST /users: Creates a new user.

PUT /users/:id: Updates an existing user by ID.

DELETE /users/:id: Deletes a user by ID.

Ensure your API validates input data and handles errors gracefully.

Cron Job:

Implement a cron job that runs at a specified interval (e.g., once a day at midnight). This job should perform a routine maintenance task, such as cleaning up records that are no longer needed or sending out a summary report of new users added during the day. The specifics of the task can be decided by you to best demonstrate your skills.

Documentation:

Provide a README file with clear instructions on how to set up and run your application, including setting up the MySQL database, starting the Node.js server, and any other necessary steps.

Document each API endpoint, including the expected request format and the response it will return.

 

Evaluation Criteria

 

Functionality: Your submission should meet all the outlined requirements and perform the tasks as expected.

Code Quality: Your code should be clean, well-organized, and easy to read. Use best practices for Node.js and MySQL interaction.

Error Handling: Your application should gracefully handle and respond to errors, such as database connection issues or invalid API requests.

Documentation: Your README and API documentation should be clear, concise, and sufficient for setting up and testing your application.

Submission

 

Submit your code via a GitHub repository link. Make sure the repository is public or provide access if it's private.

Include any necessary configuration files, SQL scripts for database setup, and the README in the repository.

This challenge is designed to assess the candidate's skills in key areas relevant to the job description, including database -->

DB: MySQL (host, user, password, database, port)

Run: Node index.js

Endpoints:

GET /users: Fetches a list of all users.
GET /users/:id: Fetches a single user by ID.
POST /users: Creates a new user.
PUT /users/:id: Updates an existing user by ID.
DELETE /users/:id: Deletes a user by ID.
