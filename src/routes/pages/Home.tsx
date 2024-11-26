import { HomeButton } from '@/assets/svg'

export default function Home() {
  return (
    <div className='flex flex-col gap-[70px] items-center'>
      <h1 className='text-[40px] text-white'>반대편에서 가능성을 찾아보세요.</h1>
      <HomeButton className='w-[700px] h-[177px]' text='START' textSize='lg' navigate='/select' />
      <h1 className='text-[32px] text-[#6D6C69] pt-3'>Explore possibilities on the flip side.</h1>
    </div>
  )
}
