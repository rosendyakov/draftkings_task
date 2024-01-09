import { getFilmIds, sortedArrayDesc } from "../../../utils/utils";
import {
  CategoryApiResponse,
  Person,
  Planet,
  Starship,
  Vehicle,
} from "../../../utils/types/types";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Details } from "../../details/Details";

interface AllCategoriesListProps {
  data: CategoryApiResponse[];
}

export const AllCategoriesList = ({ data }: AllCategoriesListProps) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: Person | Planet | Starship | Vehicle) => {
    setSelectedItem(item);
  };
  return (
    <Grid container flexDirection={"row"}>
      <Grid item>
        {sortedArrayDesc(data).map((category) => {
          return (
            <Grid item key={category.count}>
              <Typography variant="h6" m={1}>
                Results: {category.count}
              </Typography>
              <ul>
                {category.results.map((result) => {
                  return (
                    <li key={result.name}>
                      <Button
                        variant="text"
                        sx={{
                          textTransform: "capitalize",
                          textDecoration: "underline",
                        }}
                        onClick={() => handleItemClick(result)}
                      >{`${result.name} (appears in ${getFilmIds(
                        result.films
                      )})`}</Button>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          );
        })}
      </Grid>
      <Grid item maxWidth={250} overflow={"hidden"}>
        {selectedItem && (
          <Grid container flexDirection={"column"}>
            <Details item={selectedItem} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
