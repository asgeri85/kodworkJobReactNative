import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 3,
    borderRadius: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  location_container: {
    borderRadius: 25,
    backgroundColor: '#ef534f',
    alignSelf: 'baseline',
    marginTop: 5,
    padding: 7,
  },
  location_title: {
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 5,
  },
  company: {
    color: 'black',
    marginLeft: 5,
  },
  level: {
    color: '#ef534f',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom: 5,
  },
});
