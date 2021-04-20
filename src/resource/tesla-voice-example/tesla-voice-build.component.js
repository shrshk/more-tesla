import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import Voice, {
    SpeechRecognizedEvent,
    SpeechResultsEvent,
    SpeechErrorEvent,
} from '@react-native-voice/voice';

// TODO: on listening show activity monitor
const _startRecognizing = async () => {
    try {
        const x = await Voice.start('en-US');
        console.log("voice recognition started" + x);
        // await Voice.onSpeechError(e => {
        //     console.log("speech errored");
        //     throw error(e.error);
        // })
        // await Voice.onSpeechRecognized(e => {
        //     console.log("speech recognized");
        // })
        // await Voice.onSpeechResults(e => {
        //     console.log("speech results below");
        //     console.log(e.value);
        // });
        // await Voice.stop();
        console.log("voice recognition stopped");
    } catch (e) {
        console.error(e);
    }
};

const _cancelRecognizing = async () => {
    try {
        console.log('about to cancel');
        // update redux value to stop listening to remove the activity indicator.
        await Voice.cancel();
    } catch (e) {
        console.error(e);
    }
};

const onSpeechError = (e) => {
    console.log("sorry speech error"  + e.error);
};

const onSpeechRecognized = (e) => {
    console.log("speech recognized"  + e.isFinal);
    // Voice.cancel().then(value => {
    //     console.log("recording stopped" + value);
    // })._onError(err => {
    //     console.log("error recording stopped" + err);
    // });
}

const onSpeechResults = (e) => {
    console.log("speech results are"  + e.value);
    // on results call backend
    setTimeout(() => {
        _cancelRecognizing();
    }, 1000);
}

const onSpeechEnd = (e) => {
    console.log("did speech end" + e);
}

const onSpeechVolumeChanged = (e) => {
    // console.log("volume changed" + e);
    // setTimeout(() => {
    //     _cancelRecognizing();
    //     // Voice.cancel().then(value => {
    //     //     console.log("recording stopped" + value);
    //     // })._onError(err => {
    //     //     console.log("error recording stopped" + err);
    //     // });
    // }, 1000);
}

export const TeslaVoiceBuild = () => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native Voice!</Text>
            <Text style={styles.instructions}>
                Press the button and start speaking.
            </Text>
            <TouchableHighlight onPress={_startRecognizing}>
                {/*<Image style={styles.button} source='https://raw.githubusercontent.com/react-native-voice/voice/master/example/src/button.png' />*/}
                <Text style={styles.action}>Start Talking</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={_cancelRecognizing}>
                <Text style={styles.action}>Cancel</Text>
            </TouchableHighlight>
        </View>
    );
};


// export class TeslaVoiceBuildC extends Component<Props, State> {
//
//     _startRecognizing = async () => {
//         try {
//             const x = await Voice.start('en-US');
//             console.log("voice recognition started" + x);
//             // await Voice.onSpeechError(e => {
//             //     console.log("speech errored");
//             //     throw error(e.error);
//             // })
//             // await Voice.onSpeechRecognized(e => {
//             //     console.log("speech recognized");
//             // })
//             // await Voice.onSpeechResults(e => {
//             //     console.log("speech results below");
//             //     console.log(e.value);
//             // });
//             // await Voice.stop();
//             console.log("voice recognition stopped");
//         } catch (e) {
//             console.error(e);
//         }
//     };
//
//     _cancelRecognizing = async () => {
//         try {
//             await Voice.cancel();
//         } catch (e) {
//             console.error(e);
//         }
//     };
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Welcome to React Native Voice!</Text>
//                 <Text style={styles.instructions}>
//                     Press the button and start speaking.
//                 </Text>
//                 <TouchableHighlight onPress={this._startRecognizing}>
//                     {/*<Image style={styles.button} source='https://raw.githubusercontent.com/react-native-voice/voice/master/example/src/button.png' />*/}
//                     <Text style={styles.action}>Start Talking</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight onPress={this._cancelRecognizing}>
//                     <Text style={styles.action}>Cancel</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
    },
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
    action: {
        textAlign: 'center',
        color: '#0000FF',
        marginVertical: 5,
        fontWeight: 'bold',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    stat: {
        textAlign: 'center',
        color: '#B0171F',
        marginBottom: 1,
    },
});