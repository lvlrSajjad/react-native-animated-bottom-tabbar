
# react-native-animated-bottom-tabbar [![npm version](https://img.shields.io/npm/v/react-native-animated-bottom-tabbar.svg)](https://www.npmjs.com/package/react-native-animated-bottom-tabbar)
<img src="https://raw.githubusercontent.com/lvlrSajjad/react-native-animated-bottom-tabbar/master/videoshot.gif">

## Getting started

`$ npm install react-native-animated-bottom-tabbar --save`
`$ npm install react-native-svg --save`
`$ react-native link react-native-svg`

## Usage
```javascript
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import AwesomeTabbar from "react-native-animated-bottom-tabbar"; //<-----------------import

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//array of icon views this array can be image or vector icon for tab  bar
const icons = [
    <Image
        source={require('./menu.png')}
        style={{width: 32, height: 32}}/>,
    <Image
        source={require('./magnify.png')}
        style={{width: 32, height: 32}}/>,
    <Image
        source={require('./message.png')}
        style={{width: 32, height: 32}}/>,
    <Image
        source={require('./volume-low.png')}
        style={{width: 32, height: 32}}/>,
    <Image
        source={require('./map-marker.png')}
        style={{width: 32, height: 32}}/>
];
type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                {/* here*/}
                <AwesomeTabbar
                    icons={icons} //array of icon views this array can be image or vector icon
                    selectedColor={'#FF8F00'} //color of selected item in tab bar
                    backgroundColor={'#212121'} //background color of tab bar
                    onSelect={(index)=>console.log(index)} //on select an item , index starts at 1 :-D
                />
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

```
