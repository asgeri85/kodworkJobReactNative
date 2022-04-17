import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  body_container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  container: {
    flex: 1,
    padding: 5,
  },
  body_title: {
    color: '#ef534f',
    fontWeight: 'bold',
    fontSize: 18,
  },
  body_text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  detail_title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  info_container: {
    padding: 5,
    borderWidth: 1,
  },
  button_container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
  },
});
