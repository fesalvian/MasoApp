import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FavoritesScreen = ({ route, navigation}) => {
  const { favorites, updateFavorites } = route.params || {};

  const toggleFavorite = (item) => {
    const updatedFavorites = favorites.includes(item)
      ? favorites.filter((color) => color.id !== item.id)
      : [...favorites, item];
    updateFavorites(updatedFavorites);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: item.color }]}
      onPress={() => toggleFavorite(item)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(item)}>
        <MaterialIcons
          name={favorites.includes(item) ? 'favorite' : 'favorite-border'}
          size={25}
          color={favorites.includes(item) ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
