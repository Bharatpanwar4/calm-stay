import { fetchProperties } from "@/src/utils/actions/actions";
import type { IPropertyCardProps } from "@/src/utils/types/common";
import EmptyList from "./EmptyList";
import PropertiesList from "./PropertiesList";

const PropertiesContainer = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const properties: IPropertyCardProps[] = await fetchProperties({
    category,
    search,
  });
  if(properties?.length ===0 )
  {return (
    <EmptyList
      heading="No Result"
      message="Try changing or removing some of your filters."
      btnText="Clear Filters"
    />
  );}
  return <PropertiesList properties={properties}/>
};

export default PropertiesContainer;
