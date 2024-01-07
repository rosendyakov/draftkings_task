import { Link } from "react-router-dom";
import { Person, Planet, Starship, Vehicle } from "../../utils/types/types";
import { getFilmIds } from "../../utils/utils";

type CategoryListProps = {
  data: Person[] | Planet[] | Vehicle[] | Starship[];
};

export const CategoryList = ({ data }: CategoryListProps) => {
  return (
    <div>
      {data.map((result) => {
        return (
          <div key={result.name}>
            <Link to="">{`${result.name} (appears in ${getFilmIds(
              result.films
            )})`}</Link>
          </div>
        );
      })}
    </div>
  );
};
