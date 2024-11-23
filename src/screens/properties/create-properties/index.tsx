import SubmitButton from "@/src/common/form/Buttons";
import CategoriesInput from "@/src/common/form/CategoriesInput";
import CountriesInput from "@/src/common/form/CountriesInput";
import FormContainer from "@/src/common/form/FormContainer";
import FormInput from "@/src/common/form/FormInput";
import ImageInput from "@/src/common/form/ImageInput";
import PriceInput from "@/src/common/form/PriceInput";
import TextAreaInput from "@/src/common/form/TextAreaInput";
import { createPropertyAction } from "@/src/utils/actions/actions";

const CreatePropertyPageScreen = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>

      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in India"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Like Home"
            />
            <PriceInput
            />
            <CategoriesInput/>
          </div>

<TextAreaInput name="description" labelText="Decription (10-1000 words)"/>
<div className="grid md:grid-cols-2 gap-8 mt-4">
<CountriesInput/>
<ImageInput/>
</div>
          <SubmitButton className="mt-12" text="Create Rental" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreatePropertyPageScreen;
