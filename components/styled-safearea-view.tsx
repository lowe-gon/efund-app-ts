import type React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withUniwind } from 'uniwind';

const StyledSafeAreaViewBase = withUniwind(SafeAreaView);

interface IStyledSafeAreaViewProps extends React.ComponentProps<typeof StyledSafeAreaViewBase> {
  children: React.ReactNode;
}

export default function StyledSafeAreaView({ children, ...props }: IStyledSafeAreaViewProps) {
  return <StyledSafeAreaViewBase {...props}>{children}</StyledSafeAreaViewBase>;
}
