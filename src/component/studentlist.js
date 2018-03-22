import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetAllStudents } from '../action/index'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class StudentList extends Component {


    componentWillMount() {
        this.props.GetAllStudents();

    }
    render() {

        if (this.props.students) {
            var studentList = JSON.parse(this.props.students);
        }
        return (
            <div>
                {
                    <ul>{studentList?studentList.map((s) => {
                        return <li>{s.name}</li>
                    }):''}</ul>

                }
                <Link to={`/new`}>
                    Add Student
            </Link>
            </div>
        )
    }
}

function mapStatesToProps(state) {
    return {
        students: state.students
    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ GetAllStudents }, dispatch);
}
export default connect(mapStatesToProps, mapDispatchToProps)(StudentList)
