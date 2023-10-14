import postgres from "postgres"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import { drizzle } from "drizzle-orm/postgres-js"

const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 })

async function main() {
  console.log("Running migrations...")
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "drizzle",
  })
  console.log("Migrations complete!")
  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
