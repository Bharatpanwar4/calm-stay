import { Button } from "@/components/ui/button";
import { IPropertyCardProps } from "@/src/utils/types/common";
import { auth } from "@clerk/nextjs/server";
import { FaHeart } from "react-icons/fa";
import { CardSignInButton } from "../form/Buttons";
import { fetchFovoriteId } from "@/src/utils/actions/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFovoriteId({ propertyId });
  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};

export default FavoriteToggleButton;
