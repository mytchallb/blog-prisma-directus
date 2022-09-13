# Connect to database and clear migration history
psql -U postgres -h localhost -p 5432 -d prismadirectusdb -c 'truncate table _prisma_migrations;'

# Get latest external changes
npx prisma db pull
npx prisma generate

# Clear old migration folders and set up new one
rm -r prisma/migrations
mkdir -p prisma/migrations/init

# Manually apply migration
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init/migration.sql
npx prisma migrate resolve --applied init