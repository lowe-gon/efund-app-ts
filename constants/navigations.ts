import type { Icon } from '@tabler/icons-react-native';
import { IconFileInvoice, IconPigMoney, IconSmartHome, IconUser } from '@tabler/icons-react-native';

export type TNavigations = {
  title: string;
  name: string;
  icon: Icon;
};

export const userTabNavigations: TNavigations[] = [
  {
    title: 'Home',
    name: 'index',
    icon: IconSmartHome,
  },
  {
    title: 'Bills',
    name: 'bills',
    icon: IconFileInvoice,
  },
  {
    title: 'Loans',
    name: 'loans',
    icon: IconPigMoney,
  },
  {
    title: 'Account',
    name: 'account',
    icon: IconUser,
  },
];
