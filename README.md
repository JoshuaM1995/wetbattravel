# Getting Started with Wet Bat Travel

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

Open http://localhost:4000/api/v1 to access the API root.

## Creating the Database
This application uses [PostgreSQL](https://www.postgresql.org/download/) for the database. Once it's downloaded and setup on your machine, you can create a database and user, then copy the **/api/.env.example** file to the **/api/.env** and enter the appropriate information.

```
DB_USERNAME=myuser
DB_PASSWORD=My$up3r$tr0ngPassw0rd
DB_DATABASE=mydatabasename
DB_HOST=localhost
DB_PORT=5432
```

## Creating Database Schema
In the **/api/** directory, you can run the following command to create the database schema:

### `npm run typeorm migration:run`
If you want to revert the migrations, you can run:

### `npm run typeorm migration:revert`

## Populating Database With Test Data
You can seed the database with fake data for testing purposes using the following command:

### `npm run seed:run`
