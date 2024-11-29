import { QRCodeSVG } from 'qrcode.react'
import { encodeBase64 } from '@/hooks/useAes'
import { HealthContentsMap } from '@/constants/HealthContentsMap'
import { HomeButton } from '@assets/svg'

export default function Health() {
  const randomValue = Math.floor(Math.random() * HealthContentsMap.length)
  const HealthContent = HealthContentsMap[randomValue]

  const encodedValue = encodeBase64(`health/${randomValue}`)

  const downloadUrl = `https://flip-side-virid.vercel.app/download/${encodedValue}`

  return (
    <div className='flex gap-[60px] items-center'>
      <HealthContent.component className='w-[300px] h-[300px]' />
      <div className='flex flex-col w-[450px] gap-10'>
        <div className='flex flex-col gap-8 text-white'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[28px]'>{HealthContent.title}</h1>
            <QRCodeSVG value={downloadUrl} className='w-20 h-fit' />
          </div>
          <p className='text-xl'>{HealthContent.description}</p>
        </div>
        <HomeButton className='w-[450px] h-[72px]' text='PRINT' textSize='md' navigate='/print' />
      </div>
    </div>
  )
}
