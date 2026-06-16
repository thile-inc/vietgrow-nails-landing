import { neon } from '@neondatabase/serverless'

// Neon connection string. Provided automatically when you connect the Neon
// integration in v0 (Project Settings -> Integrations), or set it manually
// in Project Settings -> Environment Variables.
const connectionString =
  process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? ''

if (!connectionString) {
  // Surfaced at call time so the rest of the app still builds without the env var.
  console.warn(
    '[v0] DATABASE_URL is not set. Connect Neon or add DATABASE_URL to enable lead storage.',
  )
}

export const sql = neon(connectionString)
