
import { NativeBaseProvider, Box, Pressable, HStack, Badge, Spacer, Text, Flex, Input } from "native-base";
import React from "react";
import { useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import ButtonComponent from "./Button";

function PressCard() {
    const [selectValue, setSelectValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [selected, setSelected] = useState("");

    const handleAddButtonPress = () => {
        insertData(selectValue, textValue);//this should be imported
        // Reset form values
        setSelectValue('');
        setTextInputValue('');
    };

    const selectListData = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    return <Box alignItems="center" mt='2' >
        <Pressable width="90%">
            {({
                isHovered,
                isFocused,
                isPressed
            }) => {
                return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
                    transform: [{
                        scale: isPressed ? 0.96 : 1
                    }]
                }} p="5" rounded="8" shadow={8} borderWidth="1" borderColor="coolGray.300">
                    <HStack alignItems="center">
                        <Badge colorScheme="darkBlue" _text={{
                            color: "white"
                        }} variant="solid" rounded="4">
                            Sales
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                            1 month ago
                        </Text>
                    </HStack>
                    <Text mt='2'>Packet Type :</Text>
                    {/* <SelectComponent /> */}

                    {/* <SelectList
                        
                        data={selectListData}
                        save="value"
                    /> */}

                    <Text mt='2'>Quantity :</Text>
                    <Box alignItems="left"  >
                        <Input placeholder="Enter number of packets" w="80%" />
                    </Box>

                    <Box alignItems='right'>
                        <ButtonComponent />
                    </Box>




                </Box>;
            }}
        </Pressable>
    </Box>;
}

export default PressCard;
