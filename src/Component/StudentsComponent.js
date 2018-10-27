import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StudentDetails from './StudentDetailsComponent';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          name: 'Hentry',
          class: '12th',
        },
      ],
    };
  }

  clickHandler = (student, e) => {
    const url = `/students/details/${student.class}`;
    this.props.history.push(url);
  };

  goToUsersPage = () => {
    this.props.history.push('/users');
  };

  render() {
    return (
      <div className="students-list">
        {this.state.students.map(student => {
          return (
            <div className="each-student">
              <div onClick={this.clickHandler.bind(this, student)}>{student.name}</div>
            </div>
          );
        })}

        <Route path="/students/details/:class" component={StudentDetails} />

        <Link to="/users">Go To Users</Link>
      </div>
    );
  }
}

export default Students;
