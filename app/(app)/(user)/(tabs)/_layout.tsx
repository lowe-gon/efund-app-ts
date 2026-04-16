import { userTabNavigations } from '@/constants/navigations';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      {userTabNavigations.map(({ name, title, icon }) => (
        <NativeTabs.Trigger key={name} name={name}>
          <NativeTabs.Trigger.Label>{title}</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            sf={{
              default: icon.default,
              selected: icon.selected,
            }}
            md="home"
          />
        </NativeTabs.Trigger>
      ))}
    </NativeTabs>
  );
}
