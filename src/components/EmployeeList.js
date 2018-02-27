import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
componentWillMount() {
  this.props.employeesFetch();
//runs when employee list about to load
  this.createDataSource(this.props);
}
// props might not immediately have values in nextProps
//but eventually it will. so to deal with that large
// use componentWillReceiveProps and use new set of props
componentWillReceiveProps(nextProps) {
//nextProps are the next set of props that this
//component will be rendered with
//this.props is still the old set of props
  this.createDataSource(nextProps);
}

createDataSource({ employees }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  //cloneWithRows works with arrays
  this.dataSource = ds.cloneWithRows(employees);
}

renderRow(employee) {
  return <ListItem employee={employee} />;
}
  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

//receives state.employees
// install lodash to convert from obj to array
// (val, uid) is key value pair, val has name, phone, shift
// map iterates, for each key value pair run this function
//{ ...val, uid } creates new obj, push in all values and put ID on mapStateToProps
// end result { shift: 'Monday', name: 'S', id: xxxxxx} for each obj
// puts each obj in array assigned to employees
// [{obj} {obj}...]

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
  return { ...val, uid };
});
return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
