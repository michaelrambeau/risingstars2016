import flatten from 'flat'

import allMessages from '../content/messages'

export default function getMessages (locale) {
  const messages = allMessages[locale]
  console.info('All messages', messages)
  if (Object.keys(messages).length === 0) return {}
  return flatten(messages)
}
