import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//add click event handler
// onPress declared in parent albumdetail button
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
// console.log({ children });
  console.log('in button');
  return (

    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    );
};

const styles = {

textStyle: {
  // centers text
  alignSelf: 'center',
  color: '#007aff',
  fontSize: 16,
  fontWeight: '600',
  paddingTop: 10,
  paddingBottom: 10

},

buttonStyle: {
  flex: 1,
  //stretch to fill limits of container
  alignSelf: 'stretch',
  backgroundColor: '#fff',
  borderRadius: 5,
  borderWidth: 1,
  //like ios button
  borderColor: '#007aff',
  marginTop: 5,
  marginLeft: 5,
  marginRight: 5
}
};

export { Button };
// cannot use default keyword if want to use export in index.js
