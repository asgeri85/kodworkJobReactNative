import React from 'react';
import {View, Text, ScrollView, Dimensions, Alert} from 'react-native';
import styles from './Detail.style';
import RenderHTML from 'react-native-render-html';
import Button from '../../component/Button';
import {useDispatch} from 'react-redux';

const Detail = ({route}) => {
  const {job} = route.params;
  const dispatch = useDispatch();
  const source = {
    html: `${job.contents}`,
  };

  const submitJob = () => {
    Alert.alert('Başarılı', 'Başvurunuz alınmıştır');
  };

  const addFavorite = () => {
    dispatch({type: 'SET_JOB', payload: {job}});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{job.name}</Text>
        <View style={styles.body_container}>
          <Text style={styles.body_title}>Locations:</Text>
          <Text style={styles.body_text}>{job.locations[0].name}</Text>
        </View>
        <View style={styles.body_container}>
          <Text style={styles.body_title}>Job Level:</Text>
          <Text style={styles.body_text}>{job.levels[0].name}</Text>
        </View>
        <Text style={styles.detail_title}>Job Detail</Text>
        <View style={styles.info_container}>
          <RenderHTML
            source={source}
            contentWidth={Dimensions.get('screen').width}
          />
        </View>
        <View style={styles.button_container}>
          <Button
            title="Submit"
            iconName="arrow-right-thick"
            onPress={() => submitJob()}
          />
          <Button
            title="Favorite Job"
            iconName="heart"
            onPress={() => addFavorite()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
