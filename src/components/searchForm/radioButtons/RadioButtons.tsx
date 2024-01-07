import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Category } from "../../../utils/types/types";

type RadioButtonsProps = {
  radioValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categories: Category[];
};

export const RadioButtons = ({
  radioValue,
  onChange,
  categories,
}: RadioButtonsProps) => (
  <RadioGroup
    row
    aria-labelledby="row-radio-buttons-group-label"
    name="categories-radio-buttons-group"
    value={radioValue}
    onChange={onChange}
  >
    {categories.map((checkBoxValue) => (
      <FormControlLabel
        key={checkBoxValue.id}
        value={checkBoxValue.value}
        control={<Radio />}
        label={checkBoxValue.label}
      />
    ))}
  </RadioGroup>
);
