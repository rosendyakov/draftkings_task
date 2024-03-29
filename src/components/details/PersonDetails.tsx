import { ArrowBack } from "@mui/icons-material";
import { Button, Paper, TableContainer } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  useFilms,
  useSingleResult,
  useSpecies,
  useStarships,
  useVehicles,
} from "../../queries/results";
import { CATEGORY_ENUM, PERSON_COLUMNS } from "../../utils/constants/constants";
import { Person } from "../../utils/types/types";
import { PageContainer } from "../pageContainer/PageContainer";
import { AsyncCustomTable } from "../table/AsyncCustomTable";

export const PersonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSingleResult<Person>(CATEGORY_ENUM.People, id ? id : "");
  const isEnabled = data?.name ? true : false;
  const { data: films } = useFilms(data?.films ?? [], isEnabled);
  const { data: species } = useSpecies(data?.species ?? [], isEnabled);
  const { data: vehicles } = useVehicles(data?.vehicles ?? [], isEnabled);
  const { data: starships } = useStarships(data?.starships ?? [], isEnabled);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <Link to="/">
        <Button variant="text" startIcon={<ArrowBack />} onClick={handleClick}>
          Back
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <AsyncCustomTable
          data={data}
          films={films}
          species={species}
          vehicles={vehicles}
          starships={starships}
          columns={PERSON_COLUMNS}
        />
      </TableContainer>
    </PageContainer>
  );
};
