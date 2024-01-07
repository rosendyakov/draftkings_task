import { Grid, Typography } from "@mui/material";
import { PageContainer } from "../../components/pageContainer/PageContainer";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { useResults } from "../../queries/results";
import { DynamicResults } from "../../components/dynamicResults/DynamicResults";

export const Results = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const searchQuery = searchParams.get("query");
  const { data, isError, error } = useResults(
    category || "",
    searchQuery || ""
  );

  if (isError) return <h1>{error.name}</h1>;

  return (
    <PageContainer>
      <Grid item>
        <Typography component="h1" variant="h4" align="center" m={3}>
          Search Results
        </Typography>
        <SearchForm />
      </Grid>
      <Grid item px={2}>
        <Typography component="h4">
          {" "}
          Searched for <b>"{searchQuery}"</b> in category <b>"{category}"</b>
        </Typography>
      </Grid>
      <Grid item px={2}>
        {data ? (
          <DynamicResults category={category} data={data} />
        ) : (
          "Loading..."
        )}
      </Grid>
    </PageContainer>
  );
};
