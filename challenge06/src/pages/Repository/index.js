import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    return (
      <>
        <Browser
          onLoad={() => this.hideSpinner()}
          source={{ uri: repository.html_url }}
        />
        {visible && (
          <ActivityIndicator
            size="large"
            color="#7159c1"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
          />
        )}
      </>
    );
  }
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
