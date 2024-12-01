import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { categories } from "@/src/utils/constants/categories";
import Link from "next/link";

const CategoriesList = ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : ``;
  return <section>
    <ScrollArea className="py-6">
<div className="flex gap-x-4">
{categories?.map((i)=>{
  // const isActive
  return <Link key={i.label} href={`/?category=${i.label}${searchTerm}`}>
<article className={`p-3 flex flex-col items-center cursor-pointer duration-300 hover:text-primary w-[100px] ${i.label == category ? 'text-primary':''}`}>

<i.icon className="w-8 h-8"/>
<p className="capitalize text-sm mt-1">{i.label}</p>


</article>
  </Link>
})}
</div>
<ScrollBar orientation="horizontal"/>
    </ScrollArea>
  </section>;
};

export default CategoriesList;
