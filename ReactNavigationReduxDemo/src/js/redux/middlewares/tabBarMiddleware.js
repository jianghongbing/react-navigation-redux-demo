import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
export const tabBarMiddleware = createReactNavigationReduxMiddleware(state => state.nav)