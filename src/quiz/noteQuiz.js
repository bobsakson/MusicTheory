import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect, useRef } from "react";
import Button from '@mui/material/Button';
import { keys } from "../keys/keys.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import './quiz.css';
import { red } from '@mui/material/colors';
import { makeStyles } from "@material-ui/styles";

function NoteQuiz() {
  const notes = [];
  keys.map((mk) => {
    notes.push(mk.key);
  });

  const baseNotes = ["A", "B", "C", "D", "E", "F", "G"];
  const [notesInAKey, setNotesInAKey] = useState([]);
  const [answerKey, setAnswerKey] = useState([]);
  const [selectedKey, setSelectedKey] = useState("");
  const [answers, setAnswers] = useState(["A", "B", "C", "D", "E", "F", "G"]);
  const noteRefs = useRef([]);
  const elRef = useRef();

  const invalidNoteStyle = makeStyles({
    root: () => ({
      "backgroundColor": red
    })
  });
  const classes = invalidNoteStyle();

  const onKeyChange = (key) => {
    [0, 1, 2, 3, 4, 5].map((index) => {
      if (noteRefs.current[index]) {
        noteRefs.current[index].style.backgroundColor = "white";
      }
    });
    populateKeyNotes(key.target.value);
  };

  const checkAnswers = () => {
    answerKey.forEach((value, index) => {
      if (value !== answers[index]) {
        noteRefs.current[index].style.backgroundColor = "red";
        console.log('Position ' + index + ' value should be ' + value + ' but was ' + answers[index]);
      }
    });
  };

  const setSelectedAnswer = (e, note) => {
    const newAnswers = [...answers];
    const noteIndex = newAnswers.findIndex((element) => { return element[0] === note });
    newAnswers[noteIndex] = note + e.target.value;
    setAnswers(newAnswers);
  }

  const populateKeyNotes = (selectedKey) => {
    setSelectedKey(selectedKey);
    const noteIndex = baseNotes.indexOf(selectedKey[0]);
    const startNotes = baseNotes.slice(noteIndex + 1);
    const endNotes = baseNotes.slice(0, noteIndex);
    const combinedNotes = startNotes.concat(endNotes);

    setAnswerKey(keys.find(x => x.key === selectedKey).notes.filter(note => note !== selectedKey));
    console.log(answerKey);
    setAnswers(combinedNotes);
    setNotesInAKey(combinedNotes);
  };

  useEffect(() => {
    populateKeyNotes("C");
  }, []);

  return (
    <>
      <Box className='margin-item'>
        Key:

        <Select id="key" onChange={onKeyChange} defaultValue={"C"}>
          {
            notes.map(note => {
              return <MenuItem value={note} key={"nik" + note}>{note}</MenuItem>
            })
          }
        </Select>
      </Box>
      <Divider />
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
            <TableRow>
              <TableCell ref={elRef}>{selectedKey}</TableCell>

              {
                notesInAKey.map((note, index) => {
                  return <TableCell ref={el => (noteRefs.current[index] = el)}>{note}
                    <Select key={note + "note"} onChange={(e) => setSelectedAnswer(e, note)}>
                      <MenuItem value="" key={note + "naturalnote"}>&nbsp;</MenuItem>
                      <MenuItem value="b" key={note + "flatnote"}>b</MenuItem>
                      <MenuItem value="#" key={note + "sharpnote"}>#</MenuItem>
                    </Select>
                  </TableCell>
                })
              }

              <TableCell item>{selectedKey}</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>

      <div className='margin-item'>
        <Button variant="contained" onClick={checkAnswers}>Check My Answers!</Button>
      </div>
    </>
  );
}

export default NoteQuiz;