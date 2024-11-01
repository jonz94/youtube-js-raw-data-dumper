import { defineCommand, runMain } from 'citty'
import { description, name, version } from '../package.json'
import { createInnertubeClient, getAccountName } from './utils'

const main = defineCommand({
  meta: {
    name,
    version,
    description,
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
    const youtube = await createInnertubeClient()

    if (args.login) {
      console.log('is logged in?', youtube.session.logged_in)

      // Fired when waiting for the user to authorize the sign in attempt.
      youtube.session.on('auth-pending', (data) => {
        console.log(`Go to ${data.verification_url} in your browser and enter code ${data.user_code} to authenticate.`)
        console.log({ data })
      })

      // Fired when authentication is successful.
      youtube.session.on('auth', ({ credentials }) => {
        // console.log('Sign in successful:', credentials)
      })

      // Fired when the access token expires.
      youtube.session.on('update-credentials', async ({ credentials }) => {
        // console.log('Credentials updated:', credentials)
        await youtube.session.oauth.cacheCredentials()
      })

      await youtube.session.signIn()

      // You may cache the session for later use
      // If you use this, the next call to signIn won't fire 'auth-pending' instead just 'auth'.
      await youtube.session.oauth.cacheCredentials()

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

runMain(main)
