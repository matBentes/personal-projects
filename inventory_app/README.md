# Inventory app

This is a inspiration project: [https://github.com/CodingGarden/inventory-app](https://https://github.com/CodingGarden/inventory-app.com)

Understanding about **Node**, **Knex**, **Docker**, **Postgres** and **Typescript**

## Consider this

If you will use your machine to use node enviroment,you need to comment this line in src/knexfile.ts

`connection: { // host: process.env.POSTGRES_HOST <- comment this line }`

Remove node service in `docker-compose.yml`

## How to install

1. Install the dependencies: `npm install`

2. Create a `.env` with your setup

3. Run the postgres db / adminer: `docker-compose up`

4. Migrate the database: `npm run migrate`

5. Adminer will be running at [http://localhost:9090](https://localhost:9090)

Otherwise, if you will use node container, need to run some commands in docker:

1. `docker-compose.yml`

2. `docker exec -it node_container sh`

3. `cd src/`

4. `npx knex migrate:latest`
