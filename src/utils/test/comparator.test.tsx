import { fromArray } from '../comparator';
import * as moment from 'moment';
import { Garden } from '../../model/models';

export const MOCK_GARDENS: Garden[] = [
  {
    id: 1,
    label: 'string',
    address: 'string',
    buildDate: new Date(1201355534609),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 2,
    label: 'string',
    address: 'string',
    buildDate: new Date(1601355537609),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 3,
    label: 'string',
    address: 'string',
    buildDate: new Date(1111357534604),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 4,
    label: 'string',
    address: 'string',
    buildDate: new Date(1501357834678),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 5,
    label: 'string',
    address: 'string',
    buildDate: new Date(1001355534654),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 6,
    label: 'string',
    address: 'string',
    buildDate: new Date(1011445534677),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 7,
    label: 'string',
    address: 'string',
    buildDate: new Date(1221355534611),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 8,
    label: 'string',
    address: 'string',
    buildDate: new Date(902255534689),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: 'string',
    idFromSource: 2,
  },
  {
    id: 9,
    label: 'string',
    address: 'string',
    buildDate: new Date(1821355534611),
    elderate: 'string',
    email: 'string',
    phone: 'string',
    schoolType: 'string',
    www: '',
    idFromSource: 2,
  }
];
expect.addSnapshotSerializer({
  test: (val: Garden) => !!val.buildDate,
  print: (val: Garden) => `id: ${val.id} build date: ${moment(val.buildDate).format()} www: ${val.www}`
});

describe('Compare functions', () => {
  // test with Snapshot testing
  it('should return 3 kidergardens with highset build date (ST)', () => {
    expect(MOCK_GARDENS).toMatchSnapshot();
    expect(fromArray.get3Max(MOCK_GARDENS)).toMatchSnapshot();
    expect(MOCK_GARDENS).toMatchSnapshot();
  });
  // classic test
  it('should return 3 kidergardens with highset build date', () => {
    const gardensBeforeSort = MOCK_GARDENS.map(g => g.id).join(' ');
    // console.log(gardensBeforeSort);
    const newestThreeGardens: Garden[] = fromArray.get3Max(MOCK_GARDENS);
    const gardensAfterSort = MOCK_GARDENS.map(g => g.id).join(' ');
    // console.log(gardensAfterSort);
    expect(newestThreeGardens).toHaveLength(3);
    expect(newestThreeGardens.map(g => g.id)).toEqual([2, 4, 7]);
    expect(gardensBeforeSort).toEqual(gardensAfterSort);
  });
});
