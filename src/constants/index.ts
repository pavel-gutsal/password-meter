export enum STRENGTH {
  EMPTY = 'EMPTY',
  SHORT = 'SHORT',
  INVALID_CHARATCTER = 'INVALID_CHARATCTER',
  WEAK = 'WEAK',
  MEDIUM = 'MEDIUM',
  STRONG = 'STRONG',
}

export enum STROKE_COLOR {
  RED = '#F94A29',
  YELLOW = '#ffc906',
  GREEN = '#30e39e',
}

export enum TRAIL_COLOR {
  GREY = '#DCDCDC',
  RED = '#D61355',
}

export enum STRENGTH_DESCRIPTION {
  EMPTY = 'Please type password',
  SHORT = 'Password should contain at least 8 characters',
  INVALID_CHARATCTER = 'Typed password contains invalid characters',
  WEAK = 'Password is too week. It should contain at leas one letter, one number and one special character',
  MEDIUM = 'Password is medium. It should contain at leas one letter, one number and one special character',
  STRONG = 'Password is strong',
}

export enum STRENGTH_STATUS {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
}

export const letterList = 'a-zA-Z';
export const numberList = '0-9'; // can be changed with \d
export const specialCharacterList = '@$!%*#?&*+-/';

export const SEGMENTS = ['ant design', 'styled component'];
