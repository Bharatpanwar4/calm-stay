'use client'
import { useToast } from '@/hooks/use-toast'
import {actionFunction} from '@/src/utils/types/common'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
const innitialState={
    message:''
}
const FormContainer = ({action,children}:{action:actionFunction,children:React.ReactNode}) => {
    const [state,formAction]=useFormState(action,innitialState)
    const {toast}=useToast()
useEffect(()=>{
    if(state.message){
        toast({description:state.message})
    }
},[state])
  return (
    <form action={formAction} >
        {children}

    </form>
  )
}

export default FormContainer