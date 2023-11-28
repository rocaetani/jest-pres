const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()
const port = 3203

server.use(express.json());

server.use(cors())
server.use(morgan(('dev')))

const salesData = require('./sales-data.js');

server.get('/backend/api/pde/next-gen/sales', (req, res) => {
    res.jsonp(salesData)
})

server.post('/backend/api/pde/next-gen/sales-per-page', (req, res) => {
    const itemsPerPage = req.query['items-per-page'];
    const pageNumber = req.query['page-number'];
    const searchTerm = req.query['search-term'];
    
    console.log(`${searchTerm}`)

    let sales = salesData
    if(searchTerm != null){
        sales = sales.filter((sale) =>
        Object.values(sale).some((value) =>
          typeof value === 'string' && value.toLocaleUpperCase().includes(searchTerm.toLocaleUpperCase())
        )
      );
    }

    const startRegister = Number(pageNumber-1) * Number(itemsPerPage)
    const endRegister = startRegister + Number(itemsPerPage)
    const totalPages =  Math.ceil(sales.length/itemsPerPage)
    res.jsonp({
        "offset": sales.length,
        "totalPages": totalPages,
        "itemsPerPage": itemsPerPage,
        "listOfObjects": sales.slice(startRegister, endRegister)
    })
})



server.put('/backend/api/pde/customers/:inviteId/vin', (req, res) => {
    const inviteId = parseInt(req.params.inviteId)
    const newVin = req.body.vin;

  if (!newVin) {
    return res.status(400).json({ error: 'Vin is missing.' });
  }

  const index = salesData.findIndex(item => item.customerId === inviteId);

  if (index === -1) {
    return res.status(404).json({ error: 'Invite not found.' });
  }

  salesData[index].vin = newVin
  salesData[index].modelName = "Mariah's Taigo"
  res.json({ message: `Vin updated successfully for ${salesData[index].fullName }` });
})


server.put('/backend/api/pde/customers/:inviteId/commissionNumber', (req, res) => {
    const inviteId = parseInt(req.params.inviteId)
    const newCn = req.body;
    console.log(newCn)

  if (!newCn) {
    return res.status(400).json({ error: 'CN is missing.' });
  }

  const index = salesData.findIndex(item => item.customerId === inviteId);

  if (index === -1) {
    return res.status(404).json({ error: 'Invite not found.' });
  }

  salesData[index].commissionNumber = `${newCn.importerNumber} ${newCn.orderNumber}${newCn.year}`
  salesData[index].modelName = "Bey's ID3"
  res.json({ message: `CN updated successfully for ${salesData[index].fullName }` });
})

server.get("/backend/api/pde/vehicles/vin/:vin/info", (req, res) => {
    const vin = req.params.vin
    const lastChar = getLastChar(vin)
    if(lastChar === "0"){
        return res.status(400).json({ error: 'Something went wrong' });
    }
    if(lastChar === "1"){
        res.jsonp(
            {
                isIdBuzz: false,
                modelName: vin,
                serviceScheduling: false,
                valid: false,
                weConnectStatus: "READY"
            },
        )
    }
    res.jsonp(
        {
            isIdBuzz: false,
            modelName: vin,
            serviceScheduling: false,
            valid: true,
            weConnectStatus: "READY"
        },
    )
})

server.get("/backend/api/pde/vehicles/commissionnumber/:cn/info", (req, res) => {
    const cn = req.params.cn
    const lastChar = cn.charAt(8)
    if(lastChar === "0"){
        return res.status(400).json({ error: 'Something went wrong' });
    }
    if(lastChar === "1"){
        res.jsonp(
            {
                isIdBuzz: false,
                modelName: cn,
                serviceScheduling: false,
                valid: false,
                weConnectStatus: "READY"
            },
        )
    }
    res.jsonp(
        {
            isIdBuzz: false,
            modelName: cn,
            serviceScheduling: false,
            valid: true,
            weConnectStatus: "READY"
        },
    )
})


server.get("/backend/api/pde/next-gen/filter-groups", (req, res) => {

    res.jsonp(
    {
        carModels: [
                {
                    label: "ID3",
                    value: 1
                },
                {
                    label: "IDBus",
                    value: 1
                },
                {
                    label: "SomeCar",
                    value: 1
                },
                {
                    label: "Taigo",
                    value: 1
                },
                {
                    label: "Empty",
                    value: 18
                }
        ],
        orderProgresses: [
        {
            label: "UNKNOWN",
            value: 18
        },
        {
            label: "IN_PRODUCTION",
            value: 1
        },
        {
            label: "PROCESSING",
            value: 2
        },
        {
            label: "ARRIVED_TO_COUNTRY_OF_DESTINATION",
            value: 1
        }
    ]
    },
)
})


const getLastChar = (value) => {
    return value.charAt(value.length - 1);
}



server.listen(port, () => {
    console.log(`Mock API is running on port ${port}.`)
})
