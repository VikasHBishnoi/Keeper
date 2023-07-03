import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import allNotes from "../Notes";
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
export default App;
