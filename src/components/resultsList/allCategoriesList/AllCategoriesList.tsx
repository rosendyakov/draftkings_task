import { sortedArrayDesc } from "../../../utils/utils";
import { CategoryApiResponse } from "../../../utils/types/types";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface AllCategoriesListProps {
  data: CategoryApiResponse[];
}

export const AllCategoriesList = ({ data }: AllCategoriesListProps) => {
  return (
    <div>
      {sortedArrayDesc(data).map((category) => {
        return (
          <div key={category.count}>
            <Typography variant="h6" m={1}>
              Results: {category.count}
            </Typography>
            <ul>
              {category.results.map((result) => {
                return (
                  <li>
                    <Link to="" key={result.name}>
                      {result.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
