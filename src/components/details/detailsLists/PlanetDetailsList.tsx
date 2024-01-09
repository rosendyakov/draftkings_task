import { Button, Grid, Typography } from "@mui/material";
import { useFilms, useResidents } from "../../../queries/results";
import { Planet } from "../../../utils/types/types";
import { Link } from "react-router-dom";
import { getUrlPathName } from "../../../utils/utils";
import { ArrowForward } from "@mui/icons-material";

type PlanetDetailsListProps = {
  item: Planet | null;
};

export const PlanetDetailsList = ({ item }: PlanetDetailsListProps) => {
  const isEnabled = true;
  const { data: films } = useFilms(item?.films ?? [], isEnabled);
  const { data: residents } = useResidents(item?.residents ?? [], isEnabled);

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
          Climate: {item?.climate}
        </Typography>
        <Typography variant="body2" m={1}>
          Diameter: {item?.diameter}
        </Typography>
        <Typography variant="body2" m={1}>
          Films: {films?.map((film) => film.title).join(", ")}
        </Typography>
        <Typography variant="body2" m={1}>
          Residents: {residents?.map((resident) => resident.name).join(", ")}
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
