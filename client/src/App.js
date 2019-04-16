import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Students, SingleStudent, StudentForm,
  Campuses, SingleCampus, CampusForm, Nav } from './components'
import { fetchStudents, fetchCampuses } from './store'
import { connect } from 'react-redux'

const mapStateToProps = ({ selectedPage }) => ({ selectedPage })

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    fetchCampuses: () => dispatch(fetchCampuses()),
  }
}

const App = ({ fetchStudents, fetchCampuses, selectedPage }) => {
  useEffect(() => {
    console.log('Loaded all data')
    Promise.all([ fetchCampuses(), fetchStudents() ])
  }, [])

  return (
    <Router>
      <h1 className={'d-flex justify-content-center'}>Our {selectedPage}</h1>
      <Nav/>
      <Switch>
        <Route path={'/'} exact
               render={() => <Redirect to='/campuses'/>}
        />
        <Route path={'/campuses'} exact
               component={Campuses}
        />
        <Route path={'/campuses/create'} exact
               component={CampusForm}
        />
        <Route path={'/campuses/:id'} exact
               render={({ match }) => <SingleCampus campusId={match.params.id}/>}
        />
        <Route path={'/campuses/update/:id'} exact
               render={({ match, history }) => <CampusForm campusId={match.params.id} history={history}/>}
        />
        <Route path={'/students'} exact
               component={Students}
        />
        <Route path={'/students/create'} exact
               component={StudentForm}
        />
        <Route path={'/students/update/:id'} exact
               render={({ match, history }) => <StudentForm studentId={match.params.id} history={history}/>}
        />
        <Route path={'/students/:id'} exact
               render={({ match }) => <SingleStudent studentId={match.params.id}/>}
        />
      </Switch>
    </Router>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
