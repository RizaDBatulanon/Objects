import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import StudentDetails from './StudentDetails';

const windowWidth = Dimensions.get('window').width;

const students = [
  {"id":1,"first_name":"Axel","last_name":"Lee","nick_name":"Axel","course":"BSIT","year":1},
  {"id":2,"first_name":"Hazel","last_name":"Chu","nick_name":"Hazel","course":"BSIT","year":2},
  {"id":3,"first_name":"Alex","last_name":"Lim","nick_name":"Alex","course":"BSIT","year":3},
  {"id":4,"first_name":"Colton","last_name":"Goldman","nick_name":"Colton","course":"BSIT","year":4},
  {"id":5,"first_name":"Maisie","last_name":"Vaderbilt","nick_name":"Maisie","course":"BSIT","year":1},
  {"id":6,"first_name":"Stephen","last_name":"Zidane","nick_name":"Stephen","course":"BSIT","year":2},
  {"id":7,"first_name":"Hector","last_name":"","nick_name":"Hector","course":"BSIT","year":3},
  {"id":8,"first_name":"Daisie","last_name":"Goldman","nick_name":"Daisie","course":"BSIT","year":4},
  {"id":9,"first_name":"Shantelle","last_name":"Yu","nick_name":"Shantelle","course":"BSIT","year":1},
  {"id":10,"first_name":"Yorick","last_name":"Gonzaga","nick_name":"Yorick","course":"BSIT","year":2},
  {"id":11,"first_name":"Yanis","last_name":"Domingo","nick_name":"Yanis","course":"BSIT","year":3},
  {"id":12,"first_name":"Jesreel","last_name":"Lumbay","nick_name":"Jesreel","course":"BSIT","year":4},
  {"id":13,"first_name":"Jorez","last_name":"Hades","nick_name":"Jorez","course":"BSIT","year":1},
  {"id":14,"first_name":"Hanz","last_name":"Volt","nick_name":"Hanz","course":"BSIT","year":2},
  {"id":15,"first_name":"Dara","last_name":"Tzu","nick_name":"Dara","course":"BSIT","year":3},
  {"id":16,"first_name":"Leanel","last_name":"De Guzman","nick_name":"Leanel","course":"BSIT","year":4},
  {"id":17,"first_name":"Gary","last_name":"Garfield","nick_name":"Gary","course":"BSIT","year":1},
  {"id":18,"first_name":"Marie","last_name":"Tim","nick_name":"Marie","course":"BSIT","year":2},
  {"id":19,"first_name":"Sally","last_name":"Santos","nick_name":"Sally","course":"BSIT","year":3},
  {"id":20,"first_name":"Felly","last_name":"Sales","nick_name":"Felly","course":"BSIT","year":4},
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)} style={styles.item}>
      <Text style={{ fontSize: 16 }}>{item.nick_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={students}
          renderItem={renderItem}
          keyExtractor={(item) => item.nick_name}
        />
      </ScrollView>
      {selectedItem && (
        <StudentDetails
          visible={true}
          onClose={() => setSelectedItem(null)}
          data={selectedItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 15,
    borderColor: 'Gray',
    borderStyle: 'Bold',
    borderWidth: 2,
    width: windowWidth - 30, // Adjust width to fit the screen
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
