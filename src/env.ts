import dotenv from 'dotenv'
import { join } from 'path'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COOKIE?: string
    }
  }
}

dotenv.config({ path: join(import.meta.dirname, '../.env') })

const { COOKIE } = process.env

const env = {
  COOKIE,
}

for (const [key, value] of Object.entries(env) as [keyof typeof env, (typeof env)[keyof typeof env]][]) {
  if (key === 'COOKIE') {
    continue
  }

  if (value === undefined) {
    throw new Error(`Missing environment variables ${key}`)
  }
}

export { env }
