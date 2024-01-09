import { getFilmIds, getMaxCount, sortedArrayDesc } from "../../../utils/utils";
import {
  CategoryApiResponse,
  Person,
  Planet,
  Starship,
  Vehicle,
} from "../../../utils/types/types";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Details } from "../../details/Details";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useQueryClient } from "@tanstack/react-query";
import { getResults } from "../../../services/getResults";
import { QUERY_STALE_TIME } from "../../../utils/constants/constants";
import { usePage } from "../../../context/PageContext";

interface AllCategoriesListProps {
  data: CategoryApiResponse[];
}

export const AllCategoriesList = ({ data }: AllCategoriesListProps) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const context = usePage();

  const handleNext = () => {
    context.dispatch({ type: "SET_PAGE", payload: context.pageState.page + 1 });
  };

  const handlePrev = () => {
    context.dispatch({ type: "SET_PAGE", payload: context.pageState.page - 1 });
  };

  const handleItemClick = (item: Person | Planet | Starship | Vehicle) => {
    setSelectedItem(item);
  };

  const queryClient = useQueryClient();
  useEffect(() => {
    const fetchNext = async () => {
      try {
        const newData = await queryClient.fetchQuery({
          queryKey: ["results", "all", "a", context.pageState.page],
          queryFn: () => getResults("all", "a", context.pageState.page),
          staleTime: QUERY_STALE_TIME,
        });

        // Use setQueryData to update the query data
        queryClient.setQueryData(
          ["results", "all", "a", context.pageState.page],
          newData
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchNext();
  }, [context.pageState.page, queryClient]);

  return (
    <Grid container flexDirection={"column"}>
      <Grid item>
        <Typography variant="h6" m={1}>
          Page: {context.pageState.page}
        </Typography>
        <Button
          startIcon={<ArrowBack />}
          disabled={context.pageState.page === 1}
          onClick={handlePrev}
        >
          Previous
        </Button>
        <Button
          endIcon={<ArrowForward />}
          disabled={context.pageState.page === getMaxCount(data)}
          onClick={handleNext}
        >
          Next
        </Button>
      </Grid>
      <Grid container flexDirection={"row"}>
        <Grid item>
          {sortedArrayDesc(data).map((category) => {
            return (
              <Grid container flexDirection={"column"}>
                <Grid item key={category.count}>
                  <Typography variant="h6" m={1}>
                    Results: {category.count}
                  </Typography>
                  <ul>
                    {category.results ? (
                      category.results.map((result) => {
                        return (
                          <li key={result.name}>
                            <Button
                              variant="text"
                              sx={{
                                textTransform: "capitalize",
                                textDecoration: "underline",
                              }}
                              onClick={() => handleItemClick(result)}
                            >{`${result.name} (appears in ${getFilmIds(
                              result.films
                            )})`}</Button>
                          </li>
                        );
                      })
                    ) : (
                      <Typography variant="h6" m={1}>
                        No results
                      </Typography>
                    )}
                  </ul>
                </Grid>
              </Grid>
            );
          })}
        </Grid>

        <Grid item maxWidth={250} overflow={"hidden"}>
          {selectedItem && (
            <Grid container flexDirection={"column"}>
              <Details item={selectedItem} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
