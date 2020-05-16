import React, {PureComponent} from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {AddEvent} from '../actions/user';

class EventDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: {},
    };
  }

  componentDidMount() {
    const {
      state: {params},
    } = this.props.navigation;
    this.setState({eventDetails: params.itemDetails});
  }

  render() {
    const {eventDetails} = this.state;
    const {navigation, AddEvent} = this.props;
    return (
      <View style={styles.parentContainerCenterAligned}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={[
              styles.registerButtonBigView,
              {alignSelf: 'flex-start', marginRight: 10},
            ]}
            onPress={() => navigation.goBack()}>
            <Text style={styles.registerButtonBigText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.registerButtonBigView, {alignSelf: 'flex-end'}]}
            onPress={() => navigation.navigate('eventTracker')}>
            <Text style={styles.registerButtonBigText}>Track your events</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fullImageContainer}>
          <Image
            source={eventDetails.eventImage}
            resizeMode="contain"
            style={{width: '100%'}}
          />

          <Text style={styles.eventDetailsTextStyle}>
            Name of Event: {eventDetails.name}
          </Text>
          <Text style={styles.eventDetailsTextStyle}>
            Place of the Event: {eventDetails.place}
          </Text>
          <Text style={styles.eventDetailsTextStyle}>
            Entry Type: {eventDetails.entryType}
          </Text>
          <View style={styles.registerButtonBigView}>
            <Button
              title="Register"
              color="#fff"
              style={styles.registerButtonBigText}
              onPress={() => {
                AddEvent(eventDetails);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {AddEvent})(EventDetails);
