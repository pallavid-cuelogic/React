import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    
    componentDidMount () {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (this.state.courseTitle !== param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }

    render () {
        return (
            <div>
                <h2>{this.state.courseTitle}</h2>
                <p>Your Selected Course ID= {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;