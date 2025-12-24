import { FlatList, Image, Text, View, Pressable, useColorScheme, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import React from "react";

// Mock data
const data = [
  {
    id: 1,
    name: 'Pizza Margherita',
    price: 10,
    description: 'La regina delle pizze: pomodoro San Marzano, mozzarella di bufala, basilico fresco e olio EVO.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Pizza Quattro Stagioni',
    price: 12,
    description: 'Un viaggio nei sapori: carciofi, funghi, prosciutto cotto e olive nere, divisi in quattro spicchi.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Pizza Diavola',
    price: 11,
    description: 'Piccante e decisa: pomodoro, mozzarella e salamino piccante napoletano.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Pizza Boscaiola',
    price: 12,
    description: 'Profumi del bosco: mozzarella fior di latte, funghi porcini freschi e salsiccia saporita.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
]

export default function Index() {
  const colorScheme = useColorScheme() // Get the color scheme (dark or light)
  const insets = useSafeAreaInsets(); // Get the safe area insets (different on each device)

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top, ...styles.hero }}>
      <View className="flex-row justify-between items-center border-b border-border p-4">
        <Text className="text-foreground text-2xl font-bold tracking-tight">Menù</Text>
        <Pressable 
          className="bg-secondary py-2 px-4 rounded-full"
          onPress={() => console.log('Carrello premuto')}
        >
          <Feather name="shopping-cart" size={16} color={colorScheme === 'dark' ? 'white' : 'black'} />
        </Pressable>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
        contentContainerClassName="flex-col gap-4"
        contentContainerStyle={{
          paddingHorizontal: 16, // 4 rem
          paddingTop: 16, // 4 rem
          paddingBottom: insets.bottom // Safe area bottom
        }}
        showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
        renderItem={({item}) => (
          <View className="border border-border rounded-[32px] flex-col items-start">
            <Image source={{uri: item.image}} className="w-full h-48 rounded-t-[32px]" />
            <View className="p-4">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-foreground text-xl font-bold tracking-tight">{item.name}</Text>
                <Text className="text-foreground text-lg font-semibold">€{item.price}</Text>
              </View>
              <Text className="text-muted-foreground text-base">{item.description}</Text>

            </View>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  hero: {
    backgroundColor: 'black'
  }
})