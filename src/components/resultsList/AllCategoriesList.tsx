import { sortedArrayDesc } from "../../utils/utils";
import { CategoryApiResponse } from "../../utils/types/types";

interface AllCategoriesListProps {
  data: CategoryApiResponse[];
}

export const AllCategoriesList = ({ data }: AllCategoriesListProps) => {
  console.log(sortedArrayDesc(data));
  return <div></div>;
};
