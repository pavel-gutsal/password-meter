import {
  STRENGTH_DESCRIPTION,
  STRENGTH_STATUS,
  STROKE_COLOR,
  TRAIL_COLOR,
} from '../../constants';

export interface PasswordValidity {
  progressBar: number;
  strokeColor: STROKE_COLOR;
  trailColor: TRAIL_COLOR;
  description: null | STRENGTH_DESCRIPTION;
  status: null | STRENGTH_STATUS;
}
