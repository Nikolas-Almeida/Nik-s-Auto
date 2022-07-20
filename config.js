const sqlite3 = require('sqlite3')
/* 
Ao importar utilizando chaves, dentro da chaves passamos apenas o módulo que queremos pegar.
Assim, o JS pega somente este módulo, e o nome da variável passa a ser o nome do módulo
*/
const { open } = require('sqlite')

module.exports = () => {
    open({
        // Aqui estamos passando o caminho do BD e o nome do BD
        filename: './src/db/nikautos.sqlite',
        // Aqui estamos definindo o driver a ser usado no BD
        driver: sqlite3.Database
    })
}