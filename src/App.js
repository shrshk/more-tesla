/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { TestPageContainer } from './resource/test/view/test.container'
import TeslaBottomNav from './resource/TeslaBottomNav';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const App: () => Node = () => {

  return (
      <>
        <TeslaBottomNav/>
      {/*<TestPageContainer/>*/}
      </>
  );
};

export default App;
