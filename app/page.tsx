import HomeScreen from "@/src/screens/home"

function HomePage({searchParams}:{searchParams:{category?:string; search?:string;}}) {
  return (
    
 <HomeScreen searchParams={searchParams} />
   
  )
}

export default HomePage