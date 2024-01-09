import { Grid, Typography } from "@mui/material";

import { PageContainer } from "../../components/pageContainer/PageContainer";
import { SearchForm } from "../../components/searchForm/SearchForm";

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
