import { Input, Tooltip, Button, Progress } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import './PasswordMeter.styles.css';
import { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { strengthHandler } from '../utils/strengthHandler';
import {
  STRENGTH,
  STRENGTH_DESCRIPTION,
  STRENGTH_STATUS,
  STROKE_COLOR,
  TRAIL_COLOR,
} from '../constants';
import { PasswordValidity } from './type';

const passwordValidityInit: PasswordValidity = {
  progressBar: 0,
  strokeColor: STROKE_COLOR.RED,
  trailColor: TRAIL_COLOR.GREY,
  description: null,
  status: null,
};

interface PasswordValidityAction {
  type: STRENGTH;
}

const passwordValidityReducer = (
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

export const PasswordMeter = () => {
  const [passwordValidity, dispatch] = useReducer(
    passwordValidityReducer,
    passwordValidityInit
  );
  const [password, setPassword] = useState('');

  const validatePassword = () => {
    dispatch({ type: strengthHandler(password) });
  };

  useEffect(() => {
    const debounceValidator = setTimeout(validatePassword, 400);

    return () => clearTimeout(debounceValidator);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="PasswordMeter">
      <label>
        <h3
          className={classNames(
            'PasswordMeter__title',
            passwordValidity.status === 'error' && 'error',
            passwordValidity.status === 'warning' && 'warning',
            passwordValidity.status === 'success' && 'success'
          )}
        >
          Password
        </h3>
        <Input.Group compact>
          <Input
            value={password}
            onChange={passwordInputHandler}
            status={passwordValidity.status}
            className={classNames(
              'PasswordMeter__input',
              passwordValidity.status === 'success' && 'success--border'
            )}
            allowClear
          />
          <Tooltip className="PasswordMeter__copy" title="copy password">
            <CopyToClipboard text={password}>
              <Button icon={<CopyOutlined />} style={{ width: 50 }} />
            </CopyToClipboard>
          </Tooltip>
        </Input.Group>
      </label>
      <div className="PasswordMeter__progressBarContainer">
        <Progress
          className="PasswordMeter__progressBar"
          percent={passwordValidity.progressBar}
          strokeColor={passwordValidity.strokeColor}
          trailColor={passwordValidity.trailColor}
          showInfo={false}
        />
        <p
          className={classNames(
            'PasswordMeter__description',
            passwordValidity.status === 'error' && 'error',
            passwordValidity.status === 'warning' && 'warning',
            passwordValidity.status === 'success' && 'success'
          )}
        >
          {passwordValidity.description}
        </p>
      </div>
    </div>
  );
};
