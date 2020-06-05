import path from 'path'

module.exports ={
//     client: 'pg',
//     connection: {       
//       host : '127.0.0.1',
//       user : 'postgres',
//       password : 'd20e105634',
//       database : 'app_sustentability'
// },
client: 'sqlite3',
connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
migrations:{
    directory:path.resolve(__dirname, 'src','database','migrations' )
},
seeds:{
    directory:path.resolve(__dirname, 'src','database','seeds' )
},
useNullAsDefault: true
}