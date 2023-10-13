import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import AddButton from './AddButton.jsx'
import TableRow from './TableRow';
import { useState } from 'react'
import axios from 'axios';

let globalId = 4

const InvoiceTable = ({ initialInvoiceData }) => {
        const [currentData, setCurrentData] = useState(initialInvoiceData)
        const rows = currentData.map((invoiceItem) => {
        const { id, description, rate, hours } = invoiceItem
        const isEditing = invoiceItem.isEditing

        return (
            <TableRow
                key={id}
                id={id}
                initialInvoiceData={{ description, rate, hours }}
                initialIsEditing={isEditing}
                deleteFunc={() => deleteRow(id)}
            />
        )
    })
    const addRow = async () => {

        const response = await axios.post('/addInvoice', { description: 'Job description here'})

        setCurrentData([...currentData, response.data])

    }
    const deleteRow = async (itemId) => {

        const response = await axios.delete(`/deleteInvoice/${itemId}`)

        if (!response.data.error) {

            const filteredList =  currentData.filter((invoiceItem) => invoiceItem.id !== itemId)
       
            setCurrentData(filteredList)
        }
    }
    //addRow function to pass to <AddButton /> to give it the ability to add a new object (row) to our currentData array



    //     //get a copy of the current daata
    //     const newInvoiceData = [...currentData]
    //     //create a new 'blank' objecr for the new row (modeled after each element in TEST_DATA)
    //     const newRow = {
    //         id: globalId,
    //         description: 'Description',
    //         rate: '',
    //         hours: '',
    //         isEditing: true,
    //     }
    //     //add newRow object to end of our copy of currentData
    //     newInvoiceData.push(newRow)

    //     //call setCurrenData to change state of currentData
    //     setCurrentData(newInvoiceData)

    //     globalId++

    //     //delete function to pass to <TableRow /> components
        

    //     //using the given id^, find the corresponding element in currentData and remove it
       
    // }
        return (
            <div>
                <table>

                    <thead>
                        <TableHeader />
                    </thead>

                    <tbody>

                        {rows}

                    </tbody>

                    <tfoot>
                        <AddButton 
                        addClick={addRow}/>
                    </tfoot>

                </table>
            </div>
        )
}


export default InvoiceTable
