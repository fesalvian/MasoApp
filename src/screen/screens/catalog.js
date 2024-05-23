import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FavoritesScreen } from './favorite';

const CatalogScreen = () => {
  const [favorites, setFavorites] = useState([]);

  const navigation = useNavigation();

  // Dados fictícios para o catálogo
  const data = [
    { id: '1', name: 'Azul', color: '#3498db' },
    { id: '2', name: 'Vermelho', color: '#e74c3c' },
    { id: '3', name: 'Verde', color: '#2ecc71' },
    { id: '4', name: 'Amarelo', color: '#f1c40f' },
    { id: '5', name: 'Rosa', color: '#ff66cc' },
    { id: '6', name: 'Laranja', color: '#ff6600' },
    // Adicione mais cores conforme necessário
  ];

  // Função para renderizar cada item do catálogo
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: item.color }]}
      onPress={() => toggleFavorite(item)}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite(item)}>
        <MaterialIcons name={isFavorite(item) ? 'favorite' : 'favorite-border'} size={25} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const updateFavorites = (favorites) => {
    // Atualizar favoritos no estado ou fazer qualquer outra ação necessária
    console.log('Favoritos atualizados:', favorites);
  };


  // Função para verificar se uma cor está nos favoritos
  const isFavorite = (item) => {
    return favorites.some((color) => color.id === item.id);
  };

  // Função para adicionar ou remover uma cor dos favoritos
  const toggleFavorite = (item) => {
    let updatedFavorites;
    if (isFavorite(item)) {
      // Remove a cor dos favoritos se já estiver lá
      updatedFavorites = favorites.filter((color) => color.id !== item.id);
    } else {
      // Adiciona a cor aos favoritos
      updatedFavorites = [...favorites, item];
    }
    setFavorites(updatedFavorites);
    updateFavorites(updatedFavorites);
  };
  
  



  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        numColumns={1}
      />
      <FavoritesScreen route={{ params: { favorites: favorites } }} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    padding: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    height: 150,
    width: windowWidth - 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    position: 'relative',
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'transparent',
  },
});

export default CatalogScreen;
