import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';

const array = new Array(100).fill(null).map((el, index) => ({
    id: index + 1,
    title: `lesson react native ${index + 1}`
}))

export default function App() {

    const render = ({item, index, separators}) => {
        return (
            <View><Text>{item.title}</Text></View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={array} renderItem={render}/>
            <StatusBar />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7cbe77',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

