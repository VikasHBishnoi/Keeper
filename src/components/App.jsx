import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import allNotes from "../Notes";
import CreateArea from "./CreateArea";
function App() {
    const [custoNotes, SetNotes] = React.useState([{ title: "1", content: "1" }]);
    function addElement(element) {
        console.log(element);
        SetNotes((prv) => {
            return [...prv, element];
        });
    }
    function deleteElement(ind) {
        console.log("delete " + ind);

        SetNotes([...custoNotes.slice(0, ind), ...custoNotes.slice(ind + 1)]);

    }
    return (
        <div>
            <Header />
            <CreateArea addElement={addElement} />
            {/* {allNotes.map(note => {
                return <Note key={note.key} title={note.title} content={note.content} />
            })} */}
            {custoNotes.map((note, ind) => {
                return <Note ind={ind} key={ind} title={note.title} content={note.content} deleteElement={deleteElement} />
            })}
            <Footer />
        </div>
    );
}
export default App;
