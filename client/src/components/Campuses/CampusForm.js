import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { postCampus, updateCampus } from '../../store'

const mapStateToProps = ({ campuses }) => ({ campuses })

const mapDispatchToProps = dispatch => {
  return {
    postCampus: (campus) => dispatch(postCampus(campus)),
    updateCampus: (campus) => dispatch(updateCampus(campus))
  }
}

const CampusForm = ({ campusId, campuses, postCampus, updateCampus, history }) => {
  const initialCampus = campusId ? campuses.find(c => c.id === Number(c.id)) : null

  const [ name, setName ] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ description, setDescription ] = useState('')

  useEffect(() => {
    if (campusId) {
      console.log('updating initialCampus', initialCampus)
      setName(initialCampus.name)
      setImageUrl(initialCampus.imageUrl)
      setAddress(initialCampus.address)
      setDescription(initialCampus.description)
    }
  }, [campusId])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const campus = { name, imageUrl, address, description }
    if (campusId) {
      campus.id = campusId
      updateCampus(campus)
        .then(() => {
          history.push('/campuses')
        })
    } else {
      postCampus(campus)
        .then(() => {
          history.push('/campuses')
        })
    }
  }

  return (
    <div className={'d-flex flex-column align-items-center'}>
      <form onSubmit={handleSubmit} className={'d-flex flex-column align-items-center'}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={'Name'}
          type={'text'}
          name={'name'}
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
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder={'Address'}
          type={'text'}
          name={'address'}
          required
        />
        <textarea
          className={'margin-bottom-sm'}
          rows={5}
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder={'Description'}
          type={'text'}
          name={'description'}
        ></textarea>
        <div className={'d-flex flex-row justify-content-center'}>
          <button className={'btn btn-primary'} type={'submit'}>
            {
              campusId ?
                'Update' :
                'Create'
            } Campus
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusForm)