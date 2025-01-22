import type { StackScreenProps } from '@react-navigation/stack';
import type { Paths } from '@/navigation/paths';

export type RootStackParamList = {
  [Paths.Welcome]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
