# Installation

Run the following commands

 - Unzip the file optimhire.zip
    ```
    unzip -r optimhire.zip
    ```

 - Get into the discompacted backend folder
    ```
    cd optimhire/backend
    ```

 - First we need to npm install to have the sequelize-cli installed to letter run the migrations and the seed
    ```
    npm install
    ```
 
 - We still don't have our DB created, only in the first time we are going to create our container with docker with --build arg. We have to improve all those steps and put this in our todo section.
    ```
    docker-compose up --build
    ```
 - We need to stop the container press ctrl+c
    ```
    ctrl+c
    ```

 - After this we can create the tables from the database running the migrations
    ```
    docker-compose run --rm app npx sequelize-cli db:migrate
    ```

 - Lets populate the table with some fake data running the seeds
    ```
    docker-compose run --rm app npx sequelize-cli db:seed:all
    ```

 - Now we are supposed to run the service without the --build arg
    ```
    docker-compose up
    ```

The last command will run the container in the development environment.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

# Tecnologies used

 - Node.js
 - Express
 - Mysql
 - Sequelize

# About the application

## Development
I started developing the backend without any test and didn't have enougth time to them. 

I generate the migrations and seeds of the application that is located in the folder '/migrations' and '/seeders'. We also have the controllers, models, routes and services located in the '/app' directory.

 - /app/routes - Responsible to fetch the routes
 - /app/models - Models that is created with sequelize responsible to deal with the database.
 - /app/controller - When we call an api the router we call a controller that should handle any business logical and integrate with the services.
 - /app/services - It will be responsible only to call the models and deal with the database logic.

 ## API

### Students

  - GET http://localhost:5000/students - It will fetch a simple list of students and return a json list of students
  - GET http://localhost:5000/students/scores - It will fetch a list of students with all grades in every subject he has done.
  - GET http://localhost:5000/students/scores/current - It will fetch a list of students with only the current score 

### Scores

  - GET http://localhost:5000/scores - It will fetch all scores and return this json list
  - PUT http://localhost:5000/scores/:id, {Score}- Update the score according to the id and the data that is passed

## @TODO

### Test

  - As the urgency and the lack of time i couldn't do the tests yet, but we are supposed to test at least those 5 apis mentioned above.
  - Try to use TDD when creating the news API

### Creating the subject, teacher and student resources

  - We have to create the CRUD of Subject
  - We have to create the CRUD of Teacher
  - We have to create the CRUD of Student

### Create the enviroment for stage and production

  - In the Dockerfile we have only the .dev that is created from base, we should create the stage and production in the Dockerfile or we can create different dockerfile for each environment.

  - Should change the docker-compose.yaml to work with envs, so we can handle all necessary environments.