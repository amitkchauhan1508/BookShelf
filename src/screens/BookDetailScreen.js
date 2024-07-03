import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useWishlist} from '../contexts/WishlistContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {palette} from '../theme.util';
import BackButton from '../components/BackButton';

const BookDetailScreen = ({navigation, route}) => {
  const {wishlist, toggleWishlist} = useWishlist();
  const {book} = route.params;
  const isInWishlist = wishlist.includes(book.id);

  return (
    <ScrollView
      style={{backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.bookContainer}>
            <BackButton />

            <View style={styles.imageViewStyle}>
              <Text style={styles.category} numberOfLines={1}>
                {book.category}
              </Text>
              <Image
                source={book.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{book.name || '--'}</Text>
              <Text style={styles.priceText}>$ {book.price || '--'}</Text>
            </View>
          </View>

          <View style={styles.bookDetailsContainer}>
            <View style={styles.detailsContainer}></View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>{book.description}</Text>
              <Text style={styles.authorNameText}>~{book.author}</Text>
            </View>

            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => toggleWishlist(book.id)}>
                <Icon
                  name="heart"
                  size={10}
                  style={[styles.icon, isInWishlist && styles.redIcon]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 2}}>
                <View style={styles.buyButton}>
                  <Text style={styles.buttonText}>Buy now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  description: {
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 20,
    fontFamily: 'Roboto',
  },
  imageContainer: {
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 15,
    fontFamily: 'Roboto',
  },
  priceText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 6,
    fontFamily: 'Roboto',
  },
  image: {
    margin: 8,
    width: '100%',
    height: undefined,
    aspectRatio: 0.8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 18,
  },
  descriptionText: {
    fontFamily: 'Roboto',
    color: palette.textLightColor,
    lineHeight: 20,
    fontSize: 14,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 4,
    width: '40%',
    flex: 0.4,
  },
  icon: {
    fontSize: 25,
  },
  redIcon: {
    color: 'red',
  },
  descriptionContainer: {
    margin: 10,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    fontFamily: 'Roboto',
  },
  authorNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    fontFamily: 'Roboto',
    alignSelf: 'flex-end',
  },

  buyButton: {
    padding: 10,
    paddingVertical: 16,
    margin: 15,
    borderRadius: 10,
    backgroundColor: palette.primary,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: palette.textColor,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  imageViewStyle: {
    padding: 40,
    paddingBottom: 0,
  },
  bookContainer: {
    backgroundColor: palette.secondary,
    marginTop: 20,
    margin: 18,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bookDetailsContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    borderColor: palette.secondary,
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  category: {
    fontSize: 12,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    padding: 8,
    width: '60%',
    textAlign: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: 10,
  },
  backButton: {
    top: 10,
    left: '2%',
  },
});

export default BookDetailScreen;
