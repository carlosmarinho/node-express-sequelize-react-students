import { StudentActionTypes } from "../action-types";
import { IScore } from "./scoreAction";

export interface IStudent {
  id: number;
  first_name: string;
  last_name: string;
  Score: IScore[];
}

interface FetchAllStudentsAction {
  type: StudentActionTypes.FETCH_ALL_STUDENTS;
}

interface FetchAllStudentsSuccesAction {
  type: StudentActionTypes.FETCH_ALL_STUDENTS_SUCCESS;
  payload: IStudent[];
}

interface FetchAllStudentsErrorAction {
  type: StudentActionTypes.FETCH_ALL_STUDENTS_ERROR;
  payload: string;
}

interface FetchAllStudentsCurrentAction {
  type: StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT;
}

interface FetchAllStudentsCurrentSuccesAction {
  type: StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT_SUCCESS;
  payload: IStudent[];
}

interface FetchAllStudentsCurrentErrorAction {
  type: StudentActionTypes.FETCH_ALL_STUDENTS_CURRENT_ERROR;
  payload: string;
}

interface UpdateScoreAction {
  type: StudentActionTypes.UPDATE_SCORE;
  payload: {
    studentId: number;
    score: Partial<IScore>;
  };
}

export type ActionStudent =
  | FetchAllStudentsAction
  | FetchAllStudentsSuccesAction
  | FetchAllStudentsErrorAction
  | FetchAllStudentsCurrentAction
  | FetchAllStudentsCurrentSuccesAction
  | FetchAllStudentsCurrentErrorAction
  | UpdateScoreAction;
