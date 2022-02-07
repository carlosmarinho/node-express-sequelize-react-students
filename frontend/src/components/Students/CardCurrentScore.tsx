import { useDispatch } from "react-redux";
import { IStudent } from "state/actions/studentAction";
import { updateScore } from "state/action-creator/scoreActionCreator";
import styled from "styled-components";

const ItemStudent = styled.li`
  list-style-type: none;
  border: 1px solid #ffffff;
  margin-bottom: 20px;
  padding: 0px;
`;

const StudentName = styled.h4`
  text-align: center;
  padding: 10px;
  margin-top: 0px;
  background-color: #3d82ab;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;

  input {
    margin: 10px 0;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

interface IPropsCardCurrentScore {
  student: IStudent;
  scores: string[];
  index: number;
  handleSetScores: (value: string, i: number) => void;
}

const CardCurrentScore = ({
  student,
  scores,
  index,
  handleSetScores,
}: IPropsCardCurrentScore) => {
  const dispatch = useDispatch();

  const { Score } = student;

  const handleSubmit = (e: any) => {
    console.log("\n\n***\n id: ", student, "\n***\n");
    e.preventDefault();
    dispatch(
      updateScore({
        studentId: student.id,
        score: { id: Score[0].id, score: parseFloat(scores[index]) },
      })
    );
  };

  return (
    <ItemStudent key={student.id}>
      <StudentName>
        {student.first_name} {student.last_name}
      </StudentName>
      <Form>
        <Label>
          Subject:
          {Score[0].Subject.name}
        </Label>
        <input
          type="text"
          value={scores.length ? scores[index] : Score[0].score}
          onChange={(e) => {
            handleSetScores(e.target.value, index);
          }}
        />
        <button
          disabled={
            !scores[index] || Score[0].score.toString() === scores[index]
          }
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </button>
      </Form>
    </ItemStudent>
  );
};

export default CardCurrentScore;
