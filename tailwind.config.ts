import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  content: [
    'components/',
    'layouts/',
    'pages/',
  ],
  theme: {
    extend: {},
  },
}
