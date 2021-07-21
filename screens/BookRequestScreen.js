import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class BookRequestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      bookName: "",
      reasonToRequest: "",
    };
  }

  createUniqueId(){ 
    return Math.random().toString(36).substring(7); 
  }

  addRequest = (bookName, reasonToRequest) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId()
    db.collection("requested_books").add({
      "bookName": bookName,
      "reasonToRequest": reasonToRequest,
      "request_ID": randomRequestId,
      "user_ID": userId,
    });
    this.setState({
      bookName: "",
      reasonToRequest: "",
    });
    alert("Book has been requested successfuly")
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaProvider>
          <MyHeader title="Request a Book" />
          <KeyboardAvoidingView style={styles.keyBoardStyle}>
            <TextInput
              placeholder="enter book name"
              style={styles.formTextInput}
              onChangeText={(text) => {
                this.setState({ bookName: text });
              }}
              value={this.state.bookName}
            />

            <TextInput
              placeholder="enter reason to request"
              style={[styles.formTextInput, { height: 300 }]}
              multiline
              numberOfLines={8}
              onChangeText={(text) => {
                this.setState({ reasonToRequest: text });
              }}
              value={this.state.reasonToRequest}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.addRequest(
                  this.state.bookName,
                  this.state.reasonToRequest
                );
              }}
            >
              <Text>Request</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle: { flex: 1, alignItems: "center", justifyContent: "center" },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});
