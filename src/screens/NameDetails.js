import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {loginUser} from '../actions/user';

class NameDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  handleNameInput = (text) => {
    this.setState({name: text});
  };
  render() {
    const {name} = this.state;
    const {loginUser, navigation} = this.props;
    return (
      <View style={styles.centerAlignParentContainer}>
        <Text style={styles.labelStyle}>Please Enter your Name: </Text>
        <TextInput
          autoCapitalize
          placeholder="Your name"
          defaultValue={name}
          onChangeText={this.handleNameInput}
        />
        <Button
          style={styles.textInputButton}
          title="Submit"
          onPress={() => {
            loginUser(name);
            navigation.navigate('eventsList');
          }}
        />
      </View>
    );
  }
}

export default connect(() => ({}), {loginUser})(NameDetails);
