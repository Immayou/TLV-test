import SimpleItem from "@/components/simpleItem";
import Modal from "@/components/modal";
import { nanoid } from "nanoid";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import s from "../styles/Home.module.css";

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
      <div className={s.block_table}>
        <ul className={s.table}>
          {tableTitles.map((title, index) => (
            <li key={index} className={s.table_title}>
              {title}
            </li>
          ))}
        </ul>
        <ul className={s.table}>
          {tableTitles.map((title, index) => {
            const iconsItem = index === 6;
            return iconsItem ? (
              <li key={index} className={s.row}>
                <FiEdit2 size={22} style={{ marginRight: "15px" }} />
                <RiDeleteBin5Line size={22} />
              </li>
            ) : (
              <li key={index} className={s.row}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>

      <ul style={{ display: "flex" }}></ul>
      <ul>
        <SimpleItem key={nanoid()} text="123" />
      </ul>

      {isOpenModal && <Modal onModalClose={handleModalClick} />}
    </main>
  );
};
<div className={s.block_table}>
  <ul className={s.table}>
    <li className={s.table_title}>Заголовок 1</li>
    <li className={s.row}>1 столбец</li>
  </ul>
</div>;

export default MainContent;
