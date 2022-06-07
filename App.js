import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{width: 300, height: 300, backgroundColor: '#e1d8d8'}}>

                <TouchableOpacity>
                    <View><Text>TouchableOpacity</Text></View>
                </TouchableOpacity>

            </View>
            <StatusBar style={'inverted'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c400bc',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

