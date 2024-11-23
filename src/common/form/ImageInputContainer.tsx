"use client";

import { Button } from "@/components/ui/button";
import {type actionFunction } from "@/src/utils/types/common";
import Image from "next/image";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import SubmitButton from "./Buttons";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};
const ImageInputContainer = ({
  action,
  image,
  name,
  text,
  children,
}: ImageInputContainerProps) => {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  const userIcon = (
    <LuUser2 className="w-24 h-24 bg-primary rounded text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}

      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {children}
            <ImageInput />
          <SubmitButton size="sm" />

          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
