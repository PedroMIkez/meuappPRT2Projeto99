import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Header} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:'',
      displayText:'',
    }
  }
  render(){
    return(
      <SafeAreaProvider>
        <View style= {styles.container}>
          <Header
            backgroundColor={'#00FF00'}
            centerComponent={{
              text:'Dicionário Minecraft',
              style:{color:'black',fontSize:40},
            }}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({text:text});
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButtom}
            onPress={() => {
              this.setState({displayText:this.state.text});
            }}>
              <Text style={styles.buttomText}>Pesquisar</Text>
            </TouchableOpacity>
          <Text>{this.state.displayText}</Text>
        </View>
      </SafeAreaProvider>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#8B4513',
    alignItems: 'center',
    justifyContent: 'top',
  },
  inputBox: {
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
    outeline:'none',
  },
  goButtom: {
    width:'50%',
    height:55,
    alignSelf:'center',
    padding:60,
    margin:10,
  },
  buttomText: {
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#DCDCDC',
  },
  displayText: {
    textAlign:'center',
    fontSize:30,
  },
});
