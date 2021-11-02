const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()
    //async ele fala q tem o await na estrutura e ele tem q esperar
    //await esperar, primeiro vai executar o Database pra depois ir pro resto
    // sql sao comando de bancos de dados, so funciona dentro de banco de dados
    //comando em letra maiuscula, int é o mesmo q numero inteiro
    // o codigo em bando de dados é dentro de crases ``
    //AUTOINCREMENT é quando pega o id anterior e soma um, faz isso automatico
    //PRIMARY KEY é o numero identificador da informaçao

    await db.exec(`CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT ,
  name TEXT, 
  avatar TEXT, 
  monthly_budget INT,
  days_per_week INT,
  hours_per_day,
  vacation_per_year INT,
  value_hour INT

)`)

    await db.exec(`CREATE TABLE jobs(
  id INTEGER PRIMARY KEY AUTOINCREMENT ,
  name TEXT,
  daily_hours INT, 
  total_hours INT,
  created_at DATETIME
)`)

    await db.run(`INSERT INTO profile (
  name,
  avatar,
  monthly_budget,
  days_per_week,
  hours_per_day,
  vacation_per_year,
  value_hour 
) VALUES (
  "Karina",
  "https://avatars.githubusercontent.com/u/74879194?s=400&u=11a381555ea9468bb4b52a12462b643890935cd3&v=4",
  3000,
  5,
  5,
  4,
  70
);`)

    await db.run(`
INSERT INTO  jobs (
  name,
  daily_hours,
  total_hours,
  created_at
) VALUES (
  "Pizzaria Guloso",
  2,
  1,
  1617514376018
);`)

    await db.run(`INSERT INTO  jobs (
  name,
  daily_hours,
  total_hours,
  created_at
) VALUES (
  "OneTwoProject",
  3,
  47,
  1617514376018
);`)

    //run rodar, rodar o comando sql no banco de dados

    await db.close()
  }
}

initDb.init()
