import { defineCommand, runMain } from 'citty'
import { description, name, version } from '../package.json'

const main = defineCommand({
  meta: {
    name,
    version,
    description,
  },
  subCommands: {
    chat: import('./commands/chat').then((mod) => mod.default),
    parser: import('./commands/parser').then((mod) => mod.default),
  },
})

runMain(main)
