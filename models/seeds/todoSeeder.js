const Todo = require('../todo')
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected')
  console.log('running seeder...')

  for (let i = 0; i < 10; i++) {
    console.log(`creating ${i}`)
    Todo.create({ name: 'name-' + i })
  }

  console.log('done')
})