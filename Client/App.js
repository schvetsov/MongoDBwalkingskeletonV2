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
      floridaLossFree: [],
      georgiaLossFree: '',
      floridalimits: {

      },
      floridalimitsnames: '',
      georgialimits: '',
      floridacounty: '',
      georgiacounty: '',
      floridaspecialty: '',
      floridaspecialtynames: ''
    }
  };



  getRequest() {
    console.log(this.state.floridalimits.Hund[1])
    //AsyncStorage.getItem('username').then((value) => 
    //  this.setState({persons: value}));
    // axios.get('http://localhost:3000/send')
    // .then(res => 
    //   {this.setState({
    //   floridaLossFree: res.data.floridaLossFree, 
    //   georgiaLossFree: res.data.georgiaLossFree,
    //   floridalimits: res.data.floridalimits,
    //   floridalimitsnames: res.data.floridalimitsnames,
    //   georgialimits: res.data.georgialimits,
    //   floridacounty: res.data.floridacounty,
    //   georgiacounty: res.data.georgiacounty,
    //   floridaspecialty: res.data.floridaspecialty,
    //   floridaspecialtynames: res.data.floridaspecialtynames
    // })})
    // .catch(error => console.log(error))
  }

  resetValue() {
    this.setState({floridaLossFree: '', georgiaLossFree: ''});
  }

  componentDidMount = () => {
    axios.get('http://localhost:3000/send')
    .then(res => 
      {this.setState({
      floridaLossFree: res.data.floridaLossFree, 
      georgiaLossFree: res.data.georgiaLossFree,
      floridalimits: res.data.floridalimits,
      floridalimitsnames: res.data.floridalimitsnames,
      georgialimits: res.data.georgialimits,
      floridacounty: res.data.floridacounty,
      georgiacounty: res.data.georgiacounty,
      floridaspecialty: res.data.floridaspecialty,
      floridaspecialtynames: res.data.floridaspecialtynames
    })})
    .catch(error => console.log(error))
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

  map1() {
    return Object.keys(this.state.floridaLossFree).map((p, i) => <Text key={i}>{p}: {this.state.floridaLossFree[p]}</Text> );
  }
  map2() {
    return Object.keys(this.state.georgiaLossFree).map((p, i) => <Text key={i}>{p}: {this.state.georgiaLossFree[p]}</Text> );
  }
  map3() {
    return Object.keys(this.state.floridalimits).map((p, i) => <Text key={i}>{p}: {this.state.floridalimits[p]}</Text> );
  }
  map4() {
    return Object.keys(this.state.floridalimitsnames).map((p, i) => <Text key={i}>{p}: {this.state.floridalimitsnames[p]}</Text> );
  }
  map5() {
    return Object.keys(this.state.georgialimits).map((p, i) => <Text key={i}>{p}: {this.state.georgialimits[p]}</Text> );
  }
  map6() {
    return Object.keys(this.state.floridacounty).map((p, i) => <Text key={i}>{p}: {this.state.floridacounty[p]}</Text> );
  }
  map7() {
    return Object.keys(this.state.georgiacounty).map((p, i) => <Text key={i}>{p}: {this.state.georgiacounty[p]}</Text> );
  }
  map8() {
    return Object.keys(this.state.floridaspecialty).map((p, i) => <Text key={i}>{p}: {this.state.floridaspecialty[p]}</Text> );
  }
  map9() {
    return Object.keys(this.state.floridaspecialtynames).map((p, i) => <Text key={i}>{p}: {this.state.floridaspecialtynames[p]}</Text> );
  }

  calcFLcounty() {
    let i = 0;
    let array = Object.keys(this.state.floridacounty);
    for (i = 0; i < array.length; i++) {
      if (array[i] === 'Broward') {
        break;
      }
    }
    return this.state.floridacounty[array[i]];
  }

  calcFLspecialty() {
    let i = 0;
    let j = 0;
    //let j = this.props.number - 1;
    let array = this.state.floridalimits;
    let array2 = [];
    // let mo = [];

    // for (i=0; i<6; i++) {
    //   mo[i] = [];
    //   for (j=0; j<4; j++) {
    //     mo[i][j] = i*j;
    //   }
    // }
    
    mo = Object.keys(array).map(function(k) { return array[k] });
    
    // for (i=0; i<2; i++) {
    //     array2.push(i);
    // }
    //mo = Object.keys(array).map(function(v) { return array[v] });
    // let gi = Object.values(array[1]);
    // let z = gi.map(x => x*2);
    let arr = [
      [1, 2],
      [3, 4]
    ]
//console.log(array.Hund);
// let mo = this.state.floridalimits;

//      Object.keys(mo).map(el => {
//        mo.[el].map(sub_el => console.log(sub_el));
//      })
    //console.log(z.names[0]);
    //let zi = mo.length;
    //console.log(zi);
    return i;
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
          <Text>{this.calcFLspecialty()}</Text>
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