import React from 'react'

const AddButton = ({ addClick }) => {
  return (
    <tr>
      <td></td>
      <td colSpan={4 }>
        <button onClick={addClick}>Add Row</button>
      </td>
    </tr>
  )
}

export default AddButton