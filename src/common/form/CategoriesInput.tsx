import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/src/utils/constants/categories";
const CategoriesInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";
  return <div className="mb-2">
     <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select defaultValue={defaultValue||categories[0].label} name={name} required>
<SelectTrigger id={name}>
    <SelectValue/>
</SelectTrigger>

<SelectContent>
    {categories?.map((i)=>{
        return <SelectItem key={i.label} value={i.label}>
            <span className="flex items-center gap-2"> <i.icon/> {i.label}</span>
            </SelectItem>
    })}
</SelectContent>
      </Select>
  </div>;
};

export default CategoriesInput;
