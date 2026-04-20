import {
  AlertCircleIcon,
  CustomerSupportIcon,
  DocumentValidationIcon,
  Idea01Icon,
  SecurityLockIcon,
  TelephoneIcon,
  UserIcon,
  UserSwitchIcon,
} from '@hugeicons/core-free-icons';
import { type IconSvgElement } from '@hugeicons/react-native';
import type { Href } from 'expo-router';
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

type AccountCommonNavigationProps = {
  title: string;
  path: Href;
  icon: IconSvgElement;
};

type AccountTabsNavigationProps = {
  account: AccountCommonNavigationProps[];
  general: AccountCommonNavigationProps[];
};

export const accountNavigations: AccountTabsNavigationProps = {
  account: [
    {
      title: 'Personal Information',
      path: '/',
      icon: UserIcon,
    },
    {
      title: 'Co-Browser',
      path: '/',
      icon: UserSwitchIcon,
    },
    {
      title: 'Contact Referrence',
      path: '/',
      icon: TelephoneIcon,
    },
  ],
  general: [
    {
      title: 'Appearance',
      path: '/',
      icon: Idea01Icon,
    },
    {
      title: 'Privacy Policy',
      path: '/',
      icon: SecurityLockIcon,
    },
    {
      title: 'Terms & Conditions',
      path: '/',
      icon: DocumentValidationIcon,
    },
    {
      title: 'About',
      path: '/',
      icon: AlertCircleIcon,
    },
    {
      title: 'Support',
      path: '/',
      icon: CustomerSupportIcon,
    },
  ],
};
