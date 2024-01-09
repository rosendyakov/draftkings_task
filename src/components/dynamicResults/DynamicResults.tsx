import { CATEGORY_ENUM } from "../../utils/constants/constants";
import {
  AllApiResponses,
  CategoryApiResponse,
  PeopleApiResponse,
  PlanetsApiResponse,
  StarshipsApiResponse,
  VehiclesApiResponse,
} from "../../utils/types/types";
import { AllCategoriesList } from "../resultsList/allCategoriesList/AllCategoriesList";
import { CategoryList } from "../resultsList/categoryList/CategoryList";

type DynamicResultsProps = {
  category: string | null;
  data: AllApiResponses;
};

export const DynamicResults = ({ category, data }: DynamicResultsProps) => {
  // Render the correct component based on the category
  switch (category) {
    case CATEGORY_ENUM.All:
      return <AllCategoriesList data={data as CategoryApiResponse[]} />;
    case CATEGORY_ENUM.People:
      return <CategoryList data={(data as PeopleApiResponse).results} />;
    case CATEGORY_ENUM.Planets:
      return <CategoryList data={(data as PlanetsApiResponse).results} />;
    case CATEGORY_ENUM.Vehicles:
      return <CategoryList data={(data as VehiclesApiResponse).results} />;
    case CATEGORY_ENUM.Starships:
      return <CategoryList data={(data as StarshipsApiResponse).results} />;
    // Add other cases for different categories
    default:
      return <div>Invalid category</div>;
  }
};
