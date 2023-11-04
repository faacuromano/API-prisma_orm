import express from 'express'
import cors from 'cors'

import porductRoutes from './routes/products.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import usersRoutes from './routes/users.routes.js'
import sell_conceptsRoutes from './routes/sellConcept.routes.js'
import sellRoutes from './routes/sells.routes.js'
import clientRoutes from './routes/clients.routes.js'
import proveedoresRoutes from './routes/proveedores.routes.js'

const app = express();
const _PORT = 6789;

app.use(express.json())
app.use(cors())

app.use("/api", porductRoutes)
app.use("/api", categoriesRoutes)
app.use("/api", usersRoutes)
app.use("/api", clientRoutes)
app.use("/api", sellRoutes)
app.use("/api", sell_conceptsRoutes)
app.use("/api", proveedoresRoutes)

app.listen(_PORT)

consoleWrite();

function consoleWrite() {
console.clear()
console.log(`-> ✅ Status: \tOK!`)
console.log(`-> 📡 Port: \tListening in port ${_PORT}`)
console.log(`-> 🏠 Local:\thttp://localhost:${_PORT}`)
}