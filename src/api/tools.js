export const getTools = async () => {
  const stateTools = JSON.parse(localStorage.getItem('tools'))
  if(stateTools) {
    return stateTools.items
  }
  return []
}

export const saveTool = async (tool) => {
  const stateTools = JSON.parse(localStorage.getItem('tools'))
  if(stateTools) {
    stateTools.items = [...stateTools.items, tool]
  } else {
    stateTools.items = [tool]
  }

  localStorage.setItem('tools', JSON.stringify(stateTools))

  return tool;
}