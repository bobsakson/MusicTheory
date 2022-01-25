import { keys } from "./keys.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Keys() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>I</TableCell>
          <TableCell>ii</TableCell>
          <TableCell>iii</TableCell>
          <TableCell>IV</TableCell>
          <TableCell>V</TableCell>
          <TableCell>vi</TableCell>
          <TableCell>vii</TableCell>
          <TableCell>VIII</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          keys.map(key => {
            return <TableRow>
              {
                key.notes.map(note => {
                  return <TableCell>{note}</TableCell>
                })
              }
            </TableRow>
          })
        }
      </TableBody>
    </Table>
  );
}

export default Keys;