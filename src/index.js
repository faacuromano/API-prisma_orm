import express from 'express'

import porductRoutes from './routes/products.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import usersRoutes from './routes/users.routes.js'

const app = express();
const _PORT = 6789;

app.use(express.json())

app.use("/api", porductRoutes)
app.use("/api", categoriesRoutes)
app.use("/api", usersRoutes)

app.listen(_PORT)

console.clear()
console.log(`🚀 Server listening in port ${_PORT}`)
console.log(`http://localhost:${_PORT}`)