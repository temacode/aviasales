import React from 'react';
import TasksContainer from './TasksContainer';
import Final from './Final';

class Content extends React.Component {
    componentDidMount() {
        this.props.checkUser();
    }

    render() {
        return this.props.isSocialsSent && this.props.isEmailSent ?
            <Final></Final> :
            <TasksContainer></TasksContainer>;
    }
}

export default Content;