import ModeButtons from "./ModeButtons"
import DescriptionCell from "./DescriptionCell"
import RateCell from "./RateCell"
import HoursCell from "./HoursCell"
import formatCurrency from "../utils/formatCurrency.js"
import { useState } from 'react'
import axios from 'axios'


const TableRow = ({ initialIsEditing, initialInvoiceData, deleteFunc, id }) => {
 
const [editMode, setEditMode] = useState(initialIsEditing)
const [description, setDescription] = useState(initialInvoiceData.description)
const [rate, setRate] = useState(initialInvoiceData.rate)
const [hours, setHours] = useState(initialInvoiceData.hours)


 const changeNormalMode = async () => {
    // create new obj to send back as the body the current statee vals of desc/rate/hours
    let bodyObj = {
        description: description,
        rate: rate,
        hours: hours,
    }
    const response = await axios.put(`/editInvoice/${id}`, bodyObj)


        if (!response.data.error) {
            setEditMode(false)
        } else {
            alert('Something went wrong')
        }
}


 const changeEditMode = () => setEditMode(true)


  return (
    <>
    <tr>
    <ModeButtons 
        isEditing={editMode}
        saveClick={changeNormalMode}
        editClick={changeEditMode}
        funkyDelete={deleteFunc}
    />
    <DescriptionCell
        isEditing={editMode} 
        value={description}
        onValueChange={setDescription}
    />
    <RateCell 
        isEditing={editMode} 
        value={rate}
        onValueChange={setRate}
    />
    <HoursCell 
        isEditing={editMode} 
        value={hours}
        onValueChange={setHours}
    />
    <td>{formatCurrency(rate * hours)}</td>
</tr>
  </>
  )

}

export default TableRow
