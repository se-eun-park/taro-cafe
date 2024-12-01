import { useParams, useNavigate } from 'react-router-dom'

const Loading = () => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()

  const handleVideoEnd = () => {
    navigate(`/redirect/${category}`)
  }

  return (
    <div className='flex flex-col gap-[70px] items-center relative'>
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{ width: '1112px', height: '834px' }}
      >
        <source src={`/redirect-video.mp4`} type='video/mp4' />
      </video>
    </div>
  )
}

export default Loading
