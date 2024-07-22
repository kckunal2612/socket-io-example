import React from "react";
import { Button } from "react-native";
import { sendMessage } from "../helpers/sendMessage";

const SendMessageButton = () => {
  return <Button title="Send Message" onPress={sendMessage} />;
};

export default SendMessageButton;
