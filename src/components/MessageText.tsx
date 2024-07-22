import React from "react";
import { Text, View } from "react-native";
import { useMessageText } from "../hooks/useMessageText";

const MessageText = () => {
  const { messageText } = useMessageText();
  return (
    <View>
      <Text>{messageText}</Text>
    </View>
  );
};

export { MessageText };
