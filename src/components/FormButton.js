import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width
const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.commandButton} {...rest}>
      <Text style={styles.panelButtonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
    commandButton: {
        padding: 18,
        borderRadius: 50,
        marginHorizontal:60,
        backgroundColor:colors.buttons,
        alignItems: 'center',
        marginTop: 30,
      },

      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
});