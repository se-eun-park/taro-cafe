import { Base64 } from 'js-base64'

export const encodeBase64 = (value: string) => {
  return Base64.encode(value)
}

export const decodeBase64 = (encodedValue: string) => {
  return Base64.decode(encodedValue)
}
