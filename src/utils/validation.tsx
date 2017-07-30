export const isValid = {
  name: (name: string): boolean => {
    const pattern: RegExp = new RegExp('^[A-Z][a-z]+$');
    return isValue.notNull(name) && isValue.notEmpty(name) && isValue.hasNumberOfSymbols(name, 3) && pattern.test(name);
  },
  lastName: (lastName: string): boolean => {
    return isValid.name(lastName);
  },
  email: (email: string): boolean => {
    const pattern: RegExp = new RegExp('^[A-Za-z.]+[@][A-Za-z.]+[.][a-z]+$');
    return pattern.test(email);
  }
};

export const isValue = {
  notEmpty: (val: string) => {
    return val !== '';
  },
  notNull: (val: string | number) => {
    return val !== null || val !== undefined;
  },
  hasNumberOfSymbols: (val: string, minNumebr: number) => {
    return val.length >= minNumebr;
  }
};
