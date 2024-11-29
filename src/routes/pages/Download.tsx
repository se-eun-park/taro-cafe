import { useLocation } from 'react-router-dom'
import { decodeBase64 } from '@/hooks/useAes'
import {
  MoneyContentsMap,
  CareerContentsMap,
  HealthContentsMap,
  LoveContentsMap,
  LuckContentsMap,
} from '@/constants'
import { useMemo } from 'react'

export default function Download() {
  const location = useLocation().pathname.split('/')
  const decodedValue = decodeBase64(location[location.length - 1])

  const contentIndex = Number(decodedValue.split('/')[1])

  const contentElements = useMemo(() => {
    switch (decodedValue.split('/')[0]) {
      case 'money':
        return MoneyContentsMap[contentIndex]
      case 'career':
        return CareerContentsMap[contentIndex]
      case 'health':
        return HealthContentsMap[contentIndex]
      case 'love':
        return LoveContentsMap[contentIndex]
      case 'luck':
        return LuckContentsMap[contentIndex]
      default:
        return { component: 'error' }
    }
  }, [decodedValue, contentIndex])

  return (
    <div className='text-white'>
      <contentElements.component className='w-[300px] h-[300px]' />
    </div>
  )
}
