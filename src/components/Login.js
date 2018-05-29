import React, { Component } from 'react';
import { View, Stylesheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Email" value={this.state.email} />
        <TextInput placeholder="Senha" value={this.state.senha} />
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="ENTRAR"
        />
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="CADASTRAR-SE"
        />
      </View>
    );
  }
}

export default Login;
