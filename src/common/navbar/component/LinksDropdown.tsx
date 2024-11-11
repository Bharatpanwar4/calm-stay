import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import UserIcon from "./UserIcon";
import { links } from "@/src/utils/constants/common";
import Link from "next/link";
import SignOutLink from "./SignOutLink";
import { SignedIn,SignedOut ,SignInButton,SignUpButton} from "@clerk/nextjs";
const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 " align="start" sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Sign In</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
        {links?.map((i) => {
          return (
            <DropdownMenuItem key={i.href}>
              <Link href={i.href} className="capitalize w-full">
                {i.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
        {/* seperator */}
        <DropdownMenuItem>
          <SignOutLink/>
        </DropdownMenuItem>
        </SignedIn>
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
