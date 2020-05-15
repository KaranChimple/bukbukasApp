import React, {PureComponent} from 'react';
import {View, FlatList, Text, ScrollView, Image, Button} from 'react-native';
import {connect} from 'react-redux';
import {LIST_TYPES, EVENTS_DATA} from '../jsonData/data';
import styles from './styles';
import {AddEvent} from '../actions/user';

class EventsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataFormat: LIST_TYPES.list,
      selectedItem: {},
    };
  }

  _renderItem = ({item, index}) => {
    const {dataFormat} = this.state;
    const {AddEvent} = this.props;
    if (dataFormat === LIST_TYPES.list) {
      return (
        <View key={index} style={styles.eventContainerList}>
          <Image source={item.eventImage} style={styles.eventImageList} />
          <View style={{marginLeft: 10, width: '50%', flex: 1}}>
            <Text style={styles.eventDetailsStyle}>{item.name}</Text>
            <Text style={styles.eventDetailsStyle}>{item.place}</Text>
            <Text style={styles.eventDetailsStyle}>{item.entryType}</Text>
          </View>
          <View style={styles.registerButtonView}>
            <Button
              title="Register"
              color="#fff"
              style={styles.registerButtonText}
              onPress={() => {
                AddEvent(item);
              }}
            />
          </View>
        </View>
      );
    }
  };

  render() {
    console.log('userData: ', this.props.userData);
    return (
      <ScrollView style={{paddingTop: 48, paddingHorizontal: 15}}>
        <Text>Events List Screen</Text>
        <View style={{flex: 1, paddingBottom: 80}}>
          <FlatList data={EVENTS_DATA} renderItem={this._renderItem} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, {AddEvent})(EventsList);
