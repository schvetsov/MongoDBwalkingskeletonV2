import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage, Button, ScrollView} from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      persons: '',
      persons2: '',
      phone: '',
      isDateTimePickerVisible: false,
      date: "2016-05-15",
      floridaLossFree: '',
      georgiaLossFree: '',
      floridalimits: '',
      floridalimitsnames: '',
      georgialimits: '',
      floridacounty: '',
      georgiacounty: '',
      floridaspecialty: '',
      floridaspecialtynames: ''
    }
  };



  getRequest() {
    //AsyncStorage.getItem('username').then((value) => 
    //  this.setState({persons: value}));
    axios.get('http://localhost:3000/send')
    .then(res => {this.setState({
      floridaLossFree: res.data.first
      //floridaLossFree: res.data.floridaLossFree, 
      /*georgiaLossFree: res.data.georgiaLossFree,
      floridalimits: res.data.floridalimits,
      floridalimitsnames: res.data.floridalimitsnames,
      georgialimits: res.data.georgialimits,
      floridacounty: res.data.floridacounty,
      georgiacounty: res.data.georgiacounty,
      floridaspecialty: res.data.floridaspecialty,
      floridaspecialtynames: res.data.floridaspecialtynames*/
    })})
    .catch(error => console.log(error))
  }

  resetValue() {
    this.setState({persons: '', persons2: ''});
  }

  componentDidMount = () => {
/*
    axios.get('/send')
      .then(res => {
        console.log(res.data)
        //const persons = res.data;
        //this.setState({persons});
      })
*/
    /*axios.get('https://dry-caverns-27659.herokuapp.com/')
      .then(Alert.alert('Email sent successfully'))
      .catch(error => console.log(error));*/

    /*axios.post('https://dry-caverns-27659.herokuapp.com/', {
      firstName: 'Bob'
    })
    .then(Alert.alert('Email sent successfully'))
    .catch(error => console.log(error));*/
      //app.get('/', (req, res) => res.send('Hello World from Heroku!'))
  }

  mapFlorida() {
    //AsyncStorage.setItem('thisArray', this.state.persons);
    //this.setState({persons: AsyncStorage.getItem('thisArray')});
    //console.log(global.persons);
    return Object.keys(this.state.floridaLossFree).map((p, i) => <Text key={i}>{p}: {this.state.floridaLossFree[p]}</Text> );
  }
  mapFlorida2() {
    //return Object.keys(this.state.persons2).map((p, i) => <Text key={i}>{p}: {this.state.persons2[p]}</Text> );
  }

  render() {
    let { phone } = this.state;
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango'
    }]

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Button
            onPress={this.getRequest.bind(this)}
            title="Get Value"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.resetValue.bind(this)}
            title="Reset"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          {this.mapFlorida()}
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


/*import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
 
class Example extends Component {
  state = {
    phone: '',
  };
 
  render() {
    let { phone } = this.state;
 
    return (
      <View>
      <TextField
        label='Phone number'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
      </View>
    );
  }
}
*/