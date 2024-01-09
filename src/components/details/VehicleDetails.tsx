import { Paper, TableContainer } from "@mui/material";
import { useParams } from "react-router-dom";

import { useFilms, useSingleResult } from "../../queries/results";
import {
  CATEGORY_ENUM,
  VEHICLE_COLUMNS,
} from "../../utils/constants/constants";
import { Vehicle } from "../../utils/types/types";
import { PageContainer } from "../pageContainer/PageContainer";
import { AsyncCustomTable } from "../table/AsyncCustomTable";

export const VehicleDetails = () => {
  const { id } = useParams();
  const { data } = useSingleResult<Vehicle>(
    CATEGORY_ENUM.Vehicles,
    id ? id : ""
  );
  const isEnabled = data?.name ? true : false;
  const { data: films } = useFilms(data?.films ?? [], isEnabled);

  return (
    <PageContainer>
      <TableContainer component={Paper}>
        <AsyncCustomTable data={data} films={films} columns={VEHICLE_COLUMNS} />
      </TableContainer>
    </PageContainer>
  );
};
