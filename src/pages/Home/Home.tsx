import { Grid, Typography } from "@mui/material";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { SearchForm } from "../../components/SearchForm/SearchForm";

export const Home = () => {
  return (
    <PageContainer>
      <Grid item>
        <Typography component="h1" variant="h4" align="center" m={3}>
          Home Page
        </Typography>
        <SearchForm />
      </Grid>
    </PageContainer>
  );
};
