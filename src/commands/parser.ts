import { defineCommand } from 'citty'
import { convertARGB2rgbString } from '../utils'

export default defineCommand({
  meta: {
    description: 'parser',
  },
  args: {},
  run: async ({ args }) => {
    const result = convertARGB2rgbString(4294967295)

    console.log({ result })

    // const url =
    //   'https://www.youtube.com/redirect?event=live_chat&redir_token=QUFFLUhqbmp5Q093dGdDOGdrTFIxMXUzUU9TQ0IwVi1zd3xBQ3Jtc0ttYkd6TVhVWXQyWUlyNGtqOTJKMWRGM1loTkh3TkEtVTdfZVJwZ0p0YldXWFBDTzItT1Q5UGZud2JRTmRKU1ZiWWFrVl9LbmV6bVYzclpMVDJpY3JHeW5EeHZtWFJZdE03Z081N0ZCTUtPR2NkN0owaw&q=https%3A%2F%2Fportaly.cc%2Fdp.toys%2Fpages%2FKuromuOno'
    // const data = {
    //   clickTrackingParams: 'CAYQl98BIhMI7bKs8KG9iQMVWaPYBR2lDhra',
    //   toggleLiveChatTimestampsEndpoint: {
    //     hack: true,
    //   },
    // }

    // const data = {
    //   clickTrackingParams: 'CAcQ2sMKIhMI5tKTnNG7iQMVSL1WAR2mYxlH',
    //   commandMetadata: {
    //     webCommandMetadata: {
    //       ignoreNavigation: true,
    //     },
    //   },
    //   liveChatItemContextMenuEndpoint: {
    //     params:
    //       'Q2g0S0hBb2FRMHh4ZGpOYVdHMXNXV3RFUm1KSmRURm5RV1I0VldOVWNYY2FLU29uQ2hoVlF6SmFWMmRuYjI0eFRrOVVNbFJIWVZaVlRYcFpOMEVTQzBoRU9TMTFWRTgxZW05bklBRW9CRElhQ2hoVlEwVkZkMlZHZEY5c1VFNU9WR2wzVTFVeldpMHRhbWM0QWtnQlVDTSUzRA==',
    //   },
    // }

    // const a = new YTNodes.NavigationEndpoint(data)

    // console.log(a)
    // console.log(a.toURL())
    // console.log(a.getEndpoint(''))
  },
})
