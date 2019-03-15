import React from 'react'
import { connect } from 'react-redux'
import { addTool, saveTool } from 'src/actions/tools'

const AddTool = ({ saveTool }) => {
  let title
  let description

  const onSubmit = e => {
    e.preventDefault()
    if (!title.value.trim() || !description.value.trim()) {
      return
    }
    saveTool({title: title.value, description: description.value}, false)
    title.value = ''
    description.value = ''
  }

  return (
    <form
      onSubmit={onSubmit}>
      <input ref={node => (title = node)}/>
      <textarea ref={node => (description = node)}></textarea>
      <button type="submit">Add Tool</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  saveTool: (tool) => dispatch(saveTool(tool))
});

export default connect(mapDispatchToProps)(AddTool)
