// STEP import libaries for making components
import React from 'react';
// import ReactNative from 'react-native';
// {} is a destructured import
// View tag is for positioning, st
import { Text, View } from 'react-native';


// make components
// make Header same name as file
// use () when multi line of return value
// declaration of component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

return (
  <View style={viewStyle}>
   <Text style={textStyle}>{props.headerText}</Text>
  </View>
);
};

//STYLING all in this file
const styles = {
  viewStyle: {
backgroundColor: '#F8F8F8',
justifyContent: 'center',
alignItems: 'center',
height: 80,
paddingTop: 15,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.2,
elevation: 2,
position: 'relative'

  },
textStyle: {
  fontSize: 30,
}
};

// make compnonent available for other parts of app to use it
// child component, we export it using es6 syntax
// export statement
export { Header };
// we want other files to make use of it
