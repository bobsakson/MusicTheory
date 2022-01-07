import { majorKeys } from "./majorkey.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function MajorKey() {
    return (
        // <TableContainer component={Paper}>
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
                    majorKeys.map(key => {
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
        // </TableContainer>
    );
}

export default MajorKey;