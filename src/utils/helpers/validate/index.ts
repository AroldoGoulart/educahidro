/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const checkCPF = (cpf?: string): boolean => {
  cpf = cpf?.replace(/\D/g, '');

  if (!cpf) return false;
  if (cpf.length !== 11) return false;

  const cpfDigits = cpf.split('').map(Number);
  if (new Set(cpfDigits).size === 1) return false;
  const [a, b, c, d, e, f, g, h, i, j, k] = cpfDigits;

  // @ts-ignore
  const sumA = a + b + c + d + e + f + g + h + i;
  const remainderA = sumA % 11;

  const expectedJ = remainderA < 2 ? 0 : 11 - remainderA;

  if (j !== expectedJ) return false;

  // @ts-ignore
  const sumB = a + b + c + d + e + f + g + h + i + j;
  const remainderB = sumB % 11;
  const expectedK = remainderB < 2 ? 0 : 11 - remainderB;

  if (k !== expectedK) return false;

  // Check if the first two digits are valid Brazilian states
  const validStates = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '90',
  ];

  if (!validStates.includes(cpf.substring(0, 2))) return false;

  return true;
};

export const was1Uppercase = (value: string) => {
  return /[A-Z]/.test(value);
};

export const was1Number = (value: string) => {
  return /[0-9]/.test(value);
};

export const was1SpecialCharacter = (value: string) => {
  // eslint-disable-next-line no-useless-escape
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
};
