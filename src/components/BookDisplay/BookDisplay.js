import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BookGridItem from '../BookGridItem';
import {palette} from '../../theme.util';
import {useNavigation} from '@react-navigation/native';
import {Stagger} from 'native-base';

const BookDisplay = ({title, items, sliceLeft, sliceRight, handleShowAll}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handleShowAll}>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>
      <Stagger
        visible={!!title}
        initial={{
          opacity: 0,
          scale: 1,
          translateX: 34,
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
        <View style={{flexDirection: 'row'}}>
          {items?.slice(sliceLeft, sliceRight)?.map((item, index) => (
            <BookGridItem key={index} item={item} navigation={navigation} />
          ))}
        </View>
      </Stagger>
    </View>
  );
};

export default BookDisplay;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  title: {
    color: palette.primary,
    fontSize: 30,
    fontWeight: '700',
  },
  showAll: {
    fontSize: 16,
    color: palette.textLightColor,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
