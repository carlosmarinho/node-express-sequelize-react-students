import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudentsWithCurrentScore,
  fetchAllStudentsWithScore,
} from "state/action-creator/studentActionCreator";
import { RootState } from "state/store";

const LastStudents = () => {
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
      <h3>Last Students!</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.first_name} {student.last_name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default LastStudents;
