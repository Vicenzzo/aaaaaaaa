import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthProviderAprendev } from './utils/auth_provider';
import { AuthStackScreen } from './utils/navigation';

export default function HomeScreen() {
  return (

    <AuthStackScreen />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
