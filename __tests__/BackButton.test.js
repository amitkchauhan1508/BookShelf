// BackButton.test.js
import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native'; // Mocked automatically
import BackButton from '../src/components/BackButton';
// Mock the useNavigation hook
jest.mock('@react-navigation/native');

describe('BackButton', () => {
  it('calls onClickBack when provided', () => {
    const onClickBack = jest.fn();
    const {getByTestId} = render(
      <BackButton onClickBack={onClickBack} testID={'back-button'} />,
    );

    fireEvent.press(getByTestId('back-button'));

    expect(onClickBack).toHaveBeenCalled();
  });

  it('navigates back when onClickBack is not provided', () => {
    const goBack = jest.fn();
    useNavigation.mockReturnValue({goBack});
    const {getByTestId} = render(<BackButton testID={'back-button'} />);

    fireEvent.press(getByTestId('back-button'));

    expect(goBack).toHaveBeenCalled();
  });

  it('applies additional styles', () => {
    const additionalStyles = {backgroundColor: 'red'};
    const {getByTestId} = render(
      <BackButton style={additionalStyles} testID={'back-button'} />,
    );
    const backButton = getByTestId('back-button');

    expect(backButton).toHaveStyle(additionalStyles);
  });
});
