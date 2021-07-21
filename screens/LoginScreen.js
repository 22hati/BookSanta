import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import SantaAnimation from "../components/santaClaus";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      confirmPassword: "",
      isModalVisible: false,
    };
  }

  displayModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <View>
          <ScrollView>
            <KeyboardAvoidingView>
              <Text>Registration</Text>
              <TextInput
                placeholder="First Name"
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />

              <TextInput
                placeholder="Last Name"
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
              />

              <TextInput
                placeholder="email"
                keyboardType="email-address"
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />

              <TextInput
                placeholder="Address"
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
              />

              <TextInput
                placeholder="Contact Number"
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />

              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />

              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        //return alert("Successfully Login");
        this.props.navigation.navigate("DonateBooks");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return alert("User Id created");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Book Santa</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder="email"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            placeholder="enter password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />

          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8BE85" },
  profileContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    fontSize: 65,
    fontWeight: "300",
    paddingBottom: 30,
    color: "#ff3d00",
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: { color: "#ffff", fontWeight: "200", fontSize: 20 },
  buttonContainer: { flex: 1, alignItems: "center" },
});
