import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BlackBottom} from '../components/BlackBottom';
import {PermissionsContext} from '../context/PermissionsContext';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>
        Es necesario el uso del GPS para usar esta aplicación
      </Text>
      <BlackBottom title="Permiso" onPress={askLocationPermission} />
      <Text style={{marginTop: 20}}>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    width: 250,
    textAlign: 'center',
    marginBottom: 20,
  },
});
