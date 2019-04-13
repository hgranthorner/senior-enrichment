import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postCampus } from '../../store/store'

const mapDispatchToProps = dispatch => {
  return { postCampus: (campus) => dispatch(postCampus(campus))}
}

const CreateCampusForm = ({ postCampus, history }) => {
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const campus = { name, imageUrl, address, description }
    postCampus(campus)
      .then(() => {
        history.push('/')
      })
  }

  return (
    <div>
      <h1> Hello </h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={'Name'}
          type={'text'}
          name={'name'}
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
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder={'Address'}
          type={'text'}
          name={'address'}
          required
        /><br />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder={'Description'}
          type={'text'}
          name={'description'}
        /><br />
        <button className={'btn btn-primary'} type={'submit'}>Create Campus</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(CreateCampusForm)