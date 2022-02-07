import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentsWithScore } from "state/action-creator/studentActionCreator";
import { RootState } from "state/store";
import CardAllScore from "./CardAllScore";
import styled from "styled-components";

const ListStudent = styled.ul`
  padding: 0;
  width: 80%;
`;

const LastStudentsWithScore = () => {
  const dispatch = useDispatch();

  const { students, loading } = useSelector(
    (state: RootState) => state.studentReducers
  );

  useEffect(() => {
    dispatch(fetchAllStudentsWithScore());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (!students.length) return <div>No students found!</div>;

  return (
    <>
      <h2>Students and Score!</h2>
      <ListStudent>
        {students.map((student, i) => (
          <CardAllScore key={i} {...{ index: i, student }} />
        ))}
      </ListStudent>
    </>
  );
};
export default LastStudentsWithScore;
