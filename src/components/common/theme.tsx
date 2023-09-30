// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// }

// // A.
// // System sets initial value.
// // App subscribes to system color mode changes.
// const config: ThemeConfig = {
//   initialColorMode: 'system',
//   useSystemColorMode: true,
// }

// // B.
// // System sets initial value.
// // App color mode is detached from system color mode changes.
// const config: ThemeConfig = {
//   initialColorMode: 'system',
//   useSystemColorMode: false,
// }

// // C.
// // You choose initial value.
// // App color mode is detached from system color mode changes.
// const config: ThemeConfig = {
//   initialColorMode: 'dark', // 'dark' | 'light'
//   useSystemColorMode: false,
// }

// D.
// You choose initial value.
// App subscribes to system color mode changes.
const config: ThemeConfig = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: true,
}



// 3. extend the theme
const theme = extendTheme({ config })

export default theme