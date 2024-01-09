import { useState } from "react";

import { Button, Grid, Typography } from "@mui/material";

import { Person, Planet, Starship, Vehicle } from "../../../utils/types/types";
import { getFilmIds } from "../../../utils/utils";
import { Details } from "../../details/Details";

type PersonDetailsProps = {
  data: Person[] | null;
};

type PlanetDetailsProps = {
  data: Planet[] | null;
};

type VehicleDetailsProps = {
  data: Vehicle[] | null;
};

type StarshipDetailsProps = {
  data: Starship[] | null;
};

// TODO - finish up the master-details design , add pagination
export const CategoryList = ({
  data,
}:
  | PersonDetailsProps
  | PlanetDetailsProps
  | VehicleDetailsProps
  | StarshipDetailsProps) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: Person | Planet | Starship | Vehicle) => {
    setSelectedItem(item);
  };

  return (
    <Grid container flexDirection={"row"} gap={3}>
      <Grid item>
        <Typography variant="h6" m={1}>
          Results: {data?.length}
        </Typography>
        <ul>
          {data?.map((result) => {
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
