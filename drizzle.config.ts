import type { Config } from "drizzle-kit"
import "dotenv/config"

export default {
  schema: "./schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config
