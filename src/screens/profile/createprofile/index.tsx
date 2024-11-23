import SubmitButton from "@/src/common/form/Buttons";
import FormContainer from "@/src/common/form/FormContainer";
import FormInput from "@/src/common/form/FormInput";
import { createProfileAction } from "@/src/utils/schema/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const CreateProfileScreen = async () => {
  const user =await currentUser()
  if(user?.privateMetadata?.hasProfile)redirect('/')
  return (
    <section className="text-2xl font-semibold mb-8 capitalize">
      <div className="border p-8 rounded-md ">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstname" label="First Name" />
            <FormInput type="text" name="lastname" label="Last Name" />
            <FormInput type="text" name="username" label="User Name" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfileScreen;
