import SimpleItem from "@/components/simpleItem";
import Modal from "@/components/modal";
import { nanoid } from "nanoid";
import { useState } from "react";

const tableTitles = [
  "ID",
  "Topic",
  "Question",
  "Difficulty",
  "Answer rate",
  "Total answers",
  "Options",
];

const MainContent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalClick = (e) => {
    e.preventDefault();
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main style={{ flexGrow: 1, padding: "20px" }}>
      <button type="button" onClick={handleModalClick}>
        Create new
      </button>
      <ul style={{ display: "flex" }}>
        {tableTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <ul>
        <SimpleItem key={nanoid()} text="123" />
      </ul>
      {isOpenModal && <Modal onModalClose={handleModalClick} />}
    </main>
  );
};

export default MainContent;
