import { Paper, TableContainer } from "@mui/material";
import { useParams } from "react-router-dom";

import { useFilms, useSingleResult } from "../../queries/results";
import {
  CATEGORY_ENUM,
  STARSHIP_COLUMNS,
} from "../../utils/constants/constants";
import { Starship } from "../../utils/types/types";
import { PageContainer } from "../pageContainer/PageContainer";
import { AsyncCustomTable } from "../table/AsyncCustomTable";

export const StarshipDetails = () => {
  const { id } = useParams();
  const { data } = useSingleResult<Starship>(
    CATEGORY_ENUM.Starships,
    id ? id : ""
  );
  const isEnabled = data?.name ? true : false;
  const { data: films } = useFilms(data?.films ?? [], isEnabled);

  return (
    <PageContainer>
      <TableContainer component={Paper}>
        <AsyncCustomTable
          data={data}
          films={films}
          columns={STARSHIP_COLUMNS}
        />
      </TableContainer>
    </PageContainer>
  );
};
