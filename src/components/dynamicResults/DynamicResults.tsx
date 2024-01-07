import { CategoryEnum } from "../../utils/constants/constants";
import {
  AllApiResponses,
  CategoryApiResponse,
  PeopleApiResponse,
  PlanetsApiResponse,
  StarshipsApiResponse,
  VehiclesApiResponse,
} from "../../utils/types/types";
import { AllCategoriesList } from "../resultsList/AllCategoriesList";
import { CategoryList } from "../resultsList/CategoryList";

type DynamicResultsProps = {
  category: string | null;
  data: AllApiResponses;
};

export const DynamicResults = ({ category, data }: DynamicResultsProps) => {
  switch (category) {
    case CategoryEnum.All:
      return <AllCategoriesList data={data as CategoryApiResponse[]} />;
    case CategoryEnum.People:
      return <CategoryList data={(data as PeopleApiResponse).results} />;
    case CategoryEnum.Planets:
      return <CategoryList data={(data as PlanetsApiResponse).results} />;
    case CategoryEnum.Vehicles:
      return <CategoryList data={(data as VehiclesApiResponse).results} />;
    case CategoryEnum.Starships:
      return <CategoryList data={(data as StarshipsApiResponse).results} />;
    // Add other cases for different categories
    default:
      return <div>Invalid category</div>;
  }
};
