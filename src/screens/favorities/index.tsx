import { fetchFavorities } from "@/src/utils/actions/actions"
import EmptyList from "../home/component/EmptyList"
import PropertiesList from "../home/component/PropertiesList"

const FavouritesPageScreen = async() => {
    const favorities =await fetchFavorities()


    if(favorities?.length === 0){
        return <EmptyList/>
    }
  return (
    // <h1 className="text-3xl">favouritesPageScreen</h1>
    <PropertiesList properties={favorities}/>
  )
}

export default FavouritesPageScreen