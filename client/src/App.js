import React, { useEffect } from 'react'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Students, SingleStudent, CreateStudentForm, Campuses, SingleCampus, CreateCampusForm, Nav} from './components'
import { fetchStudents, fetchCampuses } from './store'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    fetchCampuses: () => dispatch(fetchCampuses()),
  }
}

const App = ({ fetchStudents, fetchCampuses }) => {
  useEffect(() => {
    Promise.all([fetchCampuses(), fetchStudents()])
  }, [])

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to='/campuses'/>}/>
        <Route path={'/campuses'} exact component={Campuses}/>
        <Route path={'/campuses/create'} exact component={CreateCampusForm} />
        <Route path={'/campuses/:id'} exact render={({match}) => <SingleCampus campusId={match.params.id}/>}/>
        <Route path={'/students'} exact component={Students}/>
        <Route path={'/students/create'} exact component={CreateStudentForm} />
        <Route path={'/students/:id'} exact render={({match}) => <SingleStudent studentId={match.params.id}/>}/>
      </Switch>
    </Router>
  )
}

export default connect(null, mapDispatchToProps)(App)
