import { Kindergarten } from '../components/ContentComponent/ContentComponent';

export const fromArray = {
  get3Max: (gardens: Kindergarten[]) => {
    const newGardens = gardens.concat();
    newGardens.sort((a, b) => {
      if (a.buildDate === b.buildDate) { return 0; }
      return a.buildDate > b.buildDate ? -1 : 1;
    });
    return newGardens
      .filter(g => g.www !== '')
      .slice(0, 3);
  }
};
