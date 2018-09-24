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

function initialIndexDetector(length) {
    if (length === 1) {
        return 1;
    } else if (length === 2) {
        return 1;
    } else if (length === 3) {
        return 2;
    } else if (length === 4) {
        return 1;
    } else if (length === 5) {
        return 3;
    }
}


export default class AwesomeTabbarTwo extends Component {
    constructor(props) {
        super(props);
        let initialIndex = 3;
        initialIndex = initialIndexDetector(props.icons.length);
        let xValue =0;
        if (props.icons.length === 2){
            xValue = -((width/props.icons.length)/2)
        } else if (props.icons.length === 4) {
            xValue = -((width/props.icons.length)+(width/props.icons.length/2))

        }
        this.offsetX = new Animated.Value(xValue);

        this.oneOffsetY = new Animated.Value(initialIndex === 1 ? -6 : 0);
        this.twoOffsetY = new Animated.Value(initialIndex === 2 ? -6 : 0);
        this.threeOffsetY = new Animated.Value(initialIndex === 3 ? -6 : 0);
        this.fourOffsetY = new Animated.Value(initialIndex === 4 ? -6 : 0);
        this.fiveOffsetY = new Animated.Value(initialIndex === 5 ? -6 : 0);

        moveSelected = moveSelected.bind(this);
        animateIcon = animateIcon.bind(this);
    }


    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[{transform: [{translateX: this.offsetX}]}, styles.background]}>
                    <View style={{
                        position: 'absolute',
                        width: 46,
                        height: 46,
                        backgroundColor: this.props.backgroundColor,
                        borderRadius: 23,
                        bottom: 10
                    }}/>

                    <View style={{
                        position: 'absolute',
                        left: -((width / 2) + 32),
                        width: width,
                        height: 52,
                        backgroundColor: this.props.backgroundColor
                    }}></View>
                    <View style={{width: 64, height: 52, alignSelf: 'center'}}>
                        <Svg version="1.0" style={{height: 52, width: 64}} width="64" height="52"
                             viewBox="0 0 6400 5200" preserveAspectRatio="xMidYMid meet">
                            <Path fill={this.props.backgroundColor}
                                  d="M0 2599 l0 -2600 298 3 298 3 76 38 c169 83 268 243 268 431 0 104 -14 153 -88 306 -141 292 -225 626 -240 951 -22 463 60 861 262 1274 134 272 283 480 498 692 424 420 963 678 1553 743 129 14 421 14 550 0 590 -65 1129 -323 1553 -743 215 -212 364 -420 498 -692 202 -413 284 -811 262 -1274 -15 -327 -97 -650 -243 -961 -75 -158 -89 -212 -83 -329 3 -75 9 -97 43 -166 50 -104 136 -192 232 -238 l68 -32 298 -3 297 -3 0 2600 0 2601 -3200 0 -3200 0 0 -2601z"/>

                        </Svg>
                    </View>


                    <View style={{
                        position: 'absolute',
                        right: -((width / 2) + 32),
                        width: width,
                        height: 52,
                        backgroundColor: this.props.backgroundColor
                    }}></View>
                </Animated.View>
                <View style={styles.tabBar}>
                    {this.props.icons[0] &&
                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(1);
                        moveSelected(1)
                    }} style={{
                        width: width / this.props.icons.length,
                        height: 56,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Animated.View style={{transform: [{translateY: this.oneOffsetY}]}}>
                            {this.props.icons[0]}
                        </Animated.View>
                    </TouchableOpacity>
                    }
                    {this.props.icons[1] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(2);
                        moveSelected(2)
                    }} style={{
                        width: width / this.props.icons.length,
                        height: 56,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Animated.View style={{transform: [{translateY: this.twoOffsetY}]}}>
                            {this.props.icons[1]}

                        </Animated.View>

                    </TouchableOpacity>
                    }
                    {this.props.icons[2] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(3);
                        moveSelected(3)
                    }} style={{
                        width: width / this.props.icons.length,
                        height: 56,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Animated.View style={{transform: [{translateY: this.threeOffsetY}]}}>
                            {this.props.icons[2]}
                        </Animated.View>

                    </TouchableOpacity>
                    }
                    {this.props.icons[3] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(4);
                        moveSelected(4)
                    }} style={{
                        width: width / this.props.icons.length,
                        height: 56,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Animated.View style={{transform: [{translateY: this.fourOffsetY}]}}>
                            {this.props.icons[3]}
                        </Animated.View>

                    </TouchableOpacity>
                    }
                    {this.props.icons[4] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(5);
                        moveSelected(5)
                    }} style={{
                        width: width / this.props.icons.length,
                        height: 56,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Animated.View style={{transform: [{translateY: this.fiveOffsetY}]}}>
                            {this.props.icons[4]}
                        </Animated.View>

                    </TouchableOpacity>
                    }
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
        flexDirection: 'row'
    },
    background: {
        width: width,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
        top: 4
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
    let value = 0;
    value = detectNewOffset(index, this.props.icons.length);
    animateIcon(-1);

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

function detectNewOffset(index, length)
{
    if (length === 1) {
        return 0;
    } else {
        let value = 0;
        console.log(index);
        switch (index) {
            case 1: {
                if (length === 5) {
                    value = -2 * (width / length);
                }
                else if (length === 2) {
                    value = -((width/length)/2);
                }else if (length ===4){
                    value = -((width/length)+(width/length/2));
                }
                else if (length === 3) {
                    value = -(width / length);
                }
                break;
            }
            case 2: {
                if (length === 5) {
                    value = -(width / length);
                } else if (length === 2 ) {
                    value = (width / length)-((width / length)/2);
                } else if (length === 4){
                    value = -((width/length)+(width/length/2))+(width/length);
                }  else if (length === 3) {
                    value = 0;
                }
                break;
            }
            case 3: {
                if (length === 5) {
                    value = 0;
                } else if (length === 4) {
                    value = -((width/length)+(width/length/2))+(2*(width/length));
                } else if (length === 3) {
                    value = (width / length);
                }
                break;
            }
            case 4: {
                if (length === 5) {
                    value = (width / length);
                } else if (length === 4) {
                    value = -((width/length)+(width/length/2))+(3*(width/length));
                }
                break;
            }
            case 5: {
                if (length === 5) {
                    value = 2 * (width / length);
                }
                break;
            }
        }
        return value;
    }
}

export function animateIcon(index) {

    Animated.parallel([
        Animated.timing(
            this.oneOffsetY,
            {
                toValue: index === 1 ? -6 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.twoOffsetY,
            {
                toValue: index === 2 ? -6 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.threeOffsetY,
            {
                toValue: index === 3 ? -6 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fourOffsetY,
            {
                toValue: index === 4 ? -6 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fiveOffsetY,
            {
                toValue: index === 5 ? -6 : 0,
                duration: 100,
                useNativeDriver: true
            }
        )
    ]).start();
}
