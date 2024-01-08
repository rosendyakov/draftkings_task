import { useLocation, useParams } from "react-router-dom";
import { PageContainer } from "../pageContainer/PageContainer";
import { Paper, TableContainer } from "@mui/material";
import { CustomTable } from "../table/CustomTable";
import { Planet } from "../../utils/types/types";
import {
  CATEGORY_ENUM,
  VEHICLE_COLUMNS,
} from "../../utils/constants/constants";
import { AsyncCustomTable } from "../table/AsyncCustomTable";

export const PlanetDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const state: Planet = location.state;
  if (state) {
    return (
      <PageContainer>
        <TableContainer component={Paper}>
          <CustomTable data={state} columns={VEHICLE_COLUMNS} />
        </TableContainer>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <TableContainer component={Paper}>
        <AsyncCustomTable
          endpoint={CATEGORY_ENUM.Vehicles}
          id={id || ""}
          columns={VEHICLE_COLUMNS}
        />
      </TableContainer>
    </PageContainer>
  );
};
