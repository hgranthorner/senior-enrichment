import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../../store'

const mapDispatchToProps = dispatch => {
  return { postStudent: (student) => dispatch(postStudent(student))}
}

const CreateStudentForm = ({ postStudent, history }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [email, setEmail] = useState("")
  const [gpa, setGPA] = useState("")

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const student = { firstName, lastName, imageUrl, email, gpa }
    postStudent(student)
      .then(() => {
        history.push('/students')
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder={'First Name'}
          type={'text'}
          name={'firstName'}
          required
        /><br />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder={'Last Name'}
          type={'text'}
          name={'lastName'}
          required
        /><br />
        <input
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          placeholder={'ImageUrl'}
          type={'text'}
          name={'imageUrl'}
        /><br />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={'Email'}
          type={'text'}
          name={'email'}
          required
        /><br />
        <input
          value={gpa}
          onChange={e => setGPA(e.target.value)}
          placeholder={'GPA'}
          type={'text'}
          name={'gpa'}
        /><br />
        <button className={'btn btn-primary'} type={'submit'}>Create Student</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(CreateStudentForm)