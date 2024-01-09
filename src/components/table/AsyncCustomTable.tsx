import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from "../../utils/types/types";

type AsyncCustomTableProps = {
  data: Person | Planet | Vehicle | Starship | undefined;
  films: Film[] | undefined;
  species?: Species[];
  vehicles?: Vehicle[];
  starships?: Starship[];
  residents?: Person[];
  columns: { label: string; key: string }[];
};

export const AsyncCustomTable = ({
  data,
  films,
  species,
  vehicles,
  starships,
  residents,
  columns,
}: AsyncCustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950, width: 1000 }} aria-label="details table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell>{column.label}</TableCell>
            ))}
            {species && <TableCell>Species</TableCell>}
            {vehicles && <TableCell>Vehicles</TableCell>}
            {starships && <TableCell>Starships</TableCell>}
            {residents && <TableCell>Residents</TableCell>}
            <TableCell>Films</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && Object.keys(data).length > 0 ? (
            <>
              {columns.map((column) => (
                <TableCell>
                  <Typography variant="body2">{data[column.key]}</Typography>
                </TableCell>
              ))}
            </>
          ) : (
            <TableCell>No data</TableCell>
          )}
          {species && (
            <TableCell>
              {species?.map((specie) => (
                <Typography variant="body2">{specie.name}</Typography>
              ))}
            </TableCell>
          )}
          {vehicles && (
            <TableCell>
              {vehicles?.map((vehicle) => (
                <Typography variant="body2">{vehicle.name}</Typography>
              ))}
            </TableCell>
          )}
          {starships && (
            <TableCell>
              {starships?.map((starship) => (
                <Typography variant="body2">{starship.name}</Typography>
              ))}
            </TableCell>
          )}

          {residents && (
            <TableCell>
              {residents?.map((resident) => (
                <Typography variant="body2">{resident.name}</Typography>
              ))}
            </TableCell>
          )}

          {films && (
            <TableCell>
              {films?.map((film) => (
                <Typography variant="body2">{film.title}</Typography>
              ))}
            </TableCell>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
