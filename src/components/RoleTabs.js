// src/components/RoleTabs.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoleTabs = ({ selectedRole, onSelect }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        onPress={() => onSelect('Parent')}
        style={[styles.tab, selectedRole === 'Parent' && styles.activeTab]}>
        <Text style={[styles.tabText, selectedRole === 'Parent' && styles.activeTabText]}>Parent</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSelect('Pediatrician')}
        style={[styles.tab, selectedRole === 'Pediatrician' && styles.activeTab]}>
        <Text style={[styles.tabText, selectedRole === 'Pediatrician' && styles.activeTabText]}>Pediatrician</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignSelf: 'center',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#eee',
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
});

export default RoleTabs;
