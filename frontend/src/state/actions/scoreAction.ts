import { ScoreActionTypes } from "../action-types";
import { IStudent } from "./studentAction";
import { ISubject } from "./subjectAction";

export interface IScore {
  id: number;
  score: number;
  Subject: ISubject;
  Student: IStudent;
  createdAt: Date;
}

interface SaveScoreAction {
  type: ScoreActionTypes.SAVE_SCORE;
}

interface SaveScoreSuccessAction {
  type: ScoreActionTypes.SAVE_SCORE_SUCCESS;
  payload: IScore[];
}

interface SaveScoreErrorAction {
  type: ScoreActionTypes.SAVE_SCORE_ERROR;
  payload: string;
}

export type ActionScore =
  | SaveScoreAction
  | SaveScoreSuccessAction
  | SaveScoreErrorAction;
