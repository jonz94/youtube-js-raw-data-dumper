import { defineCommand } from 'citty'
import { env } from '../env'
import { createInnertubeClient, getAccountName } from '../utils'

export default defineCommand({
  meta: {
    name: 'chat',
  },
  args: {
    vid: {
      description: 'YouTube Video Id',
      required: true,
      type: 'string',
    },
    login: {
      description: 'is login required or not',
      type: 'boolean',
      default: false,
    },
  },
  run: async ({ args }) => {
    const youtube = await (function createClient() {
      if (!args.login) {
        return createInnertubeClient()
      }

      if (!env.COOKIE) {
        throw new Error('Missing environment variables COOKIE')
      }

      return createInnertubeClient({
        cookie: env.COOKIE,
      })
    })()

    if (args.login) {
      console.log('is logged in?', youtube.session.logged_in)

      const accountName = await getAccountName(youtube)

      console.log('logged in as', accountName)
    }

    const videoId = args.vid

    const video = await youtube.getInfo(videoId)

    const livechat = video.getLiveChat()

    livechat.on('error', (error) => {
      console.info('Live chat error:', error)
    })

    livechat.on('end', () => {
      console.info('This live stream has ended.')
      livechat.stop()
    })

    livechat.start()
  },
})
