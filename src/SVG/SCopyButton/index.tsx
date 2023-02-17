import classNames from 'classnames';
import { STRENGTH_STATUS } from '../../constants';
import './SCopyButton.styles.css';

interface Props {
  status: STRENGTH_STATUS | null;
}

export const SCopyButton = ({ status }: Props) => {
  return (
    <button type="button" className={classNames('Copy__svg', `${status}__svg`)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path d="M200 976q-33 0-56.5-23.5T120 896V336h80v560h440v80H200Zm160-160q-33 0-56.5-23.5T280 736V256q0-33 23.5-56.5T360 176h360q33 0 56.5 23.5T800 256v480q0 33-23.5 56.5T720 816H360Zm0-80h360V256H360v480Zm0 0V256v480Z" />
      </svg>
    </button>
  );
};
