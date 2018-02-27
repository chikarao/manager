import React from 'react';
import { View } from 'react-native';

// just showing something to user so make it a functinal component

const CardSection = (props) => {
  return (
<View style={styles.containerStyle}>
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
