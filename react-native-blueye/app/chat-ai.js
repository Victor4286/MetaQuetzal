import "../global.css";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';

export default function ChatScreen() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <FlatList
        data={[{ sender: 'user', text: 'Hola' }, { sender: 'bot', text: 'Hola, ¿en qué puedo ayudarte?' }]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className={`mb-2 ${item.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <Text className={`p-3 rounded-lg ${item.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {item.text}
            </Text>
          </View>
        )}
      />
      <View className="flex-row items-center mt-4">
        <TextInput className="flex-1 border border-gray-300 rounded-lg p-2" placeholder="Escribe un mensaje..." />
        <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-lg ml-2">
          <Text className="text-white">Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}