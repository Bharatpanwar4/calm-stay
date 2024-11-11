import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, type, defaultValue, label, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;