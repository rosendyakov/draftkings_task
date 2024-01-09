import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  useFilms,
  useSpecies,
  useStarships,
  useVehicles,
} from "../../../queries/results";
import { Person } from "../../../utils/types/types";
import { getUrlPathName } from "../../../utils/utils";

type PersonDetailsListProps = {
  item: Person | null;
};

export const PersonDetailsList = ({ item }: PersonDetailsListProps) => {
  const isEnabled = true;
  const {
    data: films,
    isLoading: isFilmsLoading,
    isError: filmsError,
  } = useFilms(item?.films ?? [], isEnabled);
  const {
    data: species,
    isLoading: isSpeciesLoading,
    isError: speciesError,
  } = useSpecies(item?.species ?? [], isEnabled);
  const {
    data: vehicles,
    isLoading: isVehiclesLoading,
    isError: vehiclesError,
  } = useVehicles(item?.vehicles ?? [], isEnabled);
  const {
    data: starships,
    isLoading: isStarshipsLoading,
    isError: starshipsError,
  } = useStarships(item?.starships ?? [], isEnabled);

  return (
    <Grid container flexDirection={"column"}>
      <Grid item>
        <Typography variant="h6" m={1}>
          Results
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" m={1}>
          Name: {item?.name}
        </Typography>
        <Typography variant="body2" m={1}>
          Birth Year: {item?.birth_year}
        </Typography>
        <Typography variant="body2" m={1}>
          Films:
          {filmsError && <Typography>Error loading films</Typography>}
          {isFilmsLoading
            ? "Loading..."
            : films?.map((film) => film.title).join(", ")}
        </Typography>
        <Typography variant="body2" m={1}>
          Species:
          {speciesError && <Typography>Error loading species</Typography>}
          {isSpeciesLoading
            ? "Loading..."
            : species?.map((specie) => specie.name).join(", ")}
        </Typography>
        <Typography variant="body2" m={1}>
          Vehicles:
          {vehiclesError && <Typography>Error loading vehicles</Typography>}
          {isVehiclesLoading
            ? "Loading..."
            : vehicles?.map((vehicle) => vehicle.name).join(", ")}
        </Typography>
        <Typography variant="body2" m={1}>
          Starships:
          {starshipsError && <Typography>Error loading starships</Typography>}
          {isStarshipsLoading
            ? "Loading..."
            : starships?.map((starship) => starship.name).join(", ")}
        </Typography>
        <Link to={getUrlPathName(item?.url ?? "")}>
          <Button variant="text" endIcon={<ArrowForward />}>
            Details Page
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
