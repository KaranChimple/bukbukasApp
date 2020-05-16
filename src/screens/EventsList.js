import React, {PureComponent} from 'react';
import {
  View,
  FlatList,
  Text,
  ScrollView,
  Image,
  Button,
  Picker,
  TouchableOpacity,
} from 'react-native';
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
      shouldPickerBeVisible: false,
    };
  }

  _renderItemList = ({item, index}) => {
    const {AddEvent, navigation} = this.props;
    return (
      <TouchableOpacity
        key={`${index}_List`}
        style={styles.eventContainerList}
        onPress={() => {
          navigation.navigate('eventDetails', {itemDetails: item});
        }}>
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
      </TouchableOpacity>
    );
  };

  _renderItemGrid = ({item, index}) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        key={`${index}_grid`}
        style={styles.eventContainerGrid}
        onPress={() => {
          navigation.navigate('eventDetails', {itemDetails: item});
        }}>
        <Image source={item.eventImage} style={styles.eventImageGrid} />
        <Text style={styles.eventDetailsStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {dataFormat, shouldPickerBeVisible} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.parentScrollView}>
        <View style={styles.alignContentSpaceBetween}>
          <TouchableOpacity
            style={styles.pickerSelectionButton}
            hitSlop={{
              top: 20,
              bottom: 20,
            }}
            onPress={() => {
              this.setState({shouldPickerBeVisible: !shouldPickerBeVisible});
            }}>
            <Text style={styles.whiteColor}>
              Select The Format to render the list
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.pickerSelectionButton, styles.rightAlignContainer]}
            onPress={() => navigation.navigate('eventTracker')}>
            <Text style={styles.whiteColor}>Track your events</Text>
          </TouchableOpacity>
        </View>
        {shouldPickerBeVisible && (
          <Picker
            style={styles.pickerStyle}
            selectedValue={dataFormat}
            onValueChange={(itemValue) =>
              this.setState({dataFormat: itemValue})
            }>
            <Picker.Item label={LIST_TYPES.list} value={LIST_TYPES.list} />
            <Picker.Item label={LIST_TYPES.grid} value={LIST_TYPES.grid} />
          </Picker>
        )}
        <View style={styles.lowerPadding}>
          <FlatList
            data={EVENTS_DATA}
            key={dataFormat === LIST_TYPES.list ? 'list' : 'grid'}
            numColumns={dataFormat === LIST_TYPES.list ? 1 : 3}
            renderItem={
              dataFormat === LIST_TYPES.list
                ? this._renderItemList
                : this._renderItemGrid
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, {AddEvent})(EventsList);
