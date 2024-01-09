import { Button, Grid, Typography } from "@mui/material";
import {
  useFilms,
  useSpecies,
  useStarships,
  useVehicles,
} from "../../../queries/results";
import { Person } from "../../../utils/types/types";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { getUrlPathName } from "../../../utils/utils";

type PersonDetailsListProps = {
  item: Person | null;
};

export const PersonDetailsList = ({ item }: PersonDetailsListProps) => {
  const isEnabled = true;
  const { data: films } = useFilms(item?.films ?? [], isEnabled);
  const { data: species } = useSpecies(item?.species ?? [], isEnabled);
  const { data: vehicles } = useVehicles(item?.vehicles ?? [], isEnabled);
  const { data: starships } = useStarships(item?.starships ?? [], isEnabled);

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
          Films: {films?.map((film) => film.title).join(", ")}
        </Typography>
        <Typography variant="body2" m={1}>
          Species: {species?.map((specie) => specie.name).join(", ")}
        </Typography>
        <Typography variant="body2" m={1}>
          Vehicles: {vehicles?.map((vehicle) => vehicle.name).join(", ")}
        </Typography>
        <Typography variant="body2" m={1}>
          Starships: {starships?.map((starship) => starship.name).join(", ")}
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
