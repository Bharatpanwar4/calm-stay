"use client";
import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";
import { toggleFavoriteAction } from "@/src/utils/actions/actions";

interface IFavoriteToggleFormProps {
  propertyId: string;
  favoriteId: string | null;
}
const FavoriteToggleForm = ({
  propertyId,
  favoriteId,
}: IFavoriteToggleFormProps) => {
  const pathname = usePathname();
  

  const toggleAction =  toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });



console.log('sss',pathname);
  
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
