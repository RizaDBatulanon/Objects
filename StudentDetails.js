import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';

const StudentDetails = ({ visible, onClose, data }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Student Information</Text>
          <Text>{`First Name: ${data.first_name}`}</Text>
          <Text>{`Last Name: ${data.last_name}`}</Text>
          <Text>{`Nickname: ${data.nick_name}`}</Text>
          <Text>{`Course: ${data.course}`}</Text>
          <Text>{`Year: ${data.year}`}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default StudentDetails;