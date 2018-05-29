import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

class Launch extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <Icon
            style={styles.logo}
            name="check-circle"
            size={64}
            color="#FFFFFF"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("ENTRAR pressed")}
          >
            <Icon style={styles.icon} name="user" size={18} color="#FFFFFF" />
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("CADASTRAR-SE pressed")}
          >
            <Icon
              style={styles.icon}
              name="user-plus"
              size={18}
              color="#FFFFFF"
            />
            <Text style={styles.buttonText}>CADASTRAR-SE</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null
  },
  logo: {
    alignSelf: "center",
    marginBottom: 60
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#151019"
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10
  },
  icon: {
    marginRight: 10
  },
  buttonText: {
    color: "#FFFFFF"
  }
});

export default Launch;
