import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
    const [note, SetNotes] = React.useState({ title: "", content: "" });
    const [zoomState, SetZoom] = React.useState(false);
    function handleChange(event) {
        let changeElement = event.target.name;
        let newValue = event.target.value;
        SetNotes(prv => {
            return { ...prv, [changeElement]: newValue }
        });
    }
    function expand() {
        console.log("Hello");
        SetZoom(true);
    }
    return (
        <div>
            <form className="create-note">
                <input style={{ display: zoomState ? "Block" : "None" }} onChange={handleChange} name="title" placeholder="Title" value={note.title} />
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={zoomState ? "3" : "1"} value={note.content} />
                <Zoom in={zoomState}>
                    <Fab onClick={(event) => {
                        props.addElement(note);
                        SetNotes(prv => {
                            return { title: "", content: "" };
                        })
                        event.preventDefault();

                    }}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;