import { encodeBase64 } from '@/hooks/useAes'
import { CareerContentsMap } from '@/constants/CareerContentsMap'
import { HomeButton } from '@assets/svg'

export default function Career() {
  const randomValue = Math.floor(Math.random() * CareerContentsMap.length)
  const CareerContent = CareerContentsMap[randomValue]

  const encodedValue = encodeBase64(`career/${randomValue}`)

  return (
    <div className='flex gap-[60px] items-center'>
      <CareerContent.component className='w-[300px] h-[300px]' />
      <div className='flex flex-col w-[450px] gap-10'>
        <div className='flex flex-col gap-8 text-white'>
          <h1 className='text-[28px]'>{CareerContent.title}</h1>
          <p className='text-xl'>{CareerContent.description}</p>
        </div>
        <HomeButton
          className='w-[450px] h-[72px]'
          text='PRINT'
          textSize='md'
          navigate={`/print/${encodedValue}`}
        />
      </div>
    </div>
  )
}
