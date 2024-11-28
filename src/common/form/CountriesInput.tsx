import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formattedCountries } from "@/src/utils/constants/countries";
const CountriesInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "country";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select
        defaultValue={defaultValue || formattedCountries?.[0]?.code}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {formattedCountries?.map((i) => {
            return (
              <SelectItem key={i.code} value={i.code}>
                <span className="flex items-center gap-2">
                  {" "}
               {i.flag} {i.name}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountriesInput;
