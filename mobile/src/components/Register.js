import React, { Component } from 'react';
import { View, Stylesheet, TextInput } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: ''
    };
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Nome' value={this.state.nome} />
        <TextInput placeholder='Email' value={this.state.email} />
        <TextInput placeholder='Senha' value={this.state.senha} />
      </View>
    );
  }
}

export default Register;
