import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NameDetails from './screens/NameDetails';
import EventsList from './screens/EventsList';
import EventDetails from './screens/EventDetails';
import EventTracker from './screens/EventTracker';

const AppNavigation = createStackNavigator(
  {
    nameScreen: {screen: NameDetails},
    eventsList: {screen: EventsList},
    eventDetails: {screen: EventDetails},
    eventTracker: {screen: EventTracker},
  },
  {
    initalRouteName: 'nameScreen',
    headerMode: 'none',
  },
);

const Routes = createAppContainer(AppNavigation);
export default Routes;
