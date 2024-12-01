import { formatCurrency } from "@/src/utils/commonFunctions/format";
import { IPropertyCardProps } from "@/src/utils/types/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PropertyRating from "./PropertyRating";
import FavoriteToggleButton from "./FavoriteToggleButton";
import CountryFlagAndName from "./CountryFlagAndName";

const PropertyCard = ({ property }: { property: IPropertyCardProps }) => {
  return (
    <article className="group relative">
      <Link href={`/properties/${property?.id}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={property.image}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            alt={property.name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {property?.name?.substring(0, 30)}
          </h3>
          {/* property rating */}
          <PropertyRating inPage={false} property={property} />
        </div>
        <p className="tetx-sm mt-1 text-muted-foreground ">
          {property?.tagline?.substring(0, 40)}
        </p>

        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1">
            <span className="font-semibold">
              {formatCurrency(Number(property?.price))}{" "}
            </span>
            night
          </p>
          {/* country and flag */}
          <CountryFlagAndName countryCode={property?.country}/>
        </div>
      </Link>
      <div className="absolute top-5 z-5 right-5 ">
        {/* fav */}
        <FavoriteToggleButton property={property} />
      </div>
    </article>
  );
};

export default PropertyCard;
