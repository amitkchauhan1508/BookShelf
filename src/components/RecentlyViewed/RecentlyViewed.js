import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {palette} from '../../theme.util';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, Stagger} from 'native-base';
import BookGridItemSmall from '../BookGridItemSmall';

const RecentlyViewed = ({title, items}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {items.reverse().map((item, index) => (
              <BookGridItemSmall
                key={index}
                item={item}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </Stagger>
    </View>
  );
};

export default RecentlyViewed;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  title: {
    color: palette.primary,
    fontSize: 22,
    fontWeight: '700',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
