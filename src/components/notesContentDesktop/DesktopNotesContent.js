import React from "react";
import "./DesktopNotesContent.css";

function DesktopNotesContent({ note }) {
  
  return (
    <div className="desktop__notes__content__note" >
      <div className="desktop__notes__content__details">
        <p>{note.content}</p>
      </div>
      <div className="desktop__notes__content__date__time__details">
        <span className="desktop__notes__content__date">{note.date}</span>&nbsp;&nbsp;•&nbsp;&nbsp;
        <span className="desktop__notes__content__time">{note.time}</span>
      </div>
    </div>
  );
}

export default DesktopNotesContent;
