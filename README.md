# Getting Started with Wet Bat Travel

## Setup
In the root directory and **/api/** install the modules:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

In the **/api/** directory, you can run:
### `npm start:dev`

This will start the development server which will restart when changes are made.

Open [http://localhost:4000/api](http://localhost:4000/api) to access the API root.

## Connecting to the Database
This application uses [PostgreSQL](https://www.postgresql.org/download/) for the database. Once it's downloaded and 
setup on your machine, you can create a database and user, then copy the **/api/.env.example** file to **/api/.env** 
and enter the appropriate information.

```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=localhost
TYPEORM_USERNAME=myuser
TYPEORM_PASSWORD=My$up3r$tr0ngPassw0rd
TYPEORM_DATABASE=mydatabasename
TYPEORM_PORT=5432
```

The environment variables for migrations, entities and seeds will already be set up so there's no need to modify 
those values.

## Creating the Database Schema
In the **/api/** directory, you can run the following command to create the database schema:

### `npm run typeorm migration:run`
If you want to revert the migrations, you can run:

### `npm run typeorm migration:revert`

## Populating Database With Test Data
You can seed the database with fake data for testing purposes using the following command:

### `npm run seed:run`

# Structural Decisions

For the backend API I used [ExpressJS](https://expressjs.com/) as it's the module I'm most familiar with, and it's the 
most used. Even though I've never used it before, I decided to try out the [TypeORM](https://typeorm.io/) module for 
connecting to the database. I usually use raw SQL or the **sequelize** module in projects, but I had heard about 
TypeORM before and wanted to try it since it integrates nicely with TypeScript.

For the Component UI Library I kept it simple and went with [Material UI](https://material-ui.com/) as it's what I'm 
familiar with. I've used other libraries in the past such as **react-bootstrap**, **semantic-ui** and **react-suite**.
