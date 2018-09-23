import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    ImageBackground,
} from 'react-native';
import React, {Component} from 'react';
import Svg, {
    Path,
    G
} from 'react-native-svg';
import type2 from './type2';

let {width} = Dimensions.get('window');

export default class AwesomeTabbarTwo extends Component {
    constructor(props) {
        super(props);
        this.offsetX = new Animated.Value(0);
        this.oneOffsetY = new Animated.Value(0);
        this.twoOffsetY = new Animated.Value(0);
        this.threeOffsetY = new Animated.Value(-6);
        this.fourOffsetY = new Animated.Value(0);
        this.fiveOffsetY = new Animated.Value(0);

        moveSelected = moveSelected.bind(this);
        animateIcon = animateIcon.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[{transform: [{translateX: this.offsetX}]},styles.background]}>
                    <View style ={{position:'absolute',width:46,height:46,backgroundColor:this.props.backgroundColor,borderRadius:23,bottom:10}} />

                    <View style ={{position:'absolute',left:-((width/2)+32),width:width,height:52,backgroundColor:this.props.backgroundColor}}></View>
                <View style ={{width:64,height:52,alignSelf:'center'}}>
                    <Svg  version="1.0" style={{height:52,width:64}} width="64" height="52" viewBox="0 0 6400 5200" preserveAspectRatio="xMidYMid meet">
                        <Path fill={this.props.backgroundColor} d="M0 2599 l0 -2600 298 3 298 3 76 38 c169 83 268 243 268 431 0 104 -14 153 -88 306 -141 292 -225 626 -240 951 -22 463 60 861 262 1274 134 272 283 480 498 692 424 420 963 678 1553 743 129 14 421 14 550 0 590 -65 1129 -323 1553 -743 215 -212 364 -420 498 -692 202 -413 284 -811 262 -1274 -15 -327 -97 -650 -243 -961 -75 -158 -89 -212 -83 -329 3 -75 9 -97 43 -166 50 -104 136 -192 232 -238 l68 -32 298 -3 297 -3 0 2600 0 2601 -3200 0 -3200 0 0 -2601z"/>

                    </Svg>
                </View>


                <View style ={{position:'absolute',right:-((width/2)+32),width:width,height:52,backgroundColor:this.props.backgroundColor}}></View>
                </Animated.View>
                <View style={styles.tabBar}>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(1);
                        moveSelected(1)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.oneOffsetY}]}}>
                            {this.props.icons[0]}
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(2);
                        moveSelected(2)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.twoOffsetY}]}}>
                            {this.props.icons[1]}

                        </Animated.View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(3);
                        moveSelected(3)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.threeOffsetY}]}}>
                            {this.props.icons[2]}
                        </Animated.View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(4);
                        moveSelected(4)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.fourOffsetY}]}}>
                            {this.props.icons[3]}
                        </Animated.View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(5);
                        moveSelected(5)
                    }} style={{width: width / 5, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.fiveOffsetY}]}}>
                            {this.props.icons[4]}
                        </Animated.View>

                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        position: 'absolute',
        bottom: 0,
        flexDirection:'row'
    },
    background: {
        width: width,
        position: 'absolute',
        bottom: 0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    tabBarBack: {
        width: width,
        height: 56,
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute'

    },
    tabBar: {
        width: width,
        height: 56,
        alignSelf: 'center',
        flexDirection: 'row'

    },
    curveContainer: {

        alignSelf: 'center',
        position: 'absolute',
        top: -22,
        right: -35,
    },
    content: {
        flexDirection: "column",
        zIndex: 0,
        width: (Dimensions.get('window').width - 30),
        marginBottom: '4%',
        left: '4%',
        right: '4%',
    },
    selectedContainer: {
        width: 56,
        height: 56,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 40,
    },
    roundedButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        top:4
    },
    subContent: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        zIndex: 1,
        position: 'absolute',
        bottom: 5,
    },
    navItem: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        zIndex: 0,
    },
    navImage: {
        width: 45,
        height: 45,
    },
    circle: {
        bottom: 18,
    }
});

export function moveSelected(index) {
    let value: 0;
    animateIcon(-1);
    switch (index) {
        case 1: {
            value = -2 * (width / 5);
            break;
        }
        case 2: {
            value = -(width / 5);
            break;
        }
        case 3: {
            value = 0;
            break;
        }
        case 4: {
            value = (width / 5);
            break;
        }
        case 5: {
            value = 2 * (width / 5);
            break;
        }
    }

    Animated.parallel([
        Animated.timing(
            this.offsetX,
            {
                toValue: value,
                duration: 500,
            }
        ),
    ]).start(() => animateIcon(index));

}

export function animateIcon(index) {
    let value1: 0;
    let value2: 0;
    let value3: 0;
    let value4: 0;
    let value5: 0;

    if (index === 1) {
        value1 = -6;
    }
    else if (index === 2) {
        value2 = -6;
    }
    else if (index === 3) {
        value3 = -6;
    }
    else if (index === 4) {
        value4 = -6;
    }
    else if (index === 5) {
        value5 = -6;
    }

    Animated.parallel([
        Animated.timing(
            this.oneOffsetY,
            {
                toValue: value1,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.twoOffsetY,
            {
                toValue: value2,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.threeOffsetY,
            {
                toValue: value3,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fourOffsetY,
            {
                toValue: value4,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fiveOffsetY,
            {
                toValue: value5,
                duration: 100,
                useNativeDriver: true
            }
        )
    ]).start();
}
