"use client";

import { useToast } from "@/hooks/use-toast";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleSignout = () => {
    toast({ description: "You have been signed out." });
  };
  return (
    <SignOutButton redirectUrl={"/"}>
      <button className="w-full text-left" onClick={handleSignout}>
        Signout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
