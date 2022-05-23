import { LeftColumnWrapper } from "./styles";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "state/store";
import LastStudents from "../Students/LastStudents";

const Separator = styled.hr`
  color: #ffffff;
  width: 100%;
`;

const LeftColumn = () => {
  const { studentsCurrentScore } = useSelector(
    (state: RootState) => state.studentReducers
  );

  const averageScore = () => {
    return (
      studentsCurrentScore.reduce((previous: any, current) => {
        return previous + current.Score[0].score;
      }, 0) / studentsCurrentScore.length
    );
  };
  return (
    <LeftColumnWrapper>
      <LastStudents />
      <Separator />
      {studentsCurrentScore.length > 0   && (
        <h3>Average Score: {averageScore().toFixed(2)}</h3>
      )}
    </LeftColumnWrapper>
  );
};

export default LeftColumn;
