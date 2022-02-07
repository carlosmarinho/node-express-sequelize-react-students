import { ScoreActionTypes, StudentActionTypes } from "state/action-types";
import service from "services";
import { IScore } from "state/actions/scoreAction";

interface IUpdateScore {
  score: Partial<IScore>;
  studentId: number;
}

export const updateScore = (data: IUpdateScore) => {
  return async (dispatch: any) => {
    dispatch({
      type: ScoreActionTypes.SAVE_SCORE,
    });

    try {
      const response = await service.put(`scores/${data.score.id}`, data);
      console.log("\n\n***\n response: ", response, data, "\n***\n");
      dispatch({
        type: ScoreActionTypes.SAVE_SCORE_SUCCESS,
        payload: response.data.score,
      });
      dispatch({
        type: StudentActionTypes.UPDATE_SCORE,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ScoreActionTypes.SAVE_SCORE_ERROR,
        payload: "Error saving score!",
      });
    }
  };
};
