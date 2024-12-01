"use client";
import {useDebouncedCallback} from 'use-debounce'
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState(
    searchParams?.get("search")?.toString() || ""
  );

  const handleSearch =useDebouncedCallback( (value:string)=>{
const params = new URLSearchParams(searchParams)
if(value){
  params.set('search',value)
}
else{
  params.delete('search')
}
router.replace(`${pathname}?${params.toString()}`)

  })

  useEffect(()=>{
    if(!searchParams?.get('search')){
      setSearch('')
    }
  },[searchParams?.get('search')])
  return (
    <Input
      type="text"
      placeholder="Find a property..."
      className="max-w-xs  dark:bg-muted"
      value={search}
      onChange={(e)=>{setSearch(e.target.value); handleSearch(e.target.value)}}

    />
  );
};

export default NavSearch;
