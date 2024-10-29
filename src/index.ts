import { defineCommand, runMain } from 'citty'
import { Innertube } from 'youtubei.js'
import { description, name, version } from '../package.json'

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
  },
  run: async ({ args }) => {
    const youtube = await Innertube.create()

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
