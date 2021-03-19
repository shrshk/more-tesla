// @flow
import * as React from 'react';
import { Text, View } from 'react-native';

type TestPageProps = {
    loadSampleDataAction: () => void,
};

export class TestPage extends React.PureComponent<TestPageProps> {
    componentDidMount() {
        this.props.loadSampleDataAction();
    }

    render() {
        return <Text>Test Page</Text>;
    }
}
