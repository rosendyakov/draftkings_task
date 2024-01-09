import { useParams } from "react-router-dom";
import { PageContainer } from "../pageContainer/PageContainer";
import { Paper, TableContainer } from "@mui/material";
import {
  CATEGORY_ENUM,
  VEHICLE_COLUMNS,
} from "../../utils/constants/constants";
import { AsyncCustomTable } from "../table/AsyncCustomTable";
import { useFilms, useSingleResult } from "../../queries/results";
import { Vehicle } from "../../utils/types/types";

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
