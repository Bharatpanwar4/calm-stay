import { Suspense } from "react";
import CategoriesList from "./component/CategoriesList";
import PropertiesContainer from "./component/PropertiesContainer";
import LoadingFiles from "@/src/common/cards/LoadingFiles";

const HomeScreen = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  return (
    <section>
      {/* <h1 className="text-2xl font-semibold mb-8 capitalize">
      Home
    </h1> */}

      <CategoriesList
        category={searchParams?.category}
        search={searchParams?.search}
      />

      <Suspense fallback={<LoadingFiles />}>
        <PropertiesContainer
          category={searchParams?.category}
          search={searchParams?.search}
        />
      </Suspense>
    </section>
  );
};

export default HomeScreen;
