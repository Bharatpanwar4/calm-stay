import { IPropertyCardProps } from '@/src/utils/types/common'
import React from 'react'
import {FaStar} from 'react-icons/fa'
const PropertyRating = ({property,inPage}:{property:IPropertyCardProps,inPage:boolean}) => {
  const rating=4.7;
  const count=100;
  const className=`flex gap-1 items-center ${inPage ? 'text-md':'text-xs'}`
  const countText=count>1 ?'reviews':'review';
  const countValue =`(${count} ${inPage? countText:''})`
  return (
    <span className={className} >
<FaStar className='w-3 h-3'/>
{rating} {countValue}
    </span>
  )
}

export default PropertyRating