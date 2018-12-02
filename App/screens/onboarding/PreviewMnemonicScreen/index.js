import React from 'react';
import NavigationProvider from '../../../NavigationProvider';
import BasePreviewMnemonicScreen from './base';

export default class PreviewMnemonicScreen extends React.Component {
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
        <BasePreviewMnemonicScreen {...this.props} />
      </NavigationProvider>
    );
  }
}
