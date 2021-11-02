module.exports = {
  remainingDays(job) {
    //ajustes no job
    //calculos de tempo restante

    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

    //toFixed() é um jeito de aredondar os numeros quebrados

    //conta da data, de quando foi criada, quando vai ser finalizado e quando tempo tenho pra finanlizar
    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDateInMs = createdDate.setDate(dueDay)

    const timeDiffInMs = dueDateInMs - Date.now()
    //transformar os ms(milisegundos do dia) em dias normais. 1000 de milisegundos, 60 de segundos, 60 de min e 24 de horas no dia
    const dayInMs = 1000 * 60 * 60 * 24
    // dayDiff diferença de dias, quantos dias faltam para o fim. math.floor aredonda pra baixo
    const dayDiff = Math.floor(timeDiffInMs / dayInMs)

    //retam x dias
    return dayDiff
  },
  calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}
