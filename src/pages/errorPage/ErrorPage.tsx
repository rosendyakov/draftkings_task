import { Button, Grid, Typography } from "@mui/material";
import { PageContainer } from "../../components/pageContainer/PageContainer";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <PageContainer>
      <Grid
        container
        p={3}
        flexDirection={"column"}
        alignItems={"center"}
        gap={3}
      >
        <Grid item>
          <Typography component="h1" variant="h4" align="center">
            Oops!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Sorry, an unexpected error has occurred.
          </Typography>
        </Grid>
        <Grid item>
          <Link to={"/"}>
            <Button variant="contained">Back</Button>
          </Link>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
