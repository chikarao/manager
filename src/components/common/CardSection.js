import React from 'react';
import { View } from 'react-native';

// just showing something to user so make it a functinal component
// style can take array; style on right overrides one on right
const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]} >
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
