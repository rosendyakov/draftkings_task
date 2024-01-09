import { Paper, TableContainer } from "@mui/material";
import { useParams } from "react-router-dom";

import { useFilms, useResidents, useSingleResult } from "../../queries/results";
import { CATEGORY_ENUM, PLANET_COLUMNS } from "../../utils/constants/constants";
import { Planet } from "../../utils/types/types";
import { PageContainer } from "../pageContainer/PageContainer";
import { AsyncCustomTable } from "../table/AsyncCustomTable";

export const PlanetDetails = () => {
  const { id } = useParams();
  const { data } = useSingleResult<Planet>(CATEGORY_ENUM.Planets, id ? id : "");
  const isEnabled = data?.name ? true : false;
  const { data: films } = useFilms(data?.films ?? [], isEnabled);
  const { data: residents } = useResidents(data?.residents ?? [], isEnabled);

  return (
    <PageContainer>
      <TableContainer component={Paper}>
        <AsyncCustomTable
          data={data}
          films={films}
          residents={residents}
          columns={PLANET_COLUMNS}
        />
      </TableContainer>
    </PageContainer>
  );
};
