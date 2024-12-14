import { defineCommand } from 'citty'
import { writeFileSync } from 'node:fs'
import { Parser, YTNodes } from 'youtubei.js'
import { createInnertubeClient } from '../utils'

function getRawData() {
  // return {
  //   aLiveChatBannerRenderer: {
  //     actionId: 'ChwKGkNLUzg2dWVseFlrREZSSXJyUVlkM093VURn',
  //     viewerIsCreator: false,
  //     targetId: 'live-chat-banner',
  //     onCollapseCommand: {
  //       clickTrackingParams: 'CAIQl98BIhMI7o6swbrFiQMVK6xWAR1Xwzp_',
  //       elementsCommand: {
  //         setEntityCommand: {
  //           identifier: 'EihDaHdLR2tOTFV6ZzJkV1ZzZUZsclJFWlNTWEp5VVZsa00wOTNWVVJuIIsBKAE%3D',
  //           entity: 'CkJFaWhEYUhkTFIydE9URlY2WnpKa1YxWnpaVVpzY2xKRldsTlRXRXA1VlZac2EwMHdPVE5XVlZKdUlJc0JLQUUlM0QQAQ==',
  //         },
  //       },
  //     },
  //     onExpandCommand: {
  //       clickTrackingParams: 'CAIQl98BIhMI7o6swbrFiQMVK6xWAR1Xwzp_',
  //       elementsCommand: {
  //         setEntityCommand: {
  //           identifier: 'EihDaHdLR2tOTFV6ZzJkV1ZzZUZsclJFWlNTWEp5VVZsa00wOTNWVVJuIIsBKAE%3D',
  //           entity: 'CkJFaWhEYUhkTFIydE9URlY2WnpKa1YxWnpaVVpzY2xKRldsTlRXRXA1VlZac2EwMHdPVE5XVlZKdUlJc0JLQUUlM0QQAA==',
  //         },
  //       },
  //     },
  //     isStackable: true,
  //     bannerType: 'LIVE_CHAT_BANNER_TYPE_QNA_START',
  //   },
  // }

  return {
    liveChatTickerPaidMessageItemRenderer: {
      id: 'ChwKGkNJYnV3cG1NenZvQ0ZWM0R3Z1FkN1owQ25B',
      amountTextColor: 3758096383,
      startBackgroundColor: 4294278144,
      endBackgroundColor: 4293284096,
      authorPhoto: {
        thumbnails: [
          {
            url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s32-c-k-c0x00ffffff-no-rj',
            width: 32,
            height: 32,
          },
          {
            url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s64-c-k-c0x00ffffff-no-rj',
            width: 64,
            height: 64,
          },
        ],
        accessibility: {
          accessibilityData: {
            label: '土司',
          },
        },
      },
      durationSec: 600,
      showItemEndpoint: {
        clickTrackingParams: 'CBkQsMgEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
        commandMetadata: {
          webCommandMetadata: {
            ignoreNavigation: true,
          },
        },
        showLiveChatItemEndpoint: {
          renderer: {
            liveChatPaidMessageRenderer: {
              id: 'ChwKGkNJYnV3cG1NenZvQ0ZWM0R3Z1FkN1owQ25B',
              timestampUsec: '1665144925240509',
              authorName: {
                simpleText: '土司',
              },
              authorPhoto: {
                thumbnails: [
                  {
                    url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s32-c-k-c0x00ffffff-no-rj',
                    width: 32,
                    height: 32,
                  },
                  {
                    url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s64-c-k-c0x00ffffff-no-rj',
                    width: 64,
                    height: 64,
                  },
                ],
              },
              purchaseAmountText: {
                simpleText: 'NT$300.00',
              },
              headerBackgroundColor: 4293284096,
              headerTextColor: 3758096383,
              bodyBackgroundColor: 4294278144,
              bodyTextColor: 3758096383,
              authorExternalChannelId: 'UCkiuqhOYPAfJ4bqz3K2s3ag',
              authorNameTextColor: 3019898879,
              contextMenuEndpoint: {
                clickTrackingParams: 'CBsQ7rsEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
                commandMetadata: {
                  webCommandMetadata: {
                    ignoreNavigation: true,
                  },
                },
                liveChatItemContextMenuEndpoint: {
                  params:
                    'Q2g0S0hBb2FRMGxpZFhkd2JVMTZkbTlEUmxZelJIZG5VV1EzV2pCRGJrRWFLU29uQ2hoVlF6SmFWMmRuYjI0eFRrOVVNbFJIWVZaVlRYcFpOMEVTQzBSZlZUQjJWRXB5ZGw5VklBRW9CRElhQ2hoVlEydHBkWEZvVDFsUVFXWktOR0p4ZWpOTE1uTXpZV2M0QWtnQlVBOCUzRA==',
                },
              },
              timestampColor: 2164260863,
              contextMenuAccessibility: {
                accessibilityData: {
                  label: 'Chat actions',
                },
              },
              timestampText: {
                simpleText: '15:28',
              },
              trackingParams: 'CBsQ7rsEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
              headerOverlayImage: {
                thumbnails: [
                  {
                    url: '//youtube.com/img/pdg/novelty/Novelty_2x.png',
                    width: 190,
                    height: 120,
                  },
                ],
              },
              authorBadges: [
                {
                  liveChatAuthorBadgeRenderer: {
                    icon: {
                      iconType: 'MODERATOR',
                    },
                    tooltip: 'Moderator',
                    accessibility: {
                      accessibilityData: {
                        label: 'Moderator',
                      },
                    },
                  },
                },
                {
                  liveChatAuthorBadgeRenderer: {
                    customThumbnail: {
                      thumbnails: [
                        {
                          url: 'https://yt3.ggpht.com/X9RkCDxc0D7OtVbbJAxZGXbV4-PZw0cg2h_Vg1C6ahIVaYrcTubP1WF3313-LjKz9PRHgY_fVw=s16-c-k',
                          width: 16,
                          height: 16,
                        },
                        {
                          url: 'https://yt3.ggpht.com/X9RkCDxc0D7OtVbbJAxZGXbV4-PZw0cg2h_Vg1C6ahIVaYrcTubP1WF3313-LjKz9PRHgY_fVw=s32-c-k',
                          width: 32,
                          height: 32,
                        },
                      ],
                    },
                    tooltip: 'Member (6 months)',
                    accessibility: {
                      accessibilityData: {
                        label: 'Member (6 months)',
                      },
                    },
                  },
                },
              ],
              textInputBackgroundColor: 805306368,
              creatorHeartButton: {
                creatorHeartViewModel: {
                  creatorThumbnail: {
                    sources: [
                      {
                        url: 'https://yt3.ggpht.com/lQaEUeJlLtgioCU0npPsaYOLzg2idrzG0XY_jn-fjPOySnv4nN94U0rCTt5shavBR9brK-e6Tg=s48-c-k-c0x00ffffff-no-rj',
                      },
                    ],
                  },
                  heartedIcon: {
                    sources: [
                      {
                        clientResource: {
                          imageName: 'full_heart-filled',
                        },
                      },
                    ],
                  },
                  unheartedIcon: {
                    sources: [
                      {
                        clientResource: {
                          imageName: 'full_heart',
                        },
                      },
                    ],
                    processor: {
                      borderImageProcessor: {
                        imageTint: {
                          color: 3758096383,
                        },
                      },
                    },
                  },
                  heartedHoverText: '❤ by 庫洛姆•Kuromu',
                  heartedAccessibilityLabel: 'Remove heart',
                  unheartedAccessibilityLabel: 'Heart',
                  engagementStateKey:
                    'EktsaXZlLWNoYXQtbWVzc2FnZS1lbmdhZ2VtZW50LXN0YXRlLUNod0tHa05KWW5WM2NHMU5lblp2UTBaV00wUjNaMUZrTjFvd1EyNUIgLCgB',
                  gradient: {
                    sources: [
                      {
                        url: '//youtube.com/img/pdg/gradient.png',
                      },
                    ],
                    processor: {
                      borderImageProcessor: {
                        imageTint: {
                          color: 4294278144,
                        },
                      },
                    },
                  },
                },
              },
              isV2Style: true,
              pdgPurchasedNoveltyLoggingDirectives: {
                loggingDirectives: {
                  trackingParams: 'CB0Q7s4LIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
                  visibility: {
                    types: '12',
                  },
                },
              },
              replyButton: {
                pdgReplyButtonViewModel: {
                  replyButton: {
                    buttonViewModel: {
                      iconName: 'CHAT',
                      onTap: {
                        innertubeCommand: {
                          clickTrackingParams: 'CBwQ68ENIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
                          showEngagementPanelEndpoint: {
                            identifier: {
                              surface: 'ENGAGEMENT_PANEL_SURFACE_LIVE_CHAT',
                              tag: 'PAreply_thread',
                            },
                            globalConfiguration: {
                              params:
                                'ggm2AQojVWd6Wk4tUkkxeVhEd1dra1JnUjRBYUFCRHFnQnF0U1ZoUUkSVgopKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UQARgEIAE6I1VnelpOLVJJMXlYRHdXa2tSZ1I0QWFBQkRxZ0JxdFNWaFFJGgggALABAPgBACIpKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UoATAB',
                            },
                            engagementPanelPresentationConfigs: {
                              engagementPanelPopupPresentationConfig: {
                                popupType: 'PANEL_POPUP_TYPE_DIALOG',
                              },
                            },
                          },
                        },
                      },
                      accessibilityText: 'Reply',
                      style: 'BUTTON_VIEW_MODEL_STYLE_CUSTOM',
                      trackingParams: 'CBwQ68ENIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
                      type: 'BUTTON_VIEW_MODEL_TYPE_TONAL',
                      buttonSize: 'BUTTON_VIEW_MODEL_SIZE_XSMALL',
                      customBackgroundColor: 452984831,
                      customFontColor: 3758096383,
                      loggingDirectives: {
                        trackingParams: 'CBwQ68ENIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
                        visibility: {
                          types: '12',
                        },
                        enableDisplayloggerExperiment: true,
                      },
                    },
                  },
                  replyCountEntityKey: 'EiNVZ3paTi1SSTF5WER3V2trUmdSNEFhQUJEcWdCcXRTVmhRSSDxAygB',
                  replyCountPlaceholder: {
                    content: 'Reply',
                    styleRuns: [
                      {
                        startIndex: 0,
                        length: 5,
                      },
                    ],
                  },
                },
              },
            },
          },
          trackingParams: 'CBoQjtEGIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
        },
      },
      authorExternalChannelId: 'UCkiuqhOYPAfJ4bqz3K2s3ag',
      fullDurationSec: 600,
      trackingParams: 'CBkQsMgEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
      authorUsername: {
        simpleText: '土司',
      },
      animationOrigin: 'ANIMATION_ORIGIN_PDG_TICKER_LIKE',
      openEngagementPanelCommand: {
        clickTrackingParams: 'CBkQsMgEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
        showEngagementPanelEndpoint: {
          identifier: {
            surface: 'ENGAGEMENT_PANEL_SURFACE_LIVE_CHAT',
            tag: 'PAreply_thread',
          },
          globalConfiguration: {
            params:
              'ggm2AQojVWd6Wk4tUkkxeVhEd1dra1JnUjRBYUFCRHFnQnF0U1ZoUUkSVgopKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UQARgEIAE6I1VnelpOLVJJMXlYRHdXa2tSZ1I0QWFBQkRxZ0JxdFNWaFFJGgggALABAPgBACIpKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UoATAB',
          },
          engagementPanelPresentationConfigs: {
            engagementPanelPopupPresentationConfig: {
              popupType: 'PANEL_POPUP_TYPE_DIALOG',
            },
          },
        },
      },
    },
  }

  return {
    liveChatRestrictedParticipationRenderer1: {
      message: {
        runs: [
          {
            text: 'Subscribers-only mode was enabled',
          },
        ],
      },
      buttons: [
        {
          buttonRenderer: {
            icon: {
              iconType: 'INFO',
            },
            trackingParams: 'CAQQ8FsYUiITCImQ2dOopYoDFVNZ9QUdILYWHQ==',
            accessibilityData: {
              accessibilityData: {
                label: 'Subscribers-only mode was enabled during this time.',
              },
            },
            command: {
              clickTrackingParams: 'CAQQ8FsYUiITCImQ2dOopYoDFVNZ9QUdILYWHQ==',
              commandMetadata: {
                webCommandMetadata: {
                  sendPost: true,
                },
              },
              signalServiceEndpoint: {
                signal: 'CLIENT_SIGNAL',
                actions: [
                  {
                    clickTrackingParams: 'CAQQ8FsYUiITCImQ2dOopYoDFVNZ9QUdILYWHQ==',
                    liveChatAddToToastAction: {
                      item: {
                        notificationTextRenderer: {
                          successResponseText: {
                            simpleText: 'Subscribers-only mode was enabled during this time.',
                          },
                          trackingParams: 'CAUQyscDIhMIiZDZ06iligMVU1n1BR0gthYd',
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      icon: {
        iconType: 'TAB_SUBSCRIPTIONS',
      },
    },
  }

  return {
    liveChatBannerRenderer: {
      header: {
        liveChatBannerHeaderRenderer: {
          icon: {
            iconType: 'KEEP',
          },
          text: {
            runs: [
              {
                text: 'Pinned by ',
              },
              {
                text: '庫洛姆•Kuromu',
              },
            ],
          },
          contextMenuButton: {
            buttonRenderer: {
              icon: {
                iconType: 'MORE_VERT',
              },
              accessibility: {
                label: 'Chat actions',
              },
              trackingParams: 'CBEQ8FsiEwiLifXn0LuJAxXpyEwCHSpgOac=',
              accessibilityData: {
                accessibilityData: {
                  label: 'Chat actions',
                },
              },
              command: {
                clickTrackingParams: 'CBEQ8FsiEwiLifXn0LuJAxXpyEwCHSpgOac=',
                commandMetadata: {
                  webCommandMetadata: {
                    ignoreNavigation: true,
                  },
                },
                liveChatItemContextMenuEndpoint: {
                  params:
                    'Q2g0S0hBb2FRMGxZU25BNVprdHNXV3RFUm1GaVdYZG5VV1JhZERodlUwRWFLU29uQ2hoVlF6SmFWMmRuYjI0eFRrOVVNbFJIWVZaVlRYcFpOMEVTQzBoRU9TMTFWRTgxZW05bklBRW9CRElhQ2hoVlF6SmFWMmRuYjI0eFRrOVVNbFJIWVZaVlRYcFpOMEU0QVVnQlVBRSUzRA==',
                },
              },
            },
          },
        },
      },
      contents: {
        liveChatTextMessageRenderer: {
          message: {
            runs: [
              {
                text: 'Chat summary',
                bold: true,
                italics: true,
                strikethrough: true,
                fontFace: 'FONT_FACE_ROBOTO_MEDIUM',
              },
              {
                text: '\n',
              },
              {
                text: 'Auto-generated experiment • Quality may vary',
                deemphasize: true,
                fontFace: 'FONT_FACE_ROBOTO_MEDIUM',
              },
              {
                text: '\n',
              },
              {
                text: 'Viewers in the chat are discussing their favorite Final Fantasy games, ranging from Final Fantasy X to Final Fantasy XIII. They are also requesting songs from various artists, including Keshi, Chapel Roan, Sanae, and others.',
                fontFace: 'FONT_FACE_ROBOTO_REGULAR',
              },
            ],
          },
          authorName: {
            simpleText: '庫洛姆•Kuromu',
          },
          authorPhoto: {
            thumbnails: [
              {
                url: 'https://yt4.ggpht.com/lQaEUeJlLtgioCU0npPsaYOLzg2idrzG0XY_jn-fjPOySnv4nN94U0rCTt5shavBR9brK-e6Tg=s32-c-k-c0x00ffffff-no-rj',
                width: 32,
                height: 32,
              },
              {
                url: 'https://yt4.ggpht.com/lQaEUeJlLtgioCU0npPsaYOLzg2idrzG0XY_jn-fjPOySnv4nN94U0rCTt5shavBR9brK-e6Tg=s64-c-k-c0x00ffffff-no-rj',
                width: 64,
                height: 64,
              },
            ],
          },
          id: 'ChwKGkNJWEpwOWZLbFlrREZhYll3Z1FkWnQ4b1NB',
          timestampUsec: '1729173880695633',
          authorBadges: [
            {
              liveChatAuthorBadgeRenderer: {
                icon: {
                  iconType: 'OWNER',
                },
                tooltip: 'Owner',
                accessibility: {
                  accessibilityData: {
                    label: 'Owner',
                  },
                },
              },
            },
          ],
          authorExternalChannelId: 'UC2ZWggon1NOT2TGaVUMzY7A',
          timestampText: {
            simpleText: '2:23',
          },
          trackingParams: 'CAEQl98BIhMIi4n159C7iQMV6chMAh0qYDmn',
        },
      },
      actionId: 'ChwKGkNQM2xxTm5LbFlrREZVYkx3Z1FkUTk4SjJR',
      viewerIsCreator: false,
      targetId: 'live-chat-banner',
      isStackable: false,
      backgroundType: 'LIVE_CHAT_BANNER_BACKGROUND_TYPE_STATIC',
      bannerProperties: {
        autoCollapseDelay: {
          seconds: '7',
        },
      },
      bannerType: 'LIVE_CHAT_BANNER_TYPE_PINNED_MESSAGE',
    },
  }

  // const rawData = {
  //   newLiveChatTickerPaidMessageItemRenderer: {
  //     id: 'ChwKGkNJYnV3cG1NenZvQ0ZWM0R3Z1FkN1owQ25B',
  //     amountTextColor: 3758096383,
  //     startBackgroundColor: 4294278144,
  //     endBackgroundColor: 4293284096,
  //     authorPhoto: {
  //       thumbnails: [
  //         {
  //           url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s32-c-k-c0x00ffffff-no-rj',
  //           width: 32,
  //           height: 32,
  //         },
  //         {
  //           url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s64-c-k-c0x00ffffff-no-rj',
  //           width: 64,
  //           height: 64,
  //         },
  //       ],
  //       accessibility: {
  //         accessibilityData: {
  //           label: '土司',
  //         },
  //       },
  //     },
  //     durationSec: 600,
  //     showItemEndpoint: {
  //       clickTrackingParams: 'CBkQsMgEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //       commandMetadata: {
  //         webCommandMetadata: {
  //           ignoreNavigation: true,
  //         },
  //       },
  //       showLiveChatItemEndpoint: {
  //         renderer: {
  //           liveChatPaidMessageRenderer: {
  //             id: 'ChwKGkNJYnV3cG1NenZvQ0ZWM0R3Z1FkN1owQ25B',
  //             timestampUsec: '1665144925240509',
  //             authorName: {
  //               simpleText: '土司',
  //             },
  //             authorPhoto: {
  //               thumbnails: [
  //                 {
  //                   url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s32-c-k-c0x00ffffff-no-rj',
  //                   width: 32,
  //                   height: 32,
  //                 },
  //                 {
  //                   url: 'https://yt4.ggpht.com/ytc/AIdro_mZssKAtVURk_MqlGktbHRjbPGol9BEgE-bEzkUxvS2J0o=s64-c-k-c0x00ffffff-no-rj',
  //                   width: 64,
  //                   height: 64,
  //                 },
  //               ],
  //             },
  //             purchaseAmountText: {
  //               simpleText: 'NT$300.00',
  //             },
  //             headerBackgroundColor: 4293284096,
  //             headerTextColor: 3758096383,
  //             bodyBackgroundColor: 4294278144,
  //             bodyTextColor: 3758096383,
  //             authorExternalChannelId: 'UCkiuqhOYPAfJ4bqz3K2s3ag',
  //             authorNameTextColor: 3019898879,
  //             contextMenuEndpoint: {
  //               clickTrackingParams: 'CBsQ7rsEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //               commandMetadata: {
  //                 webCommandMetadata: {
  //                   ignoreNavigation: true,
  //                 },
  //               },
  //               liveChatItemContextMenuEndpoint: {
  //                 params:
  //                   'Q2g0S0hBb2FRMGxpZFhkd2JVMTZkbTlEUmxZelJIZG5VV1EzV2pCRGJrRWFLU29uQ2hoVlF6SmFWMmRuYjI0eFRrOVVNbFJIWVZaVlRYcFpOMEVTQzBSZlZUQjJWRXB5ZGw5VklBRW9CRElhQ2hoVlEydHBkWEZvVDFsUVFXWktOR0p4ZWpOTE1uTXpZV2M0QWtnQlVBOCUzRA==',
  //               },
  //             },
  //             timestampColor: 2164260863,
  //             contextMenuAccessibility: {
  //               accessibilityData: {
  //                 label: 'Chat actions',
  //               },
  //             },
  //             timestampText: {
  //               simpleText: '15:28',
  //             },
  //             trackingParams: 'CBsQ7rsEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //             headerOverlayImage: {
  //               thumbnails: [
  //                 {
  //                   url: '//youtube.com/img/pdg/novelty/Novelty_2x.png',
  //                   width: 190,
  //                   height: 120,
  //                 },
  //               ],
  //             },
  //             authorBadges: [
  //               {
  //                 liveChatAuthorBadgeRenderer: {
  //                   icon: {
  //                     iconType: 'MODERATOR',
  //                   },
  //                   tooltip: 'Moderator',
  //                   accessibility: {
  //                     accessibilityData: {
  //                       label: 'Moderator',
  //                     },
  //                   },
  //                 },
  //               },
  //               {
  //                 liveChatAuthorBadgeRenderer: {
  //                   customThumbnail: {
  //                     thumbnails: [
  //                       {
  //                         url: 'https://yt3.ggpht.com/X9RkCDxc0D7OtVbbJAxZGXbV4-PZw0cg2h_Vg1C6ahIVaYrcTubP1WF3313-LjKz9PRHgY_fVw=s16-c-k',
  //                         width: 16,
  //                         height: 16,
  //                       },
  //                       {
  //                         url: 'https://yt3.ggpht.com/X9RkCDxc0D7OtVbbJAxZGXbV4-PZw0cg2h_Vg1C6ahIVaYrcTubP1WF3313-LjKz9PRHgY_fVw=s32-c-k',
  //                         width: 32,
  //                         height: 32,
  //                       },
  //                     ],
  //                   },
  //                   tooltip: 'Member (6 months)',
  //                   accessibility: {
  //                     accessibilityData: {
  //                       label: 'Member (6 months)',
  //                     },
  //                   },
  //                 },
  //               },
  //             ],
  //             textInputBackgroundColor: 805306368,
  //             creatorHeartButton: {
  //               creatorHeartViewModel: {
  //                 creatorThumbnail: {
  //                   sources: [
  //                     {
  //                       url: 'https://yt3.ggpht.com/lQaEUeJlLtgioCU0npPsaYOLzg2idrzG0XY_jn-fjPOySnv4nN94U0rCTt5shavBR9brK-e6Tg=s48-c-k-c0x00ffffff-no-rj',
  //                     },
  //                   ],
  //                 },
  //                 heartedIcon: {
  //                   sources: [
  //                     {
  //                       clientResource: {
  //                         imageName: 'full_heart-filled',
  //                       },
  //                     },
  //                   ],
  //                 },
  //                 unheartedIcon: {
  //                   sources: [
  //                     {
  //                       clientResource: {
  //                         imageName: 'full_heart',
  //                       },
  //                     },
  //                   ],
  //                   processor: {
  //                     borderImageProcessor: {
  //                       imageTint: {
  //                         color: 3758096383,
  //                       },
  //                     },
  //                   },
  //                 },
  //                 heartedHoverText: '❤ by 庫洛姆•Kuromu',
  //                 heartedAccessibilityLabel: 'Remove heart',
  //                 unheartedAccessibilityLabel: 'Heart',
  //                 engagementStateKey:
  //                   'EktsaXZlLWNoYXQtbWVzc2FnZS1lbmdhZ2VtZW50LXN0YXRlLUNod0tHa05KWW5WM2NHMU5lblp2UTBaV00wUjNaMUZrTjFvd1EyNUIgLCgB',
  //                 gradient: {
  //                   sources: [
  //                     {
  //                       url: '//youtube.com/img/pdg/gradient.png',
  //                     },
  //                   ],
  //                   processor: {
  //                     borderImageProcessor: {
  //                       imageTint: {
  //                         color: 4294278144,
  //                       },
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             isV2Style: true,
  //             pdgPurchasedNoveltyLoggingDirectives: {
  //               loggingDirectives: {
  //                 trackingParams: 'CB0Q7s4LIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //                 visibility: {
  //                   types: '12',
  //                 },
  //               },
  //             },
  //             replyButton: {
  //               pdgReplyButtonViewModel: {
  //                 replyButton: {
  //                   buttonViewModel: {
  //                     iconName: 'CHAT',
  //                     onTap: {
  //                       innertubeCommand: {
  //                         clickTrackingParams: 'CBwQ68ENIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //                         showEngagementPanelEndpoint: {
  //                           identifier: {
  //                             surface: 'ENGAGEMENT_PANEL_SURFACE_LIVE_CHAT',
  //                             tag: 'PAreply_thread',
  //                           },
  //                           globalConfiguration: {
  //                             params:
  //                               'ggm2AQojVWd6Wk4tUkkxeVhEd1dra1JnUjRBYUFCRHFnQnF0U1ZoUUkSVgopKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UQARgEIAE6I1VnelpOLVJJMXlYRHdXa2tSZ1I0QWFBQkRxZ0JxdFNWaFFJGgggALABAPgBACIpKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UoATAB',
  //                           },
  //                           engagementPanelPresentationConfigs: {
  //                             engagementPanelPopupPresentationConfig: {
  //                               popupType: 'PANEL_POPUP_TYPE_DIALOG',
  //                             },
  //                           },
  //                         },
  //                       },
  //                     },
  //                     accessibilityText: 'Reply',
  //                     style: 'BUTTON_VIEW_MODEL_STYLE_CUSTOM',
  //                     trackingParams: 'CBwQ68ENIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //                     type: 'BUTTON_VIEW_MODEL_TYPE_TONAL',
  //                     buttonSize: 'BUTTON_VIEW_MODEL_SIZE_XSMALL',
  //                     customBackgroundColor: 452984831,
  //                     customFontColor: 3758096383,
  //                     loggingDirectives: {
  //                       trackingParams: 'CBwQ68ENIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //                       visibility: {
  //                         types: '12',
  //                       },
  //                       enableDisplayloggerExperiment: true,
  //                     },
  //                   },
  //                 },
  //                 replyCountEntityKey: 'EiNVZ3paTi1SSTF5WER3V2trUmdSNEFhQUJEcWdCcXRTVmhRSSDxAygB',
  //                 replyCountPlaceholder: {
  //                   content: 'Reply',
  //                   styleRuns: [
  //                     {
  //                       startIndex: 0,
  //                       length: 5,
  //                     },
  //                   ],
  //                 },
  //               },
  //             },
  //           },
  //         },
  //         trackingParams: 'CBoQjtEGIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //       },
  //     },
  //     authorExternalChannelId: 'UCkiuqhOYPAfJ4bqz3K2s3ag',
  //     fullDurationSec: 600,
  //     trackingParams: 'CBkQsMgEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //     authorUsername: {
  //       simpleText: '土司',
  //     },
  //     animationOrigin: 'ANIMATION_ORIGIN_PDG_TICKER_LIKE',
  //     openEngagementPanelCommand: {
  //       clickTrackingParams: 'CBkQsMgEIhMI5Za9w5njiQMVn9w0Bx2EWwZz',
  //       showEngagementPanelEndpoint: {
  //         identifier: {
  //           surface: 'ENGAGEMENT_PANEL_SURFACE_LIVE_CHAT',
  //           tag: 'PAreply_thread',
  //         },
  //         globalConfiguration: {
  //           params:
  //             'ggm2AQojVWd6Wk4tUkkxeVhEd1dra1JnUjRBYUFCRHFnQnF0U1ZoUUkSVgopKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UQARgEIAE6I1VnelpOLVJJMXlYRHdXa2tSZ1I0QWFBQkRxZ0JxdFNWaFFJGgggALABAPgBACIpKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UoATAB',
  //         },
  //         engagementPanelPresentationConfigs: {
  //           engagementPanelPopupPresentationConfig: {
  //             popupType: 'PANEL_POPUP_TYPE_DIALOG',
  //           },
  //         },
  //       },
  //     },
  //   },
  // }

  // const rawData = {
  //   newLiveChatPaidMessageRenderer: {
  //     id: 'ChwKGkNKMjByTlNKenZvQ0ZmUVo1d29kZFc4TEdB',
  //     timestampUsec: '1665144247876066',
  //     authorName: {
  //       simpleText: '天野よなく',
  //     },
  //     authorPhoto: {
  //       thumbnails: [
  //         {
  //           url: 'https://yt4.ggpht.com/ytc/AIdro_l49U75p-6oIHx0Zd5WW1LvI1OeNpW06pFYyL-rTCNm6b4=s32-c-k-c0x00ffffff-no-rj',
  //           width: 32,
  //           height: 32,
  //         },
  //         {
  //           url: 'https://yt4.ggpht.com/ytc/AIdro_l49U75p-6oIHx0Zd5WW1LvI1OeNpW06pFYyL-rTCNm6b4=s64-c-k-c0x00ffffff-no-rj',
  //           width: 64,
  //           height: 64,
  //         },
  //       ],
  //     },
  //     purchaseAmountText: {
  //       simpleText: 'NT$75.00',
  //     },
  //     message: {
  //       runs: [
  //         {
  //           text: '用一下免費的SC 我好怕喔',
  //         },
  //       ],
  //     },
  //     headerBackgroundColor: 4278239141,
  //     headerTextColor: 4278190080,
  //     bodyBackgroundColor: 4280150454,
  //     bodyTextColor: 4278190080,
  //     authorExternalChannelId: 'UCwSuo-AjWlCrVZp7Azjgp6A',
  //     authorNameTextColor: 2315255808,
  //     contextMenuEndpoint: {
  //       clickTrackingParams: 'CBYQ7rsEIhMInLa6wJnjiQMVcs40Bx3odTwJ',
  //       commandMetadata: {
  //         webCommandMetadata: {
  //           ignoreNavigation: true,
  //         },
  //       },
  //       liveChatItemContextMenuEndpoint: {
  //         params:
  //           'Q2g0S0hBb2FRMG95TUhKT1UwcDZkbTlEUm1aUldqVjNiMlJrVnpoTVIwRWFLU29uQ2hoVlF6SmFWMmRuYjI0eFRrOVVNbFJIWVZaVlRYcFpOMEVTQzBSZlZUQjJWRXB5ZGw5VklBRW9CRElhQ2hoVlEzZFRkVzh0UVdwWGJFTnlWbHB3TjBGNmFtZHdOa0U0QWtnQlVBOCUzRA==',
  //       },
  //     },
  //     timestampColor: 2147483648,
  //     contextMenuAccessibility: {
  //       accessibilityData: {
  //         label: 'Chat actions',
  //       },
  //     },
  //     timestampText: {
  //       simpleText: '4:11',
  //     },
  //     trackingParams: 'CBYQ7rsEIhMInLa6wJnjiQMVcs40Bx3odTwJ',
  //     textInputBackgroundColor: 822083583,
  //     creatorHeartButton: {
  //       creatorHeartViewModel: {
  //         creatorThumbnail: {
  //           sources: [
  //             {
  //               url: 'https://yt3.ggpht.com/lQaEUeJlLtgioCU0npPsaYOLzg2idrzG0XY_jn-fjPOySnv4nN94U0rCTt5shavBR9brK-e6Tg=s48-c-k-c0x00ffffff-no-rj',
  //             },
  //           ],
  //         },
  //         heartedIcon: {
  //           sources: [
  //             {
  //               clientResource: {
  //                 imageName: 'full_heart-filled',
  //               },
  //             },
  //           ],
  //         },
  //         unheartedIcon: {
  //           sources: [
  //             {
  //               clientResource: {
  //                 imageName: 'full_heart',
  //               },
  //             },
  //           ],
  //           processor: {
  //             borderImageProcessor: {
  //               imageTint: {
  //                 color: 4278190080,
  //               },
  //             },
  //           },
  //         },
  //         heartedHoverText: '❤ by 庫洛姆•Kuromu',
  //         heartedAccessibilityLabel: 'Remove heart',
  //         unheartedAccessibilityLabel: 'Heart',
  //         engagementStateKey:
  //           'EktsaXZlLWNoYXQtbWVzc2FnZS1lbmdhZ2VtZW50LXN0YXRlLUNod0tHa05LTWpCeVRsTktlblp2UTBabVVWbzFkMjlrWkZjNFRFZEIgLCgB',
  //       },
  //     },
  //     isV2Style: true,
  //     replyButton: {
  //       pdgReplyButtonViewModel: {
  //         replyButton: {
  //           buttonViewModel: {
  //             iconName: 'CHAT',
  //             onTap: {
  //               innertubeCommand: {
  //                 clickTrackingParams: 'CBcQ68ENIhMInLa6wJnjiQMVcs40Bx3odTwJ',
  //                 showEngagementPanelEndpoint: {
  //                   identifier: {
  //                     surface: 'ENGAGEMENT_PANEL_SURFACE_LIVE_CHAT',
  //                     tag: 'PAreply_thread',
  //                   },
  //                   globalConfiguration: {
  //                     params:
  //                       'ggm2AQojVWd4X2owTGZlUFRaQkV2VExLaDRBYUFCRHFnQnRaNlZsd0kSVgopKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UQARgEIAE6I1VneF9qMExmZVBUWkJFdlRMS2g0QWFBQkRxZ0J0WjZWbHdJGgggALABAPgBACIpKicKGFVDMlpXZ2dvbjFOT1QyVEdhVlVNelk3QRILRF9VMHZUSnJ2X1UoATAB',
  //                   },
  //                   engagementPanelPresentationConfigs: {
  //                     engagementPanelPopupPresentationConfig: {
  //                       popupType: 'PANEL_POPUP_TYPE_DIALOG',
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //             accessibilityText: 'Reply',
  //             style: 'BUTTON_VIEW_MODEL_STYLE_CUSTOM',
  //             trackingParams: 'CBcQ68ENIhMInLa6wJnjiQMVcs40Bx3odTwJ',
  //             type: 'BUTTON_VIEW_MODEL_TYPE_TONAL',
  //             buttonSize: 'BUTTON_VIEW_MODEL_SIZE_XSMALL',
  //             customBackgroundColor: 218103808,
  //             customFontColor: 4278190080,
  //             loggingDirectives: {
  //               trackingParams: 'CBcQ68ENIhMInLa6wJnjiQMVcs40Bx3odTwJ',
  //               visibility: {
  //                 types: '12',
  //               },
  //               enableDisplayloggerExperiment: true,
  //             },
  //           },
  //         },
  //         replyCountEntityKey: 'EiNVZ3hfajBMZmVQVFpCRXZUTEtoNEFhQUJEcWdCdFo2Vmx3SSDxAygB',
  //         replyCountPlaceholder: {
  //           content: 'Reply',
  //           styleRuns: [
  //             {
  //               startIndex: 0,
  //               length: 5,
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // }
}

export default defineCommand({
  meta: {
    description: 'parser',
  },
  args: {},
  run: async ({ args }) => {
    // const result = convertARGB2rgbString(4294967295)
    // const result = convertARGB2rgbString(822083583)
    // console.log({ result })
    // const youtube = await createInnertubeClient()
    // const b = youtube.getComments('GDLZ7V2rRV0')
    const rawData = getRawData()
    const item = Parser.parseItem(rawData, YTNodes.LiveChatTickerPaidMessageItem)

    if (!item) return

    const youtube = await createInnertubeClient()

    const b = await item.open_engagement_panel_command_endpoint.call(youtube.actions)

    writeFileSync('b.json', JSON.stringify(b.data.content, null, 2), 'utf-8')

    const c = Parser.parseItem(b.data.content)

    console.log(c)

    // console.log(a.item().type)
    // console.log(a.item().as(YTNodes.LiveChatBanner).contents.as(YTNodes.LiveChatTextMessage).message.toHTML())

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
