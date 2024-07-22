import React from "react";
import { Text, View } from "react-native";
import { useConnectionStatus } from "../hooks/useConnectionStatus";

type Props = {};

const ConnectionStatus = (props: Props) => {
  const { isConnected, transport } = useConnectionStatus();
  return (
    <View>
      <Text>Status: {isConnected ? "connected" : "disconnected"}</Text>
      <Text>Transport: {transport}</Text>
    </View>
  );
};

export { ConnectionStatus };
