import React, { Component } from 'react';
import { View, Stylesheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { signIn } from '../actions/login';

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
          onPress={this.props.signIn(this.state)}
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

const mapStateToProps = state => {
  user: state.LoginReducer
}

const mapDispatchToProps = dispatch => {
  signIn: () => dispatch(signIn(user))
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
