import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  SIGN_UP_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import SignUpFormRouteComponent from './SignUpFormScene';
import AppScene from './AppScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene key={APP_SCENE} component={AppScene} />,
  <Scene initial key={SIGN_UP_SCENE} component={SignUpFormRouteComponent} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
