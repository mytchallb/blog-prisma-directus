# Using Prisma ORM and Directus CMS together on an existing database

The use case for this project is using the ORM tool Prisma and the CMS Directus installed in the same database, managing the database schema without deleting local data when external changes are made in a local environment.

See my [blog post]() for a guide.

## Running the app
* To start the database, run `docker compose up`
* To open the api, run `npm run start`
* To open directus, run `npx directus start` with user `admin@test.com` and password `GKEH@(*$91)`
* After changing the database, to update your schema run `npm run pullSchemaChanges` before `npx prisma migrate dev`
