import { Button, Grid, Typography } from "@mui/material";
import { useFilms } from "../../../queries/results";
import { Starship } from "../../../utils/types/types";
import { Link } from "react-router-dom";
import { getUrlPathName } from "../../../utils/utils";
import { ArrowForward } from "@mui/icons-material";

type StarshipDetailsListProps = {
  item: Starship | null;
};

export const StarshipDetailsList = ({ item }: StarshipDetailsListProps) => {
  const isEnabled = true;
  const { data: films } = useFilms(item?.films ?? [], isEnabled);

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
          Model: {item?.model}
        </Typography>
        <Typography variant="body2" m={1}>
          Manufacturer: {item?.manufacturer}
        </Typography>
        <Typography variant="body2" m={1}>
          Cost in Credits: {item?.cost_in_credits}
        </Typography>
        <Typography variant="body2" m={1}>
          Films: {films?.map((film) => film.title).join(", ")}
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
