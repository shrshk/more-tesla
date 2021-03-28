// @flow
import { connect } from 'react-redux';
import { TestPage } from './test.component';
import { loadSampleDataAction } from 'src/resource/test/actions/load-sample-data';

const mapDispatchToProps = {
    loadSampleDataAction,
};

export const TestPageContainer = connect(
    null,
    mapDispatchToProps
)(TestPage);
