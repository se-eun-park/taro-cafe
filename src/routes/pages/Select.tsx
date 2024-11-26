import { UuunText } from '@/assets/svg'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Select() {
  const navigate = useNavigate()
  const [isUuunActive, setIsUuunActive] = useState(false)
  const uuunButtonRef = useRef<HTMLButtonElement>(null)

  const handleUuunButtonMouseDown = () => {
    setIsUuunActive(true)
  }

  const handleUuunButtonMouseUp = () => {
    setIsUuunActive(false)
  }

  return (
    <div className='flex flex-col gap-[70px] items-center'>
      <h1 className='text-[40px] text-white'>어떤 이야기를 알아볼까요?</h1>
      <div className='flex gap-4'>
        <button
          onClick={() => navigate('/loading/love')}
          className='bg-[#262626] active:bg-[#FFFF77] w-[180px] h-[180px] rounded-full flex flex-col gap-1 items-center justify-center group'
        >
          <p className='text-[#FFFF77] text-2xl group-active:text-[#6D6C69]'>LOVE</p>
          <p className='text-white text-[36px] group-active:text-black'>연애</p>
        </button>
        <button
          onClick={() => navigate('/loading/career')}
          className='bg-[#262626]  active:bg-[#FFFF77] w-[180px] h-[180px] rounded-full flex flex-col gap-1 items-center justify-center group'
        >
          <p className='text-[#FFFF77] text-2xl group-active:text-[#6D6C69]'>CAREER</p>
          <p className='text-white text-[36px] group-active:text-black'>직업</p>
        </button>
        <button
          onClick={() => navigate('/loading/health')}
          className='bg-[#262626]  active:bg-[#FFFF77] w-[180px] h-[180px] rounded-full flex flex-col gap-1 items-center justify-center group'
        >
          <p className='text-[#FFFF77] text-2xl group-active:text-[#6D6C69]'>HEALTH</p>
          <p className='text-white text-[36px] group-active:text-black'>건강</p>
        </button>
        <button
          onClick={() => navigate('/loading/money')}
          className='bg-[#262626]  active:bg-[#FFFF77] w-[180px] h-[180px] rounded-full flex flex-col gap-1 items-center justify-center group'
        >
          <p className='text-[#FFFF77] text-2xl group-active:text-[#6D6C69]'>MONEY</p>
          <p className='text-white text-[36px] group-active:text-black'>재물</p>
        </button>
        <button
          onClick={() => navigate('/loading/luck')}
          ref={uuunButtonRef}
          onMouseDown={handleUuunButtonMouseDown}
          onMouseUp={handleUuunButtonMouseUp}
          className='bg-[#262626]  active:bg-[#FFFF77] w-[180px] h-[180px] rounded-full flex flex-col gap-1 items-center justify-center group'
        >
          <div className='w-full h-[32px] flex items-center justify-center'>
            <UuunText className='w-[70px]' fill={isUuunActive ? '#6D6C69' : '#FFFF77'} />
          </div>
          <p className='text-white text-[36px] group-active:text-black'>오늘의 운</p>
        </button>
      </div>
      <h1 className='text-[32px] text-[#6D6C69] pt-3'>Which story would you like to discover?</h1>
    </div>
  )
}
