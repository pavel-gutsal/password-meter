import styled from 'styled-components';
import { STRENGTH_STATUS } from '../../constants';
import { colors } from '../../Theme/colors';

export const SContainer = styled.div`
  width: 450px;
  height: 210px;
  padding: 25px;
  box-shadow: 0 0 10px 0 #00000040;
  background: #faffff;

  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

type InputProps = {
  status?: STRENGTH_STATUS | null;
};

export const SInputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const SInput = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  color: #313131;
  padding: 5px 15px;
  border: 1px solid ${({ status }) => (status ? colors[status] : colors.grey)};
  outline: none;
  border-radius: 10px 0 0 10px;
`;

export const SLabel = styled.label``;

type TitleProps = {
  status?: STRENGTH_STATUS | null;
};

export const STitle = styled.h3<TitleProps>`
  font-size: 14px;
  color: ${({ status }) => (status ? colors[status] : colors.grey)};
  margin-bottom: 5px;
`;

export const SProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

interface SProgressBarProps {
  width: number;
  color: string;
  bg: string;
}

export const SProgressBar = styled.div<SProgressBarProps>`
  width: 100%;
  border-radius: 4px;
  height: 6px;
  background: ${({ bg }) => bg};
  position: relative;
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    background: ${({ color }) => color};
    border-radius: 4px;
    height: 100%;
    width: ${({ width }) => `${width}%`};
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
`;

interface SDescriptionProps {
  status?: STRENGTH_STATUS | null;
}

export const SDescription = styled.p<SDescriptionProps>`
  font-size: 14px;
  color: ${({ status }) => (status ? colors[status] : `#3d3d3d`)};
`;
