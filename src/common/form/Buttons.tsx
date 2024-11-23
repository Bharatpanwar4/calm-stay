'use client';


// import {Relo} from '@radix-ui/react-icons'
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";


type buttonSize = 'default'|'lg'|'sm';
interface SubmitButtonProps{
    className?:string;
text?:string;
size?:buttonSize;
}
const SubmitButton = ({className='' , text='submit',size='lg'}:SubmitButtonProps) => {
    const {pending}=useFormStatus()
  return (
    <Button type="submit" disabled={pending} className={`capitalize ${className}`} size={size}>
        {pending ? <>
        <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
        Please wait...
        </> : text}
    </Button>
  )
}

export default SubmitButton