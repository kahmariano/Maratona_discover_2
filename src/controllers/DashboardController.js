const Job = require('../model/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../model/Profile')

module.exports = {
  async index(req, res) {
    const jobs = await Job.get()
    const profile = await Profile.get()

    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length
    }

    // total de horas por dia de cada job em progress
    let jobTotalHours = 0

    const updatedJobs = jobs.map(job => {
      const remaining = JobUtils.remainingDays(job)
      const status = remaining <= 0 ? 'done' : 'progress'
      console.log('aaa', remaining, status)
      //status define se é done ou progress ai eu pego o status ja definido e soma 1
      //somando a quantidade de status
      statusCount[status] += 1

      //total de horas por fia de cada job em progress
      //jeito ternário, mais "avançado"
      jobTotalHours =
        status == 'progress'
          ? jobTotalHours + Number(job['daily-hours'])
          : jobTotalHours
      //jobTotalHours recebe uma comparação se "status "é igual a "progress" se sim soma jobTotalHours + daily-hours se nao retono jobTotalHours

      /* if (status == 'progress') {
        jobTotalHours += Number(job['daily-hours'])
      }

     */
      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile['value-hour'])
      }
    })

    // quantidade de horas que quero trabalhar dia (profile)
    //menos
    //quantidade de horas/dias de cada job em progress
    const freeHours = profile['hours-per-day'] - jobTotalHours
    return res.render('index', {
      jobs: updatedJobs,
      profile: profile,
      statusCount: statusCount,
      freeHours: freeHours
    })
  }
}
