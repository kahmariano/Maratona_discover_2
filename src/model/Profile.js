//vamos por a minha foto na paginas

const Database = require('../db/config')

// hours per day  pode ser daily-hours
module.exports = {
  async get() {
    const db = await Database()

    const data = await db.get(`SELECT * FROM profile `)
    //quer dizer todos os campos *. from de onde da tabala tal
    await db.close()

    return {
      name: data.name,
      avatar: data.avatar,
      'monthly-budget': data.monthly_budget,
      'days-per-week': data.days_per_week,
      'hours-per-day': data.hours_per_day,
      'vacation-per-year': data.vacation_per_year,
      'value-hour': data.value_hour
    }
  },

  async update(newData) {
    const db = await Database()

    db.run(`UPDATE profile SET 
     name = "${newData.name}",
     avatar = "${newData.avatar}",
     monthly_budget = ${newData['monthly-budget']},
     days_per_week = ${newData['days-per-week']} ,
     hours_per_day = ${newData['hours-per-day']},
     vacation_per_year = ${newData['vacation-per-year']},
     value_hour = ${newData['value-hour']}

     `)

    //SET comando sql é mudar alterar

    await db.close()
  }
}
