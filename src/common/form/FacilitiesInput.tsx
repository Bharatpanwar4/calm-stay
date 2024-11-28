"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { amenities, Amenity } from "@/src/utils/constants/facilities";
import { useState } from "react";

const FacilitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const [selectedFacilities, setSelectedFacilities] = useState<Amenity[]>(
    defaultValue || amenities
  );
  const handleChange = (amenity: Amenity) => {
    setSelectedFacilities((prev) => {
      return prev.map((i) => {
        if (i.name === amenity.name) {
          return { ...i, selected: !i.selected };
        }
        return i;
      });
    });
  };
  return (
    <section>
      <input
        type="hidden"
        name={"amenities"}
        value={JSON.stringify(selectedFacilities)}
      />

      <div className="grid grid-cols-2 gap-4">
        {selectedFacilities?.map((facility) => {
          return (
            <div key={facility.name} className="flex items-center space-x-2">
              <Checkbox
                id={facility.name}
                checked={facility.selected}
                onCheckedChange={() => handleChange(facility)}
              />
              <label htmlFor={facility.name} className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center">{facility.name} <facility.icon  className="w-4 h-4 " /> </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FacilitiesInput;
