import { Outlet } from 'react-router-dom'

export default function index() {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-black font-uuun'>
      <Outlet />
    </div>
  )
}
