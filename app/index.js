import { extendTheme, NativeBaseProvider } from "native-base";
import { Center, Box, CheckIcon, Input } from "native-base";
import Example from "../example";
import React from "react";
import PressCard from "../components/PressCard";
import SelectComponent from "../components/SelectList";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";


// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });


// 3. Pass the `theme` prop to the `NativeBaseProvider`

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <NativeBaseProvider >
      <PressCard />
      <PressCard />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

    </NativeBaseProvider>
  );
}

export default App;