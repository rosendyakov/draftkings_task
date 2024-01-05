import { Grid, Typography } from "@mui/material";
import { PageContainer } from "../../components/pageContainer/PageContainer";
import { useResults } from "../../queries/results";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { useParams } from "react-router-dom";

export const Results = () => {
  const { data, isLoading, isError, error } = useResults("all", "luke");
  const params = useParams();
  console.log(params);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.name}</h1>;

  console.log(data);

  return (
    <PageContainer>
      <Grid item>
        <Typography component="h1" variant="h4" align="center" m={3}>
          Search Results
        </Typography>
        <SearchForm />
        <Grid item>
          <Typography component="h1" variant="h4" align="center" m={3}>
            {data?.length} Results
          </Typography>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
