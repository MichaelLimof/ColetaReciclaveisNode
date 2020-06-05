import knex from 'knex'
import path from 'path'

const connection =knex({
    // client: 'pg',
    // connection: {
    //     host : '127.0.0.1',
    //     user : 'postgres',
    //     password : 'd20e105634',
    //     database : 'app_sustentability'
    // },
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
      },
    useNullAsDefault: true
})

export default connection