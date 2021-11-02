const Profile = require('../model/Profile')

//module.exports deixa o arquivo exportavel para outros, sem ele nao funciona a importação
module.exports = {
  async index(req, res) {
    return res.render('profile', { profile: await Profile.get() })
  },

  async update(req, res) {
    //req.body para pegar os dados
    const data = req.body
    //definir quantas semanas tem num ano:52
    const weeksPerYear = 52
    //remover as semanas de ferias do ano, para pegar quantas semanas tem em 1 mes
    const weeksPerMonth = (weeksPerYear - data['vacation-per-year']) / 12
    //total de horas trabalhadas na semanas
    const weekTotalHours = data['hours-per-day'] * data['days-per-week']
    //total de horas trabalhadas no mes
    const monthlyTotalHours = weekTotalHours * weeksPerMonth
    //qual sera o valor da hora trabalhada
    const valueHour = data['monthly-budget'] / monthlyTotalHours

    const profile = await Profile.get()

    await Profile.update({
      ...profile,
      ...req.body,
      'value-hour': valueHour
    })

    return res.redirect('/profile')
  }
}
