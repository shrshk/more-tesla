/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { create as createAxios } from 'axios';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { axiosHelper } from 'src/utils';
import { configureStore } from './configure-store';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
    const appAxios = createAxios();
    axiosHelper.setAxios(appAxios);

    // Create redux store
    const initialState: any = {};
    const store: any = configureStore(initialState);

    return (
        <NavigationContainer>
            <ReduxProvider store={store}>
                <PaperProvider>
                    <App />
                </PaperProvider>
            </ReduxProvider>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => Main);