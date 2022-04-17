import {Alert} from 'react-native';

const reducers = (state, action) => {
  switch (action.type) {
    case 'SET_JOB':
      const {job} = action.payload;
      const filter = state.favorites.find(item => item.id === job.id);
      if (!filter) {
        const newList = [...state.favorites, job];
        return {...state, favorites: newList};
      } else {
        Alert.alert('Hata', 'İş favorilerde mevcut');
        return state;
      }

    case 'REMOVE_JOB':
      const {id} = action.payload;
      const jobs = state.favorites.filter(item => item.id !== id);
      return {...state, favorites: jobs};

    default:
      return state;
  }
};

export default reducers;
