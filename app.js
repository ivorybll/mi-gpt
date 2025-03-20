import config from './.migpt.js'
import { MiGPT } from './dist/index.cjs'

async function main() {
  const client = MiGPT.create(config)
  console.log(client)
  await client.start()
}

main()
