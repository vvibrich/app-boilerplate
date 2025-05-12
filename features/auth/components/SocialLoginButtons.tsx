import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export const SocialLoginButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/145/145802.png' }} style={styles.icon} />
        <Text style={styles.text}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' }} style={styles.icon} />
        <Text style={styles.text}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontWeight: '600',
  },
});
