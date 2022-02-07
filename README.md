# Installation

Run the following commands

 - Clone the application from https://github.com/carlosmarinho/node-express-sequelize-react-students
    ```
    git clone https://github.com/carlosmarinho/node-express-sequelize-react-students.git
    ```

When you finished the cloning process you be able to access 2 folders backend and frontend, that should be installed apart. You can follow this readme file or inside of each directory there's a readme with its instructions

## Installing the Backend

 - Get into the backend folder
    ```
    cd backend
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

## Tecnologies used in the backend

 - Node.js
 - Express
 - Mysql
 - Sequelize

## About the backend application

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

## Installation the Frontend

Run the following commands


 - Get into the discompacted backend folder
    ```
    cd backend
    ```

 - Run npm install to install the package dependancy
    ```
    npm install
    ```

 - Run npm run start to start the application
    ```
    npm run start
    ```

The last command (npm run servers) will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tecnologies used

 - React
 - Hooks
 - Redux
 - Redux Thunk
 - CSS in JS (Styled Components)
 - Jest
 - React Testing Library

## About the application

## Development
I started developing the application and decided to use redux, styled components and a bit of TDD with React Testing Library and Jest, but i stopped and finished the application with a lot of testing missing.

I decided to use all those thechnology, then you could have a good idea how can i develop a real application.

## Refactories (@todo)

### Templates, layouts and ContextApi

- Use ContextApi to update the current template.
- I created only one layouts with two columns but the application is designed to easily include others layouts, so the next layout update is to create another layout with only one column and the content.
- When change template, in the top menu, we have to change the colors from the whole site(left, right and content) according to the template colors.

### CSS styled components

- Take a look at the components to understand the need to separate the css from the component. We can decide if we are going to put all styled in separeted file or if we are going to separete only if there is a lot of style in the component.

### Test

- Increase the test coverage of the application

### Items (Student, Teacher - CRUD)

- Create the student pages and its components(CRUD) and link the top menu of students with it's components
- Create the teacher pages and its components(CRUD) and link the top menu of teachers with it's components

### Login

- We have the need to create a login for student and teachers, when the teachers login they have permission to change the current score in the right column

## Testing

  - I started developing the application using TDD, but as it wasn't required and i want to speed things up, i stoped and there is a necessity to do some more testing.
  - It will be created a folter test in the current dir of the component.
      - In this version we just have test on the folder /src/components/Students
  - To run the test run  `npm run test`
