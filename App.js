import { StyleSheet, View } from "react-native";
import { ConnectionStatus } from "./src/components/ConnectionStatus";
import { MessageText } from "./src/components/MessageText";
import SendMessageButton from "./src/components/SendMessageButton";

export default function App() {
  return (
    <View style={styles.container}>
      <ConnectionStatus />
      <SendMessageButton />
      <View style={styles.messageBox}>
        <MessageText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  messageBox: {
    marginTop: 50,
  },
});
