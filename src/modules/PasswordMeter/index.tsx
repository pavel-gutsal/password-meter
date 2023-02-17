import { Input, Tooltip, Button, Progress } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import './PasswordMeter.styles.css';
import { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { strengthHandler } from './utils/strengthHandler';
import { passwordValidityInit, passwordValidityReducer } from '../../utils';

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
            status={
              passwordValidity.status === 'error' ||
              passwordValidity.status === 'warning'
                ? passwordValidity.status
                : ''
            }
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
