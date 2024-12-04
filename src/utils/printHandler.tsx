/* eslint-disable @typescript-eslint/no-explicit-any */
import { Printer, render, Image, Cut } from 'react-thermal-printer'

declare global {
  interface Navigator {
    serial: any
  }
}

const receipt = (
  <Printer type='epson' width={80} debug={true}>
    <Image align='center' src='/resultSample.png' />
    <Cut />
  </Printer>
)

export const onClickPrintHandler = async () => {
  const data = await render(receipt)
  const port = await window.navigator?.serial?.requestPort()
  if (port.writable === null) {
    await port.open({ baudRate: 9600 })
  }
  const writer = port.writable?.getWriter()
  if (writer !== null) {
    await writer!.write(data).then(() => setTimeout(() => port.close(), 20000))
    writer!.releaseLock()
  }
}
