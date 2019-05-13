/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { AppWithNavigatorState } from './src/js/components/navigators/TabBarNavigator'
// const App = _=>(<AppContainer/>)
import { Provider } from 'react-redux'
import {store} from './src/js/redux/store'

export default App = _=>(
    <Provider store={store}>
      <AppWithNavigatorState/>
    </Provider>
)

