import type { SFSymbol } from 'expo-symbols';

type TIconProps = {
  selected: SFSymbol;
  default: SFSymbol;
};

export type TNavigations = {
  title: string;
  name: string;
  icon: TIconProps;
};

export const userTabNavigations: TNavigations[] = [
  {
    title: 'Home',
    name: 'index',
    icon: {
      default: 'house',
      selected: 'house.fill',
    },
  },

  {
    title: 'Loans',
    name: 'loans',
    icon: {
      default: 'banknote',
      selected: 'banknote.fill',
    },
  },
  {
    title: 'Account',
    name: 'account',
    icon: {
      default: 'person',
      selected: 'person.fill',
    },
  },
];
