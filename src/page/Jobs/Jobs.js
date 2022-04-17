import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import useFetch from '../../hook/useFetch';
import JobCard from '../../component/JobCard';

const URL = 'https://www.themuse.com/api/public/jobs?page=1';

const Jobs = ({navigation}) => {
  const {jobsData, loading, error} = useFetch(URL);

  const handleJob = job => {
    navigation.navigate('DetailScreen', {job});
  };

  const renderJob = ({item}) => (
    <JobCard job={item} onPress={() => handleJob(item)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <FlatList data={jobsData} renderItem={renderJob} />
    </View>
  );
};

export default Jobs;
