import { useEffect, useReducer, useState } from 'react';
import { passwordValidityInit, passwordValidityReducer } from '../../utils';
import { strengthHandler } from '../PasswordMeter/utils/strengthHandler';
import {
  SContainer,
  SInput,
  SLabel,
  STitle,
  SInputWrapper,
  SProgressBarContainer,
  SProgressBar,
  SDescription,
} from './PasswordCustom.styles';
import { SCopyButton } from '../../SVG/SCopyButton';
import { SCancelButton } from '../../SVG/SCancelButton';
import { STRENGTH } from '../../constants';

export const PasswordCustom = () => {
  const [password, setPassword] = useState('');
  const [passwordValidity, dispatch] = useReducer(
    passwordValidityReducer,
    passwordValidityInit
  );

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

  const deleteHandler = () => {
    setPassword('');
    dispatch({ type: STRENGTH.EMPTY });
  };

  return (
    <SContainer>
      <SLabel>
        <STitle status={passwordValidity.status}>Password</STitle>
        <SInputWrapper>
          <SInput
            onChange={passwordInputHandler}
            value={password}
            status={passwordValidity.status}
          />
          {password && <SCancelButton deleteHandler={deleteHandler} />}
          <SCopyButton status={passwordValidity.status}>Copy</SCopyButton>
        </SInputWrapper>
      </SLabel>
      <SProgressBarContainer>
        <SProgressBar
          width={passwordValidity.progressBar}
          color={passwordValidity.strokeColor}
          bg={passwordValidity.trailColor}
        />
        <SDescription status={passwordValidity.status}>
          {passwordValidity.description}
        </SDescription>
      </SProgressBarContainer>
    </SContainer>
  );
};
