import { isValid } from '../validation';

const VALID_NAME: string = 'Pavel';
const INVALID_NAMES: string[] = ['pavel', 'PAvel', 'Pav3l', 'P***l', 'Pa'];
const VALID_EMAIL: string = 'pavel@eis.com';
const LAST_NAME_VALID: string = 'Surinin';

describe('validation utlits', () => {
  it('should validate name and return true', () => {
    const isValidName = isValid.name(VALID_NAME);
    expect(isValidName).toBeTruthy();
  });
  it('should validate invalid names and return false', () => {
    INVALID_NAMES.forEach((name) => {
      expect(isValid.name(name)).toBeFalsy();
    });
  });
  it('should validate email and return true', () => {
    expect(isValid.email(VALID_EMAIL)).toBeTruthy();
  });
  it(`should validate lastname: ${LAST_NAME_VALID} and return true`, () => {
    expect(isValid.lastName(LAST_NAME_VALID)).toBeTruthy();
  });
  it('should modify validate and find 3 values', () => {
    let namesAndEmails = INVALID_NAMES;
    namesAndEmails.push(VALID_EMAIL);
    namesAndEmails.push(LAST_NAME_VALID);
    const emails = namesAndEmails
      .filter(str => !isValid.name(str))
      .map(str => str.concat('@gmail.com'))
      .filter(str => isValid.email(str));
    expect(emails.length).toEqual(3);
  });
});
