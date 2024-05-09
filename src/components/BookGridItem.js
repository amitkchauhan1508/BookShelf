import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {useWishlist} from '../contexts/WishlistContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const itemMargin = 6;
const numColumns = 2;
const itemWidth = (windowWidth - itemMargin * (numColumns + 1)) / numColumns;

const BookGridItem = ({item, navigation}) => {
  const {wishlist, toggleWishlist} = useWishlist();

  const onPressHandler = () => {
    navigation.navigate('BookDetail', {book: item});
  };

  const isInWishlist = wishlist.includes(item.id);

  return (
    <TouchableOpacity
      style={[styles.container, {width: itemWidth}]}
      onPress={onPressHandler}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.priceText}>$ {item.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => toggleWishlist(item.id)}>
            <Icon
              name="heart"
              size={10}
              style={[styles.icon, isInWishlist && styles.redIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginBottom: itemMargin,
    padding: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 8,
    height: 28,
    overflow: 'hidden',
    fontFamily: 'Roboto', // Apply Robot font here
  },
  priceText: {
    color: 'orange',
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 0,
    paddingBottom: 2,
    fontFamily: 'Roboto', // Apply Robot font here
  },
  image: {
    width: '100%',
    height: undefined,
    borderRadius: 20,
    aspectRatio: 1,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 4,
  },
  icon: {
    fontSize: 20,
  },
  redIcon: {
    color: 'red',
  },
});

export default BookGridItem;
