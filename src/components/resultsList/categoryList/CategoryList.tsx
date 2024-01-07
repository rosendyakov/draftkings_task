import { Link } from "react-router-dom";
import { Person, Planet, Starship, Vehicle } from "../../../utils/types/types";
import { getFilmIds } from "../../../utils/utils";
import { Typography } from "@mui/material";

type CategoryListProps = {
  data: Person[] | Planet[] | Vehicle[] | Starship[];
};

export const CategoryList = ({ data }: CategoryListProps) => {
  return (
    <div>
      <Typography variant="h6" m={1}>
        Results: {data.length}
      </Typography>
      <ul>
        {data.map((result) => {
          return (
            <li key={result.name}>
              <Link to="">{`${result.name} (appears in ${getFilmIds(
                result.films
              )})`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
