//set up a global variable to stimulate a DB

let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];
  
  let globalId = 4
  const handlerFunctions = {
    //each key of handlerFunctions is a function, whose value is the function definition

    getInvoices:  (req, res) => {
        res.send(TEST_DATA)
  },

  addInvoice: (req, res) => {
    //get description/rate/hours from req.body
    const { description, rate, hours} = req.body

    // create a new object
    const newObj = {
        id: globalId,
        description: description,
        rate: 0,
        hours: 0,
    }

    //add newObj to TEST_DATA
    TEST_DATA.push(newObj)

    //increment globalId for newObj creation
    globalId++

    //send back the newObj
    res.send(newObj)
  },

  deleteInvoice: (req, res) => {
    const id = req.params.id

    TEST_DATA = TEST_DATA.filter((invoice) => invoice.id !== +id)

    res.send(TEST_DATA)
  },

    editInvoice: (req, res) => {
        const { id } = req.params
        const { description, rate, hours }  = req.body

        //need to find corresponding index of the corrext invoice in TEST_DATA
        const index = TEST_DATA.findIndex(invoice => invoice.id == id)
        const invoiceItem = TEST_DATA[index]

        invoiceItem.description = description
        invoiceItem.rate = +rate
        invoiceItem.hours = +hours

        res.send(invoiceItem)
    }

  }


  export default handlerFunctions