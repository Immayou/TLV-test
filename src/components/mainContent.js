import SimpleItem from "@/components/simpleItem";
import Modal from "@/components/modal";
import { nanoid } from "nanoid";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Button from "./button";
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
      <div className="container">
        <Button
          type="button"
          handleClick={handleModalClick}
          text="Create new"
          btnclass="topBtn"
        />
        <div className={s.block_table}>
          <table>
            <thead>
              <tr>
                {tableTitles.map((title, index) => (
                  <th key={index} className={s.table_title}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableTitles.map((title, index) => {
                return (
                  <tr key={index}>
                    <td className={s.row}>{title}</td>
                    <td className={s.row}>{title}</td>
                    <td className={s.row}>{title}</td>
                    <td className={s.row}>{title}</td>
                    <td className={s.row}>{title}</td>
                    <td className={s.row}>{title}</td>
                    <td className={s.row}>
                      <Button
                        type="button"
                        svgIcon={<FiEdit2 size={22} />}
                        btnclass="iconButton"
                      />
                      <Button
                        type="button"
                        svgIcon={<RiDeleteBin5Line size={22} />}
                        btnclass="iconButton"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
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
