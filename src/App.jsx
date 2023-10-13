import './App.css';
import InvoiceTable from './components/InvoiceTable'


function App({ initialData }) {
  return (
  <>
    <InvoiceTable initialInvoiceData={initialData}/>
  </>
  )

}

export default App;
