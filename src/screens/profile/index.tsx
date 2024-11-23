import SubmitButton from "@/src/common/form/Buttons";
import FormContainer from "@/src/common/form/FormContainer";
import FormInput from "@/src/common/form/FormInput";
import { fetchProfile, updateProfileAction } from "@/src/utils/schema/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const ProfilePageScreen = async () => {
  const profile = await fetchProfile();
  return (
    <section className="text-2xl font-semibold mb-8 capitalize">
      <div className="border p-8 rounded-md ">
        {/* image input */}

        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              type="text"
              name="firstname"
              label="First Name"
              defaultValue={profile.firstname}
            />
            <FormInput
              type="text"
              name="lastname"
              label="Last Name"
              defaultValue={profile.lastname}
            />
            <FormInput
              type="text"
              name="username"
              label="User Name"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default ProfilePageScreen;
