import React from "react";
import { Pressable, Text, Center, NativeBaseProvider } from "native-base";

function ButtonComponent() {
 
  return <Center my="4">
      <Pressable _pressed={{
      bg: "primary.800"
    }} bg="primary.600" py="2" rounded="sm" px="3" alignSelf="center">
        <Text textTransform="uppercase" fontWeight="bold" color="white">
          Add
        </Text>
      </Pressable>
    </Center>;
}

export default ButtonComponent;