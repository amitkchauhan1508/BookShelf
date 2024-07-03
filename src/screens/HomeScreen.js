import {
  Badge,
  Button,
  Divider,
  FavouriteIcon,
  Flex,
  Image,
  ScrollView,
  Stagger,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useMemo, useState} from 'react';
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
import {categories} from '../assets/data';
import CategoryComponent from '../components/Categories';

const PAGE_SIZE = 10;

const HomeScreen = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllClicked, setShowAllClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('All');

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

  const onSelectCategory = category => {
    setCategoryFilter(category);
  };

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesCategory =
        categoryFilter === 'All' ||
        book.category.toLowerCase().includes(categoryFilter.toLowerCase());
      const matchesSearchQuery =
        book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase());
      setCurrentPage(1); // when any search is made we reset back the page number to 1
      return matchesCategory && matchesSearchQuery;
    });
  }, [books, categoryFilter, searchQuery]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredBooks.slice(start, start + PAGE_SIZE);
  }, [filteredBooks, currentPage]);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredBooks.length / PAGE_SIZE)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(filteredBooks.length / PAGE_SIZE);

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
            <CategoryComponent
              categories={categories}
              onSelectCategory={onSelectCategory}
            />
            <ScrollView
              style={{maxHeight: Dimensions.get('window').height - 200}}>
              <View style={styles.flatListContainer}>
                <FlatList
                  data={paginatedItems}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <BookGridItem item={item} navigation={navigation} />
                  )}
                  keyExtractor={item => item.id.toString()}
                  numColumns={2}
                  contentContainerStyle={styles.contentContainer}
                />
              </View>
            </ScrollView>
            <View style={styles.paginationContainer}>
              <Button
                variant="outline"
                color="blue.100"
                onPress={handlePreviousPage}
                disabled={currentPage === 1}>
                Previous
              </Button>
              <Text style={styles.pageNumber}>
                Page {currentPage} of {totalPages}
              </Text>
              <Button
                variant="outline"
                color={'black'}
                onPress={handleNextPage}
                disabled={currentPage >= totalPages}>
                Next
              </Button>
            </View>
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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  welcomeText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatListContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  pageNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentlyViewedContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
