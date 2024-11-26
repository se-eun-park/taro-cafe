import { HomeButton } from '@/assets/svg'
import { useParams } from 'react-router-dom'

export default function Redirect() {
  const { category } = useParams<{ category: string }>()

  return (
    <div className='flex flex-col gap-[70px] items-center'>
      <h1 className='text-[40px] text-white'>당신의 이야기를 기록했어요. 확인해볼까요?</h1>
      <HomeButton
        className='w-[700px] h-[177px]'
        text='YES!'
        textSize='lg'
        navigate={`/${category}`}
      />
      <h1 className='text-[32px] text-[#6D6C69] pt-3'>
        We’ve recorded your story. Shall we take a look?
      </h1>
    </div>
  )
}
