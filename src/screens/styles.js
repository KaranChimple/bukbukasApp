import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centerAlignParentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  eventImageList: {
    height: 75,
    width: 75,
  },
  eventDetailsStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventImageGrid: {
    height: 96,
    width: 96,
  },
  registerButtonView: {
    height: 36,
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
});

export default styles;
