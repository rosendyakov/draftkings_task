import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

type SearchInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const SearchInput = ({ inputRef }: SearchInputProps) => (
  <TextField
    inputRef={inputRef}
    margin="normal"
    required
    fullWidth
    placeholder="Search..."
    name="search"
    InputProps={{
      startAdornment: <Search />,
    }}
  />
);
