import {Input} from 'native-base';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.searchContainer}>
      <Input
        borderRadius={20}
        w={{}}
        InputLeftElement={
          <Icon
            name="search"
            size={20}
            color="#171617"
            style={styles.searchIcon}
          />
        }
        style={styles.searchInput}
        placeholder="Search books..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    elevation: 2,
  },
  searchIcon: {
    marginLeft: 12,
  },
  searchInput: {
    height: 40,
    fontSize: 16,
  },
});

export default SearchBar;
