import PropertyCard from "@/src/common/cards/PropertyCard";
import type { IPropertyCardProps } from "@/src/utils/types/common";

const PropertiesList = ({
  properties,
}: {
  properties: IPropertyCardProps[];
}) => {
  return (
    <section className="mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties?.map((property) => {
        return <PropertyCard key={property.id} property={property} />;
      })}
    </section>
  );
};

export default PropertiesList;
