import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {palette} from '../theme.util';
import {SvgXml} from 'react-native-svg';
import {LeftArrow} from '../assets/leftArrow';

const BackButton = ({onClickBack, style, testID}) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    onClickBack ? onClickBack() : navigation?.goBack();
  };
  return (
    <TouchableOpacity
      onPress={handleBackButton}
      testID={testID}
      style={[styles.backButton, style]}>
      <SvgXml color={palette.primary} xml={LeftArrow} height={40} width={50} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    top: 10,
    left: '2%',
  },
});
