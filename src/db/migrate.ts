import { Pool } from "pg"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { drizzle } from "drizzle-orm/node-postgres"
import "dotenv/config"

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
})

async function main() {
  console.log("Running migrations...")
  await migrate(drizzle(client), {
    migrationsFolder: "drizzle",
  })
  console.log("Migrations complete!")
  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
