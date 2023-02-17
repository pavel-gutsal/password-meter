import {
  STRENGTH,
  STRENGTH_DESCRIPTION,
  STRENGTH_STATUS,
  STROKE_COLOR,
  TRAIL_COLOR,
} from '../constants';
import { PasswordValidity, PasswordValidityAction } from '../types';

export const passwordValidityInit: PasswordValidity = {
  progressBar: 0,
  strokeColor: STROKE_COLOR.RED,
  trailColor: TRAIL_COLOR.GREY,
  description: null,
  status: null,
};

export const passwordValidityReducer = (
  state: PasswordValidity,
  action: PasswordValidityAction
) => {
  switch (action.type) {
    case STRENGTH.EMPTY:
      return {
        progressBar: 0,
        strokeColor: STROKE_COLOR.RED,
        trailColor: TRAIL_COLOR.GREY,
        description: STRENGTH_DESCRIPTION.EMPTY,
        status: null,
      };
    case STRENGTH.INVALID_CHARATCTER:
      return {
        progressBar: 0,
        strokeColor: STROKE_COLOR.RED,
        trailColor: TRAIL_COLOR.RED,
        description: STRENGTH_DESCRIPTION.INVALID_CHARATCTER,
        status: STRENGTH_STATUS.ERROR,
      };
    case STRENGTH.SHORT:
      return {
        progressBar: 0,
        strokeColor: STROKE_COLOR.RED,
        trailColor: TRAIL_COLOR.RED,
        description: STRENGTH_DESCRIPTION.SHORT,
        status: STRENGTH_STATUS.ERROR,
      };
    case STRENGTH.WEAK:
      return {
        progressBar: 33,
        strokeColor: STROKE_COLOR.RED,
        trailColor: TRAIL_COLOR.GREY,
        description: STRENGTH_DESCRIPTION.WEAK,
        status: STRENGTH_STATUS.ERROR,
      };
    case STRENGTH.MEDIUM:
      return {
        progressBar: 66,
        strokeColor: STROKE_COLOR.YELLOW,
        trailColor: TRAIL_COLOR.GREY,
        description: STRENGTH_DESCRIPTION.MEDIUM,
        status: STRENGTH_STATUS.WARNING,
      };
    case STRENGTH.STRONG:
      return {
        progressBar: 100,
        strokeColor: STROKE_COLOR.GREEN,
        trailColor: TRAIL_COLOR.GREY,
        description: STRENGTH_DESCRIPTION.STRONG,
        status: STRENGTH_STATUS.SUCCESS,
      };
    default:
      return state;
  }
};
