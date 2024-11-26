import { useParams, useNavigate } from 'react-router-dom'

const Loading = () => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()

  const handleVideoEnd = () => {
    navigate(`/redirect/${category}`)
  }

  return (
    <div className='flex flex-col gap-[70px] items-center relative'>
      <h1 className='absolute top-10 text-[40px] text-white'>지금부터 커피 리딩을 시작할게요.</h1>
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{ width: '700px', height: 'auto' }}
      >
        <source src={`/redirect-video.mp4`} type='video/mp4' />
      </video>
      <h1 className='absolute bottom-10 text-[32px] text-[#6D6C69] pt-3'>
        We'll start the coffee reading now.
      </h1>
    </div>
  )
}

export default Loading
