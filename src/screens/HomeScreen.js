import {
  Badge,
  Divider,
  FavouriteIcon,
  Flex,
  Image,
  ScrollView,
  Stagger,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import BackButton from '../components/BackButton';
import BookDisplay from '../components/BookDisplay/BookDisplay';
import BookGridItem from '../components/BookGridItem';
import SearchBar from '../components/SearchBar';
import {useWishlist} from '../contexts/WishlistContext';
import fetchBooks from '../services/api';
import {palette} from '../theme.util';
import RecentlyViewed from '../components/RecentlyViewed/RecentlyViewed';
import {LogBox} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllClicked, setShowAllClicked] = useState(false);
  const profileUri =
    'https://media.licdn.com/dms/image/C4E03AQEoNKbELJ8Jig/profile-displayphoto-shrink_800_800/0/1516487429952?e=1720656000&v=beta&t=3Gq__NUGnjYE-T7I9I8DdUFM0WynXov2en_W6tJT1EA';
  const {wishlist} = useWishlist();
  const handleShowAll = () => setShowAllClicked(true);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop',
    ]);

    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {showAllClicked ? (
          <View style={{flexDirection: 'column', gap: 20}}>
            <BackButton
              onClickBack={() => {
                setShowAllClicked(false);
                setSearchQuery('');
              }}
              style={{left: -10}}
              testID={'back-button'}
            />
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </View>
        ) : (
          <>
            <Flex
              direction="row"
              alignItems={'center'}
              justifyContent={'space-between'}>
              <View style={styles.header}>
                <Image
                  source={{
                    uri: profileUri,
                  }}
                  alt="Alternate Text"
                  size="xs"
                  style={{
                    borderRadius: 10,
                  }}
                />
                <Text style={styles.welcomeText}>Welcome, Amit!</Text>
              </View>
              <VStack right={2}>
                {wishlist?.length > 0 ? (
                  <Badge
                    colorScheme="danger"
                    rounded="full"
                    zIndex={1}
                    variant="solid"
                    mb={-4}
                    mr={-3}
                    fontSize="xs"
                    alignSelf="flex-end">
                    {wishlist?.length}
                  </Badge>
                ) : null}
                <FavouriteIcon
                  size="7"
                  mt="0.5"
                  color={wishlist?.length > 0 ? 'red.500' : undefined}
                />
              </VStack>
            </Flex>
            <Divider top={2} />
          </>
        )}

        {showAllClicked ? (
          <Stagger
            visible={showAllClicked}
            initial={{
              opacity: 0,
              scale: 1,
              translateY: 34,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}>
            <FlatList
              data={filteredBooks}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <BookGridItem item={item} navigation={navigation} />
              )}
              keyExtractor={item => item.id.toString()}
              numColumns={2} // Set the number of columns to 2
              contentContainerStyle={styles.contentContainer}
            />
          </Stagger>
        ) : (
          <View style={{gap: 20, marginTop: 30}}>
            <BookDisplay
              title="Popular"
              sliceLeft={0}
              sliceRight={2}
              items={filteredBooks}
              handleShowAll={handleShowAll}
            />
            <BookDisplay
              title="For you..."
              sliceLeft={3}
              sliceRight={5}
              items={filteredBooks}
              handleShowAll={handleShowAll}
            />
          </View>
        )}
        {!showAllClicked && (
          <View style={styles.recentlyViewedContainer}>
            <RecentlyViewed title="Recently Viewed" items={filteredBooks} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const itemMargin = 6;
const numColumns = 2;
const itemWidth = (windowWidth - itemMargin * (numColumns + 1)) / numColumns;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: palette.primary,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: palette.secondary,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 40,
  },
  contentContainer: {
    paddingHorizontal: itemMargin,
    paddingBottom: itemMargin, // Add padding to the bottom to prevent the last row from being too close to the edge
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  recentlyViewedContainer: {
    marginBottom: 10,
  },
});

export default HomeScreen;
