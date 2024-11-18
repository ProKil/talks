import { presetWebFonts } from 'unocss'
import { defineConfig } from 'unocss'

export default defineConfig({
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    theme: {
        colors: {
            warning: {
                DEFAULT: "hsl(var(--warning))",
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
            }
        },
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
  })
