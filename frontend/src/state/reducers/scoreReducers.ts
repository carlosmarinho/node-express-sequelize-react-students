import { ScoreActionTypes } from "state/action-types";
import { ActionScore, IScore } from "state/actions/scoreAction";

const initialState = {
  score: {},
  loading: false,
  success: null,
  error: null,
};

interface ScoreState {
  score: IScore | {};
  loading: boolean;
  success: boolean | null;
  error: string | null;
}

const scoreReducers = (
  state: ScoreState = initialState,
  action: ActionScore
) => {
  switch (action.type) {
    case ScoreActionTypes.SAVE_SCORE:
      return {
        ...state,
        loading: true,
      };
    case ScoreActionTypes.SAVE_SCORE_SUCCESS:
      return {
        ...state,
        score: action.payload,
        success: true,
        loading: false,
      };
    case ScoreActionTypes.SAVE_SCORE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

export default scoreReducers;
