import express from 'express'
import redis from 'redis'
const app = express()

const port = process.env.PORT || 5000

const client = redis.createClient({
    host: 'redis-server', // docker container address
    port: 6379
})

client.set('visits', 0)

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('nUmber of Visits is' + visits)
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(port,() => {
    console.log('server started with Redis')
})

