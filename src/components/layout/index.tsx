import { Outlet } from 'react-router-dom'

export default function index() {
  return (
    <div className='flex items-center justify-center w-full bg-black h-dvh font-uuun pt-[78px]'>
      <Outlet />
    </div>
  )
}
