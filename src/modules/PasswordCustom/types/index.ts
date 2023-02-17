interface validCharacters {
  letter: number | undefined;
  number: number | undefined;
  specCharacter: number | undefined;
}

export interface Validation {
  validCharacters: validCharacters;
  invalidCharacter: number | null;
}
