import { StudentActionTypes } from "state/action-types";
import service from "services";

export const fetchAllStudents = () => {
  return async (dispatch: any) => {
    dispatch({
      type: StudentActionTypes.FETCH_ALL_STUDENTS,
    });

    try {
      const response = await service.get("students");
      dispatch({
        type: StudentActionTypes.FETCH_ALL_STUDENTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: StudentActionTypes.FETCH_ALL_STUDENTS_ERROR,
        payload: "Erro ao buscar os students!",
      });
    }
  };
};

export const fetchAllStudentsWithScore = () => {
  return async (dispatch: any) => {
    dispatch({
      type: StudentActionTypes.FETCH_ALL_STUDENTS,
    });

    try {
      const response = await service.get("students/scores");

      dispatch({
        type: StudentActionTypes.FETCH_ALL_STUDENTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: StudentActionTypes.FETCH_ALL_STUDENTS_ERROR,
        payload: "Error fetching students!",
      });
    }
  };
};

export const fetchAllStudentsWithCurrentScore = () => {
  return async (dispatch: any) => {
    dispatch({
      type: StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT,
    });

    try {
      const response = await service.get("students/scores/current");

      dispatch({
        type: StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT_ERROR,
        payload: "Error fetching students!",
      });
    }
  };
};
