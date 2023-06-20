import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { deleteQuestion } from "@/redux/Questions/questionsSlice";
import Button from "./button";
import Modal from "@/components/modal";
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
  const [questionToEdit, setQuestionToEdit] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.profile);
  const allQuestions = useSelector((state) => state.questions);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    return;
  }, [isLoggedIn, router]);

  const onModalOpen = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
  };

  const onModalClose = () => {
    setIsOpenModal(false);
    setQuestionToEdit(false);
  };

  const handleEditBtnClick = (question) => {
    setQuestionToEdit(question);
    setIsOpenModal(true);
  };

  return (
    <main style={{ flexGrow: 1, padding: "20px" }}>
      <div className="container">
        <Button
          type="button"
          handleClick={onModalOpen}
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
              {allQuestions.map((question, index) => {
                return (
                  <tr key={index}>
                    <td className={s.row}>{question.id}</td>
                    <td className={s.row}>{question.topic}</td>
                    <td className={s.row}>{question.question_name}</td>
                    <td className={s.row}>{question.difficulty}</td>
                    <td className={s.row}>75%</td>
                    <td className={s.row}>123</td>
                    <td className={`${s.row_icons} ${s.row}`}>
                      <Button
                        type="button"
                        svgIcon={<FiEdit2 size={22} />}
                        btnclass="iconButton"
                        handleClick={() => {
                          handleEditBtnClick(question);
                        }}
                      />
                      <Button
                        type="button"
                        svgIcon={<RiDeleteBin5Line size={22} />}
                        btnclass="iconButton"
                        handleClick={() =>
                          dispatch(deleteQuestion(question.id))
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {isOpenModal && (
        <Modal onModalClose={onModalClose} questionToEdit={questionToEdit} />
      )}
    </main>
  );
};

export default MainContent;
