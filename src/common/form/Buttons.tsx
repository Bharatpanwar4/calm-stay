'use client';


// import {Relo} from '@radix-ui/react-icons'
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
interface SubmitButtonProps{
    className?:string;
text?:string;
}
const SubmitButton = ({className='' , text='submit'}) => {
    const {pending}=useFormStatus()
  return (
    <Button type="submit" disabled={pending} className={`capitalize ${className}`} size={'lg'}>
        {pending ? <>
        <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
        Please wait...
        </> : text}
    </Button>
  )
}

export default SubmitButton