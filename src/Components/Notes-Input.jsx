import React, { useContext } from "react";
import { Input, Card, FormGroup, Button } from "reactstrap";
import NotesContext from "../Context/NoteContext";

export default function NotesInput() {
   const { NotesTitle, setNotesTitle} = useContext(NotesContext);
  

  return (
    <div classname="bg-body">
      <Card
        body
        className="mb-3 mt-3 pb-4 mx-3"
        style={{ textAlign: "start", background: "#F1F2F6" }}
      >
        <h5
          style={{ color: "#203562" }}
          className="mb-3 head-clr"
        >{`Add a Note`}</h5>
        <FormGroup>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder={`Title`}
            //  onChange={(e)=>{
            //   Notes=e.target.value;
            //  }}
            // value={Notes}
            style={{ background: "#F1F2F6" }}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder={`Add a Note...`}
            //   onChange={handleChange}
            style={{ background: "#F1F2F6", height: "125px" }}
          />
        </FormGroup>

        <Input type="datetime-local" style={{ background: "#F1F2F6" }} />

        <Button
          style={{
            width: "15%",
            marginTop: "10px",
            marginLeft: "85%",
            backgroundColor: "#203562",
          }}
          //  onClick={handleSaveTask}
        >
          Save
        </Button>
      </Card>
    </div>
  );
}
// console.log(NotesTitle, Notesdescription);
  // function handleSaveTask() {
  //   // console.log(Notes)
  // }