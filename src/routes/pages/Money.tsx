import { MoneyContentsMap } from '@/constants/MoneyContentsMap'
import { HomeButton } from '@assets/svg'

export default function Money() {
  const randomValue = Math.floor(Math.random() * MoneyContentsMap.length)
  const MoneyContent = MoneyContentsMap[randomValue]

  return (
    <div className='flex gap-[60px] items-center'>
      <MoneyContent.component className='w-[300px] h-[300px]' />
      <div className='flex flex-col w-[450px] gap-10'>
        <div className='flex flex-col gap-8 text-white'>
          <h1 className='text-[28px]'>{MoneyContent.title}</h1>
          <p className='text-xl'>{MoneyContent.description}</p>
        </div>
        <HomeButton className='w-[450px] h-[72px]' text='PRINT' textSize='md' navigate='/print' />
      </div>
    </div>
  )
}
