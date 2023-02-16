import { STRENGTH } from '../constants';

const letterList = 'a-zA-Z';
const numberList = '0-9'; // can be changed with \d
const specialCharacterList = '@$!%*#?&*+-/';

const atleastOneLetter = `(?=.*[${letterList}])`;
const atleastOneNumber = `(?=.*[${numberList}])`;
const atleastOneSpecialSymbol = `(?=.*[${specialCharacterList}])`;

// string shall contain: at least 1 letter, 1 number, 1 special character, and at least 8 characters
const strongerPassword = new RegExp(
  `^${atleastOneLetter}${atleastOneNumber}${atleastOneSpecialSymbol}[${letterList}${numberList}${specialCharacterList}]{8,}$`,
  'g'
);

// string shall contain either: string of letters, string of numbers, string of special characters
const weakPassword = new RegExp(
  `^(([${letterList}]{8,})|([${numberList}]{8,})|([${specialCharacterList}]{8,}))$`,
  'g'
);

export const strengthHandler = (password: string): STRENGTH => {
  if (!password) {
    return STRENGTH.EMPTY;
  } else if (/[^a-zA-Z0-9@$!%*#?&*+-/]/g.test(password)) {
    return STRENGTH.INVALID_CHARATCTER;
  } else if (password.length < 8) {
    return STRENGTH.SHORT;
  } else if (password.match(strongerPassword)) {
    return STRENGTH.STRONG;
  } else if (password.match(weakPassword)) {
    return STRENGTH.WEAK;
  } else {
    return STRENGTH.MEDIUM;
  }
};
