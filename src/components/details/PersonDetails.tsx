import { useLocation, useParams } from "react-router-dom";
import { PageContainer } from "../pageContainer/PageContainer";
import { Paper, TableContainer } from "@mui/material";
import { CustomTable } from "../table/CustomTable";
import {
  CATEGORY_ENUM,
  VEHICLE_COLUMNS,
} from "../../utils/constants/constants";
import { Person } from "../../utils/types/types";
import { AsyncCustomTable } from "../table/AsyncCustomTable";

export const PersonDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const state: Person = location.state;

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
