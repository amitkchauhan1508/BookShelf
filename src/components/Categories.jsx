import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const CategoryComponent = ({categories, onSelectCategory}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelection = category => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {['All', ...Array.from(new Set(categories))].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => handleCategorySelection(category)}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingRight: 10, // Padding to show shadow on the right
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    overflow: 'scroll',
    position: 'relative',
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#ECEFF1', // Light gray background for unselected
    marginHorizontal: 5,
  },
  selectedCategory: {
    backgroundColor: '#2196F3', // Blue background for selected
  },
  categoryText: {
    color: '#37474F', // Text color
    fontWeight: 'bold',
  },
  shadow: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 10, // Width of the shadow
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light shadow color
    zIndex: -1,
  },
});

export default CategoryComponent;
