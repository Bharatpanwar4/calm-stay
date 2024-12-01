import { Button } from '@/components/ui/button'
import { IPropertyCardProps } from '@/src/utils/types/common'
import {FaHeart} from 'react-icons/fa'

const FavoriteToggleButton = ({property}:{property:IPropertyCardProps}) => {
  return (
    <Button size={'icon'} variant={'outline'} className='p-2 cursor-pointer'>
      <FaHeart/>
    </Button>
  )
}

export default FavoriteToggleButton