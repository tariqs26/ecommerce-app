import { Pool } from "pg"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./schema"
import "dotenv/config"

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const db = drizzle(client, { schema })
