export enum StudentActionTypes {
  FETCH_ALL_STUDENTS = "fetch_all_students",
  FETCH_ALL_STUDENTS_SUCCESS = "fetch_all_students_success",
  FETCH_ALL_STUDENTS_ERROR = "fetch_all_students_error",

  FETCH_ALL_STUDENTS_CURRENT = "fetch_all_students_current",
  FETCH_ALL_STUDENTS_CURRENT_SUCCESS = "fetch_all_students_current_success",
  FETCH_ALL_STUDENTS_CURRENT_ERROR = "fetch_all_students_current_error",

  UPDATE_SCORE = "update_score",
}

export enum ScoreActionTypes {
  SAVE_SCORE = "save_score",
  SAVE_SCORE_SUCCESS = "save_score_success",
  SAVE_SCORE_ERROR = "save_score_error",
}
