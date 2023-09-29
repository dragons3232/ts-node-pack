import { MD5 } from 'crypto-js'

const welcome = (name: string) => (
  `Welcome ${name}`
)

const hashMe = (input: string) => (
  MD5(input + 'secret')
)

export { welcome, hashMe };