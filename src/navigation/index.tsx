import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import type { RootStackParamList } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import { Welcome } from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Welcome} name={Paths.Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
