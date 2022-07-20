const Database = require('./config')


const initDb = {
    /* 
    async e await tem que SEMPRE ser usados juntos.
    await = esperar
        é utilizado para que tal função espere o retorno para executar a proxima linha.
        isso é utilizado para garantir que o DB irá ser criado completamente.
    */
    async init(){
        // Esperando a configuração do DB ser executado
        const db = await Database()

        // -- Aqui serão executados os codigo SQL
        // Criando a tabela das salas
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        // Criando a tabela das questões
        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`)

        await db.close()
    }
};

initDb.init();