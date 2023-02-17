import { STRENGTH_STATUS } from '../constants';

export interface PasswordValidity {
  progressBar: number;
  strokeColor: STROKE_COLOR;
  trailColor: TRAIL_COLOR;
  description: null | STRENGTH_DESCRIPTION;
  status: null | STRENGTH_STATUS;
}

export interface PasswordValidityAction {
  type: STRENGTH;
}
