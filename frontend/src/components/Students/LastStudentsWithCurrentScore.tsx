import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentsWithCurrentScore } from "state/action-creator/studentActionCreator";
import { RootState } from "state/store";
import styled from "styled-components";
import CardCurrentScore from "./CardCurrentScore";

const ListStudent = styled.ul`
  padding: 0;
`;

const LastStudentsWithCurrentScore = () => {
  const { students, loading } = useSelector(
    (state: RootState) => state.studentReducers
  );

  const [scores, setScores] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudentsWithCurrentScore());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (!students.length) return <div>No students found!</div>;

  const handleSetScores = (val: string, i: number) => {
    let arValues = [];
    if (!scores.length) {
      arValues = students.map((st) => st.Score[0].score.toString());
    } else {
      arValues = [...scores];
    }

    arValues[i] = val;
    setScores(arValues);
  };

  return (
    <>
      <h3>Last Score from each Student!</h3>
      <ListStudent>
        {students.map((student, i) => (
          <CardCurrentScore
            key={i}
            {...{ index: i, student, scores, handleSetScores }}
          />
        ))}
      </ListStudent>
    </>
  );
};
export default LastStudentsWithCurrentScore;
