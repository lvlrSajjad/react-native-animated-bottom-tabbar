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
    Path
} from 'react-native-svg';
import AwesomeTabbarTwo from './type2';

let {width} = Dimensions.get('window');

export {AwesomeTabbarTwo};

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

export default class AwesomeTabbar extends Component {
    constructor(props) {
        super(props);
        let initialIndex = 3;
        initialIndex = initialIndexDetector(props.icons.length);
        let xValue =0;
        if (props.icons.length === 2){
            xValue = -((width/props.icons.length)/2);
        } else if (props.icons.length === 4) {
            xValue = -((width/props.icons.length)+(width/props.icons.length/2));
        }
        this.offsetX = new Animated.Value(xValue);
        this.oneOffsetY = new Animated.Value(initialIndex === 1 ? -10:0);
        this.twoOffsetY = new Animated.Value(initialIndex === 2 ? -10:0);
        this.threeOffsetY = new Animated.Value(initialIndex === 3 ? -10:0);
        this.fourOffsetY = new Animated.Value(initialIndex === 4 ? -10:0);
        this.fiveOffsetY = new Animated.Value(initialIndex === 5 ? -10:0);

        moveSelected = moveSelected.bind(this);
        animateIcon = animateIcon.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={[{backgroundColor: this.props.backgroundColor},styles.tabBarBack]}/>
                <Animated.View style={[{transform: [{translateX: this.offsetX}]}, styles.selectedContainer]}>
                    <Svg style={styles.curveContainer} version="1.1" width='128' height="64" x="0px" y="0px"
                         viewBox="0 0 128 64" space="preserve">
                        {/*<Path fill={this.props.backgroundColor} d="M125.3,64.2c-6.6-0.6-13.2-1.6-19.7-2.9c-2.5-0.5-5-1.1-7.4-2.2c-4.5-2-8.2-5.9-10.4-10.6C75.2,25.4,52.1,23.8,40,50.2V50*/}
	{/*c-2.2,4.3-5.9,7.8-10.4,9.6c-2.4,1-4.9,1.5-7.4,2c-6.5,1.2-13.1,2.1-19.7,2.6"/>*/}
                        <Path fill={this.props.backgroundColor} d="M128,64.2c-6.9-0.3-13.7-0.7-20.5-1.3c-2.6-0.2-5.2-0.5-7.7-1c-4.7-0.9-8.6-2.6-10.8-4.7C75.7,47,51.6,46.3,39.1,58v-0.1
	c-2.3,1.9-6.2,3.5-10.8,4.3c-2.5,0.4-5.1,0.7-7.7,0.9C13.7,63.6,6.9,64,0,64.2"/>

                    </Svg>
                    <ImageBackground style={{
                        position: 'absolute', alignSelf: 'center',
                        top: 26,width:56,height:56,alignItems:'center',justifyContent:'center'
                    }}
                    source={require('./shadow.png')}
                    >
                        <View style={[{backgroundColor: this.props.selectedColor},styles.roundedButton]}/>
                    </ImageBackground>

                </Animated.View>
                <View style={styles.tabBar}>
                    {this.props.icons[0] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(1);
                        moveSelected(1)
                    }} style={{width: width / this.props.icons.length, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.oneOffsetY}]}}>
                            {this.props.icons[0]}
                        </Animated.View>
                    </TouchableOpacity>
                    }
                    {this.props.icons[1] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(2);
                        moveSelected(2)
                    }} style={{width: width / this.props.icons.length, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.twoOffsetY}]}}>
                            {this.props.icons[1]}

                        </Animated.View>

                    </TouchableOpacity>
                    }
                    {this.props.icons[2] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(3);
                        moveSelected(3)
                    }} style={{width: width / this.props.icons.length, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.threeOffsetY}]}}>
                            {this.props.icons[2]}
                        </Animated.View>

                    </TouchableOpacity>
                    }
                    {this.props.icons[3] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(4);
                        moveSelected(4)
                    }} style={{width: width / this.props.icons.length, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Animated.View style={{transform: [{translateY: this.fourOffsetY}]}}>
                            {this.props.icons[3]}
                        </Animated.View>

                    </TouchableOpacity>
                    }
                    {this.props.icons[4] &&

                    <TouchableOpacity onPress={() => {
                        this.props.onSelect(5);
                        moveSelected(5)
                    }} style={{width: width / this.props.icons.length, height: 56, alignItems: 'center', justifyContent: 'center'}}>
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
                toValue: index === 1 ? -10 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.twoOffsetY,
            {
                toValue: index === 2 ? -10 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.threeOffsetY,
            {
                toValue: index === 3 ? -10 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fourOffsetY,
            {
                toValue: index === 4 ? -10 : 0,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.fiveOffsetY,
            {
                toValue: index === 5 ? -10 : 0,
                duration: 100,
                useNativeDriver: true
            }
        )
    ]).start();
}


