import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {useAuth} from '../../contexts/auth';

const Settings: React.FC = () => {
  const {signOut} = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Settings;
