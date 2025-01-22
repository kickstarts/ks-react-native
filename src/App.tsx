import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { verifyInstallation } from 'nativewind';

import ApplicationNavigator from '@/navigation';

import './global.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

export const storage = new MMKV();

export default function App() {
  verifyInstallation();

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ApplicationNavigator />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
