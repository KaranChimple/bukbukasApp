import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centerAlignParentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  parentContainerCenterAligned: {
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInputStyle: {
    width: 335,
    minHeight: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    elevation: 6,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#333333',
  },
  textInputButton: {
    width: 335,
    minHeight: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    elevation: 6,
    paddingHorizontal: 20,
    marginTop: 48,
  },
  eventsListContainer: {},
  eventContainerList: {
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
    flex: 1,
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  eventContainerGrid: {
    borderWidth: 1,
    marginBottom: 10,
    height: 140,
    width: 120,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 10,
  },
  eventImageList: {
    height: 75,
    width: 75,
  },
  eventImageGrid: {
    height: 100,
    width: 100,
  },
  eventDetailsStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventDetailsTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  registerButtonView: {
    height: 36,
    backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonBigView: {
    height: 60,
    marginTop: 20,
    backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  registerButtonBigText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
  },
  pickerSelectionButton: {
    height: 40,
    backgroundColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerStyle: {
    height: 150,
    // width: '80%',
    color: '#344953',
    justifyContent: 'center',
  },
  fullImageContainer: {height: 500, width: '80%'},
  alignContentSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftGobackButton: {alignSelf: 'flex-start', marginRight: 10},
  alignSelfToEnd: {alignSelf: 'flex-end'},
  fullWidth: {width: '100%'},
  parentScrollView: {paddingTop: 48, paddingHorizontal: 15},
  whiteColor: {color: '#fff'},
  rightAlignContainer: {alignSelf: 'flex-end', backgroundColor: 'green'},
  lowerPadding: {paddingBottom: 80},
  textDetailsContainer: {marginLeft: 10, width: '50%', flex: 1},
  parentConatinerMargin: {margin: 20},
  alignSelfToTheStart: {alignSelf: 'flex-start'},
});

export default styles;
