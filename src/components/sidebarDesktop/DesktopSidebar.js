import React, { useEffect, useState } from "react";
import "./DesktopSidebar.css";
import CreateNotesPopup from "../createNotesPopupDesktop/CreateNotesPopup";
import NotesTitle from "../notesSidebar/NotesTitle";
import createBtn from "../../assets/Ellipse.png"
import createBtn2 from "../../assets/+.png";

function DesktopSidebar() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="desktop__sidebar">
      <div className="desktop__sidebar__title">Pocket Notes</div>
        <div className="desktop__sidebar__create__notes__btn" onClick={handleClick}>
          <img className="create_button_background" src={createBtn} alt="createBtn" />
          <img className="create_button_plus" src={createBtn2} alt="createBtn" />
        </div>
        
      <div className="desktop__sidebar__notes__title">
        {(
          titles.map((title, index) => <NotesTitle key={index} title={title} />)
        )}
      </div>
      {showPopup && (
        <div className="desktop__popup__overlay">
          <CreateNotesPopup
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
}

export default DesktopSidebar;
