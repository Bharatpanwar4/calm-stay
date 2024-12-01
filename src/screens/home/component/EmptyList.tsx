import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IEmptyListProps {
  heading?: string;
  message?: string;
  btnText?: string;
}
const EmptyList = ({
  heading = "No Items in the list.",
  message = "Keep exploring our properties",
  btnText = "back home",
}: IEmptyListProps) => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-lg">{message}</p>
      <Button asChild className="mt-4 capitalize" size={"lg"}>
        <Link href={"/"}>{btnText}</Link>
      </Button>
    </div>
  );
};

export default EmptyList;
