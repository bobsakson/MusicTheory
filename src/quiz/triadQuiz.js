import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect, useRef } from "react";
import Button from '@mui/material/Button';
import { majorKeys } from "../majorkey/majorkey.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './quiz.css';
import TextField from '@mui/material/TextField';

function TriadQuiz() {
  const notes = [];
  majorKeys.map((mk) => {
    notes.push(mk.majorKey);
  });

  const [answerKey, setAnswerKey] = useState([]);
  const triadRefs = useRef([]);
  const [chordI, setChordI] = useState("");
  const [chordII, setChordII] = useState("");
  const [chordIII, setChordIII] = useState("");
  const [chordIV, setChordIV] = useState("");
  const [chordV, setChordV] = useState("");
  const [chordVI, setChordVI] = useState("");
  const [chordVII, setChordVII] = useState("");
  const [chordVIII, setChordVIII] = useState("");

  const onKeyChange = (key) => {
    [0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
      if (triadRefs.current[index]) {
        triadRefs.current[index].style.backgroundColor = "white";
        triadRefs.current[index].value = "";
      }
    });

    setChordI("");
    setChordII("");
    setChordIII("");
    setChordIV("");
    setChordV("");
    setChordVI("");
    setChordVII("");
    setChordVIII("");

    populateKeyNotes(key.target.value);
  };

  const checkAnswers = () => {
    if (chordI !== answerKey[0]) {
      triadRefs.current[0].style.backgroundColor = "red";
    }

    if (chordII !== answerKey[1]) {
      triadRefs.current[1].style.backgroundColor = "red";
    }

    if (chordIII !== answerKey[2]) {
      triadRefs.current[2].style.backgroundColor = "red";
    }

    if (chordIV !== answerKey[3]) {
      triadRefs.current[3].style.backgroundColor = "red";
    }

    if (chordV !== answerKey[4]) {
      triadRefs.current[4].style.backgroundColor = "red";
    }

    if (chordVI !== answerKey[5]) {
      triadRefs.current[5].style.backgroundColor = "red";
    }

    if (chordVII !== answerKey[6]) {
      triadRefs.current[6].style.backgroundColor = "red";
    }

    if (chordVIII !== answerKey[7]) {
      triadRefs.current[7].style.backgroundColor = "red";
    }
  };

  const populateKeyNotes = (selectedKey) => {
    setAnswerKey(majorKeys.find(x => x.majorKey === selectedKey).triads);
  };

  useEffect(() => {
    populateKeyNotes("C");
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              Key:
              <Select id="key" onChange={onKeyChange} defaultValue={"C"}>
                {
                  notes.map(note => {
                    return <MenuItem value={note} key={"nik" + note}>{note}</MenuItem>
                  })
                }
              </Select>`
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>I</TableCell>
            <TableCell>
              <TextField
                id="chordI"
                variant="standard"
                ref={el => (triadRefs.current[0] = el)}
                value={chordI}
                onChange={(e) => setChordI(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>II</TableCell>
            <TableCell>
              <TextField
                id="chordII"
                variant="standard"
                ref={el => (triadRefs.current[1] = el)}
                value={chordII}
                onChange={(e) => setChordII(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>III</TableCell>
            <TableCell>
              <TextField
                id="chordIII"
                variant="standard"
                ref={el => (triadRefs.current[2] = el)}
                value={chordIII}
                onChange={(e) => setChordIII(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>IV</TableCell>
            <TableCell>
              <TextField
                id="chordIV"
                variant="standard"
                ref={el => (triadRefs.current[3] = el)}
                value={chordIV}
                onChange={(e) => setChordIV(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>V</TableCell>
            <TableCell>
              <TextField
                id="chordV"
                variant="standard"
                ref={el => (triadRefs.current[4] = el)}
                value={chordV}
                onChange={(e) => setChordV(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>VI</TableCell>
            <TableCell>
              <TextField
                id="chordVI"
                variant="standard"
                ref={el => (triadRefs.current[5] = el)}
                value={chordVI}
                onChange={(e) => setChordVI(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>VII</TableCell>
            <TableCell>
              <TextField
                id="chordVII"
                variant="standard"
                ref={el => (triadRefs.current[6] = el)}
                value={chordVII}
                onChange={(e) => setChordVII(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>VIII</TableCell>
            <TableCell>
              <TextField
                id="chordVIII"
                variant="standard"
                ref={el => (triadRefs.current[7] = el)}
                value={chordVIII}
                onChange={(e) => setChordVIII(e.target.value)}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className='margin-item'>
        <Button variant="contained" onClick={checkAnswers}>Check My Answers!</Button>
      </div>
    </>
  );
}

export default TriadQuiz;