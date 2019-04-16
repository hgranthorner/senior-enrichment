import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postStudent, updateStudent } from '../../store'

const mapStateToProps = ({ students }) => ({ students })

const mapDispatchToProps = dispatch => {
  return {
    postStudent: (student) => dispatch(postStudent(student)),
    updateStudent: (student) => dispatch(updateStudent(student))
  }
}

const StudentForm = ({ studentId, students, postStudent, updateStudent, history }) => {
  const initialStudent = studentId ? students.find(s => s.id === Number(studentId)) : null

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [email, setEmail] = useState('')
  const [gpa, setGPA] = useState('')

  useEffect(() => {
    if (studentId) {
      console.log('updating states', initialStudent)
      setFirstName(initialStudent.firstName)
      setLastName(initialStudent.lastName)
      setImageUrl(initialStudent.imageUrl)
      setEmail(initialStudent.email)
      setGPA(initialStudent.gpa)
    }
  }, [initialStudent])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const student = { firstName, lastName, imageUrl, email, gpa }
    if (initialStudent) {
      student.id = studentId
      updateStudent(student)
        .then(() => {
          console.log('success!')
          history.push('/students')
        })
    } else {
      postStudent(student)
        .then(() => {
          history.push('/students')
        })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={'d-flex flex-column align-items-center'}>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder={'First Name'}
          type={'text'}
          name={'firstName'}
          required
        />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder={'Last Name'}
          type={'text'}
          name={'lastName'}
          required
        />
        <input
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          placeholder={'ImageUrl'}
          type={'text'}
          name={'imageUrl'}
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={'Email'}
          type={'text'}
          name={'email'}
          required
        />
        <input
          value={gpa}
          onChange={e => setGPA(e.target.value)}
          placeholder={'GPA'}
          type={'text'}
          name={'gpa'}
        />
        <button className={'btn btn-primary'} type={'submit'}>
          {
            studentId ?
              'Update Student' :
              'Create Student'
          }
        </button>
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm)