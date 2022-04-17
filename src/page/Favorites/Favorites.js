import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import JobCard from '../../component/JobCard';
import {useDispatch} from 'react-redux';

const Favorites = () => {
  const jobList = useSelector(selector => selector.favorites);
  const dispatch = useDispatch();

  const removeItem = id => {
    dispatch({type: 'REMOVE_JOB', payload: {id}});
  };

  const renderFavorite = ({item}) => (
    <JobCard isButton job={item} onPress={() => removeItem(item.id)} />
  );

  return (
    <View>
      <FlatList data={jobList} renderItem={renderFavorite} />
    </View>
  );
};

export default Favorites;
