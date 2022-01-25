import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Triads() {
  return (
      <div>
        <div>
          <h3>Key Signatures - Sharps</h3>
          <ul>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                  <TableCell>C</TableCell>
                  <TableCell>G</TableCell>
                  <TableCell>D</TableCell>
                  <TableCell>A</TableCell>
                  <TableCell>E</TableCell>
                  <TableCell>B</TableCell>
                  <TableCell>F</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ul>
        </div>
        <div>
          <h3>Key Signatures - Flats</h3>
          <ul>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                  <TableCell>F</TableCell>
                  <TableCell>B</TableCell>
                  <TableCell>E</TableCell>
                  <TableCell>A</TableCell>
                  <TableCell>D</TableCell>
                  <TableCell>G</TableCell>
                  <TableCell>C</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ul>
        </div>
        <div>
          <h3>Triads</h3>
          <ul>
            <li>Major - 1, 3, 5</li>
            <li>Minor - 1, b3, 5</li>
            <li>Diminished - 1, b3, b5</li>
            <li>Augmented - 1, 3, #5</li>
          </ul>
        </div>
        <div>
          <h3>Triad Formula</h3>
          <ul>
            <li>
              In the Key of C:
              <ul>
                <li>Spell the triad with no sharps or flats.</li>
                <li>Is the triad major, minor, or dimished?</li>
              </ul>
            </li>
            <li>If the root note is sharp or flat, change all of notes to either sharp or flat.</li>
            <li>Change the remaining notes to match the tonality of the triad.</li>
          </ul>
        </div>
        <div>
          <h3>Example - Db minor</h3>
          <ul>
            <li>D triad is made up of D, F, A notes.</li>
            <li>In the Key of C, D is natually minor as the ii chord.</li>
            <li>DbFbAb</li>
            <li>In the Key of Db, F is a natural note. Since this is Db minor, the F note is flat.</li>
          </ul>
        </div>
      </div>
  );
}

export default Triads;