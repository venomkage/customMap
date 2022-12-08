import React from 'react';
import {Text, View} from 'react-native';

export default function Directions({route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.name}!</Text>
    </View>
  );
}
