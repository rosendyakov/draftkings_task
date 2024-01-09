import { Grid, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { DynamicResults } from "../../components/dynamicResults/DynamicResults";
import { PageContainer } from "../../components/pageContainer/PageContainer";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { usePage } from "../../context/PageContext";
import { useResults } from "../../queries/results";

export const Results = () => {
  const [searchParams] = useSearchParams();
  const context = usePage();
  // Get the category and query from the URL
  const category = searchParams.get("category");
  const searchQuery = searchParams.get("query");
  const { data, isError, error, isLoading } = useResults(
    category || "",
    searchQuery || "",
    context.pageState.page
  );

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
          Searched for <b>"{searchQuery}"</b> in category <b>"{category}"</b>
        </Typography>
      </Grid>
      <Grid item px={2}>
        {isLoading && !data && (
          <Typography component="h4">Loading...</Typography>
        )}
        {isError && !data && (
          <Typography component="h4">
            Error loading data - {error.message}
          </Typography>
        )}
        {data && <DynamicResults category={category} data={data} />}
      </Grid>
    </PageContainer>
  );
};
