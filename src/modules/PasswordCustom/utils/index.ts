import { Validation } from '../types';
import {
  STRENGTH,
  letterList,
  numberList,
  specialCharacterList,
} from '../../../constants';

const exludeCharacters = new RegExp(
  `[^${letterList}${numberList}${specialCharacterList}]`,
  'g'
);

export const passwordValidator = (password: string): STRENGTH => {
  if (!password) return STRENGTH.EMPTY;

  const validator = password.split('').reduce(
    (prev, curr) => {
      if (curr.match(/[a-zA-z]/g)) {
        prev.validCharacters.letter = (prev.validCharacters?.letter || 0) + 1;
      } else if (curr.match(/[\d]/g)) {
        prev.validCharacters.number = (prev.validCharacters?.number || 0) + 1;
      } else if (curr.match(/[@$!%*#?&*+-/]/g)) {
        prev.validCharacters.specCharacter =
          (prev.validCharacters?.specCharacter || 0) + 1;
      } else if (curr.match(exludeCharacters)) {
        prev.invalidCharacter = (prev.invalidCharacter || 0) + 1;
      }
      return prev;
    },
    { validCharacters: {}, invalidCharacter: null } as Validation
  );

  const passwordStrength = validator.validCharacters
    ? Object.entries(validator.validCharacters).length
    : 0;

  if (validator.invalidCharacter) {
    return STRENGTH.INVALID_CHARATCTER;
  } else if (password.length < 8) {
    return STRENGTH.SHORT;
  } else if (
    passwordStrength === 1 &&
    password.length >= 8 &&
    !validator.invalidCharacter
  ) {
    return STRENGTH.WEAK;
  } else if (
    passwordStrength === 2 &&
    password.length >= 8 &&
    !validator.invalidCharacter
  ) {
    return STRENGTH.MEDIUM;
  } else if (
    passwordStrength === 3 &&
    password.length >= 8 &&
    !validator.invalidCharacter
  ) {
    return STRENGTH.STRONG;
  }

  return STRENGTH.EMPTY;
};
