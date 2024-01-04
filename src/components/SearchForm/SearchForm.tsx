import { useRef, useState } from "react";

import { Box, Grid, Paper, Typography } from "@mui/material";
import styles from "./SearchForm.module.scss";

import { SearchInput } from "./Input/Input";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { SubmitButton } from "./SubmitButton/SubmitButton";

export type Category = {
  id: number;
  label: string;
  value: string;
};

const categories: Category[] = [
  { id: 1, label: "All", value: "All" },
  { id: 2, label: "People", value: "People" },
  { id: 3, label: "Planets", value: "Planets" },
  { id: 4, label: "Vehicles", value: "Vehicles" },
  { id: 5, label: "Starships", value: "Starships" },
];

export const SearchForm = () => {
  // useRef instead of useState because it's unnecessary to re-render the component when the input value changes
  const inputRef = useRef<HTMLInputElement>(null);
  const [radioValue, setRadioValue] = useState("All");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputRef.current?.value);
    console.log(radioValue);
  };

  return (
    <div className={styles.searchForm}>
      <Paper elevation={2}>
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
                  categories={categories}
                  radioValue={radioValue}
                  onChange={handleChange}
                />
                <SubmitButton />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
