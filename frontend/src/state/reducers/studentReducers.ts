import { StudentActionTypes } from "state/action-types";
import { IScore } from "state/actions/scoreAction";
import { ActionStudent, IStudent } from "state/actions/studentAction";

const initialState = {
  students: [],
  studentsCurrentScore: [],
  loading: false,
  success: null,
  error: null,
};

interface StudentState {
  students: IStudent[];
  studentsCurrentScore: IStudent[];
  loading: boolean;
  success: boolean | null;
  error: string | null;
}

const studentReducers = (
  state: StudentState = initialState,
  action: ActionStudent
): StudentState => {
  switch (action.type) {
    case StudentActionTypes.FETCH_ALL_STUDENTS:
      return {
        ...state,
        loading: true,
      };
    case StudentActionTypes.FETCH_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        success: true,
        loading: false,
      };
    case StudentActionTypes.FETCH_ALL_STUDENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    case StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT:
      return {
        ...state,
        loading: true,
      };
    case StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT_SUCCESS:
      return {
        ...state,
        studentsCurrentScore: action.payload,
        success: true,
        loading: false,
      };
    case StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    case StudentActionTypes.UPDATE_SCORE:
      const cur = {
        ...state,
        studentsCurrentScore: state.studentsCurrentScore.map((student) => {
          if (student.id === action.payload.studentId) {
            return {
              ...student,
              Score: student.Score.map((score) => {
                return {
                  ...score,
                  score: action.payload.score.score
                    ? action.payload.score.score
                    : score.score,
                };
              }),
            };
          }
          return student;
        }),
        students: state.students.map((student) => {
          if (student.id === action.payload.studentId) {
            return {
              ...student,
              Score: student.Score.map((score) => {
                if (score.id === action.payload.score.id) {
                  return {
                    ...score,
                    score: action.payload.score.score
                      ? action.payload.score.score
                      : score.score,
                  };
                }
                return score;
              }),
            };
          }
          return student;
        }),
      };

      console.log("\n\n***\n cur x state: ", cur, state, "\n***\n");

      return cur;

    default:
      return state;
  }
};

export default studentReducers;
