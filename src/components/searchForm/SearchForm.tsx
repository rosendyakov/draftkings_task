import { useRef, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { SearchInput } from "./input/Input";
import { RadioButtons } from "./radioButtons/RadioButtons";
import { SubmitButton } from "./submitButton/SubmitButton";
import {
  CATEGORY_ENUM,
  CATEGORIES,
  QUERY_STALE_TIME,
} from "../../utils/constants/constants";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getResults } from "../../services/getResults";

export const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [radioValue, setRadioValue] = useState(CATEGORY_ENUM.All);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value as CATEGORY_ENUM);
  };

  // Fire off a query to get the results and cache them
  // Then navigate to the results page
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await queryClient.fetchQuery({
      queryKey: ["results", radioValue, inputRef.current?.value, 1],
      queryFn: () => getResults(radioValue, inputRef.current?.value || "", 1),
      staleTime: QUERY_STALE_TIME,
    });
    const url = new URLSearchParams({
      category: radioValue,
      query: inputRef.current?.value as string,
    });
    navigate("/search-results?" + url.toString());
  };

  return (
    <>
      <Grid container flexDirection={"row"} p={2}>
        <Grid item>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Search
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate={false}
              sx={{ mt: 1 }}
            >
              <SearchInput inputRef={inputRef} />
              <RadioButtons
                categories={CATEGORIES}
                radioValue={radioValue}
                onChange={handleChange}
              />
              <SubmitButton />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
