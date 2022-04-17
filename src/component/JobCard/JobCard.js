import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.style';
import Button from '../Button';

const JobCard = ({job, onPress, isButton}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{job.name}</Text>
          <Text style={styles.company}>{job.company.name}</Text>
          <View style={styles.location_container}>
            <Text style={styles.location_title}>{job.locations[0].name}</Text>
          </View>
        </View>
        <Text style={styles.level}>{job.levels[0].name}</Text>
        {isButton ? <Button title="Remove" onPress={onPress} /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
