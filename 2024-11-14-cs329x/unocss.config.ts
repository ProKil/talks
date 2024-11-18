import { presetWebFonts } from 'unocss'

export default {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: 'Geist',
          serif: "EB Garamond",
          hand: 'Playwrite IT Moderna',
          jp: 'Noto Serif JP',
        },
      }),
    ],
  }
