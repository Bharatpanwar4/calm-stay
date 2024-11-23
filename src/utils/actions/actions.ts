"use server";

import {
  imageSchema,
  profileSchema,
  propertySchema,
  validateZodSchema,
} from "../schema/schemas";
import db from "../db/db";
import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage } from "../supabase/supabase";

// get auth user

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");

  return user;
};

// render Error
const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

// create profile
export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login to create a profile");

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateZodSchema(profileSchema, rawData);
    await db.profile.create({
      data: {
        clerkID: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};

// get profile image

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;
  const profile = await db.profile.findUnique({
    where: {
      clerkID: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};

// get profile
export const fetchProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkID: user?.id,
    },
  });
  if (!profile) redirect("/profile/create");
  return profile;
};

// update profile
export const updateProfileAction = async (
  prev: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateZodSchema(profileSchema, rawData);
    await db.profile.update({
      where: {
        clerkID: user.id,
      },
      data: validatedFields,
    });
    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

// update profile Image

export const updateProfileImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const validatedFields = validateZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFields.image);

    await db.profile.update({
      where: {
        clerkID: user.id,
      },
      data: {
        profileImage: fullPath,
      },
    });
    revalidatePath("/profile");
    return { message: "Profile image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

// //////////////////////////////////////////////////////////////////////////

// create property action
export const createPropertyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const rawData=Object.fromEntries(formData)
    const validatedFields=validateZodSchema(propertySchema,rawData)
    // await db.property.create({
    //   data:{

    //   }
    // })
    return {message:'property created'}
  } catch (error) {
    return renderError(error)
  }
  // redirect('/')
};
