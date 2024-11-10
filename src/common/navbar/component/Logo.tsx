import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiBasecamp } from "react-icons/si";
import { LiaCampgroundSolid } from "react-icons/lia";
import { LiaHotelSolid } from "react-icons/lia";

const Logo = () => {
  return (
    <Button asChild size={'icon'}>
      <Link href={'/'}>
      <SiBasecamp className="w-6 h-6"/>
      
      
      </Link>
    </Button>
  )
}

export default Logo