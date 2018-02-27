import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

//top level compenent inside application
// top level, need to have parent scene
//initial -- first to appear
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" intial />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            component={EmployeeList}
            title="Employees"
            backTitle=''
            initial
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
            backTitle=''
            // type='reset'
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
