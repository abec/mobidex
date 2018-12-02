import React from 'react';
import NavigationProvider from '../../../NavigationProvider';
import BaseSendScreen from './base';

export default class SendScreen extends React.Component {
  static options() {
    return {
      topBar: {
        visible: false,
        drawBehind: true
      }
    };
  }

  render() {
    return (
      <NavigationProvider>
        <BaseSendScreen {...this.props} />
      </NavigationProvider>
    );
  }
}
