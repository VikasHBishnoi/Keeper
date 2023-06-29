import React from "react";
// import ReactDOM from "react-dom/client";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import allNotes from "../Notes";
// function makeNote(note) {
//     return <Note key={note.key} title={note.title} content={note.content} />;
// }
function App() {
    return (
        <div>
            <Header />
            {allNotes.map(note => {
                return <Note key={note.key} title={note.title} content={note.content} />
            })}
            <Footer />
        </div>
    );
}
// function App(){
//     return <h1>Hello Testing</h1>;
// }
export default App;
