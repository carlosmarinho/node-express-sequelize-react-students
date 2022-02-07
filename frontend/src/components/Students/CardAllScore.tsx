import { useDispatch } from "react-redux";
import { IStudent } from "state/actions/studentAction";
import { updateScore } from "state/action-creator/scoreActionCreator";
import styled from "styled-components";

const ItemStudent = styled.li`
  list-style-type: none;
  border: 1px solid #000000;
  margin-bottom: 20px;
  padding: 0px;
`;

const StudentName = styled.h4`
  text-align: center;
  padding: 10px;
  margin-top: 0px;
  background-color: lightgray;
`;

const CardScore = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px;
  padding: 0;
`;

const Subject = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const DateSub = styled.div`
  font-size: 12px;
`;

interface IPropsCardAllScore {
  student: IStudent;
  index: number;
}

const CardAllScore = ({ student, index }: IPropsCardAllScore) => {
  const { Score } = student;

  return (
    <ItemStudent key={student.id}>
      <StudentName>
        {student.first_name} {student.last_name}
      </StudentName>
      <CardScore>
        {Score.map((sc) => {
          let date = new Date(sc.createdAt);
          return (
            <Subject key={sc.id}>
              <div>
                <strong>{sc.Subject.name}: </strong>
                {sc.score}
              </div>
              <DateSub>
                {date.toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </DateSub>
            </Subject>
          );
        })}
      </CardScore>
    </ItemStudent>
  );
};

export default CardAllScore;
