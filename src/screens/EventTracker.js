import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import Swipable from 'react-native-gesture-handler/Swipeable';
import styles from './styles';
import {DeleteEvent} from '../actions/user';
import {RightActions} from './RightActions';

class EventTracker extends Component {
  constructor() {
    super();
    this.state = {
      shouldComponentUpdate: false,
    };
  }

  emptyComponent = () => {
    return (
      <View>
        <Text>You have not registered for any events</Text>
      </View>
    );
  };

  _renderItem = ({item, index}) => {
    const {DeleteEvent} = this.props;
    return (
      <View key={`${index}_List`}>
        <Swipable
          overshootRight
          renderRightActions={(progress, dragX) => (
            <RightActions
              onPress={() => {
                DeleteEvent(item.id);
              }}
              progress={progress}
              dragX={dragX}
            />
          )}>
          <View style={styles.eventContainerList}>
            <Image source={item.eventImage} style={styles.eventImageList} />
            <View style={{marginLeft: 10, width: '50%', flex: 1}}>
              <Text style={styles.eventDetailsStyle}>{item.name}</Text>
              <Text style={styles.eventDetailsStyle}>{item.place}</Text>
              <Text style={styles.eventDetailsStyle}>{item.entryType}</Text>
            </View>
          </View>
        </Swipable>
      </View>
    );
  };

  render() {
    const {navigation, userData} = this.props;
    console.log('UserData', userData);
    return (
      <View style={{margin: 20}}>
        <TouchableOpacity
          style={[styles.registerButtonBigView, {alignSelf: 'flex-start'}]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.registerButtonBigText}>Go Back</Text>
        </TouchableOpacity>
        <Text style={styles.eventDetailsTextStyle}>
          Events You have registered for
        </Text>
        <FlatList
          data={userData.eventsList}
          extraData={this.state}
          ListEmptyComponent={this.emptyComponent}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, {DeleteEvent})(EventTracker);
