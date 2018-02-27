import React from 'react';
import { TextInput, View, Text } from 'react-native';

// receives props from LoginForm
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

// controlled componenets
return (
  <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autocorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize='none'
      />
  </View>
  );
};

//flex input and text are children of View; siblings
// flex allocates space to each one
// 2+1=3, 2/3 will be allocated to input
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2.5
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }

};


export { Input };
