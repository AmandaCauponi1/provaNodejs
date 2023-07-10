//  01

// const os = require('os')
// const url = require('url')
// const http = require('http')
// const fs = require('fs')
// const {json} = require('stream/consumers')

// const door = 3333

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     const objeto = [
//             {id: 1, sistemaOperacional: os.type()},
//             {id: 2, memoria: os.freemem()},
//             {id: 3, diretorio: os.homedir()},
//             ]
//             const newjson = JSON.stringify(objeto)
//             console.log(newjson)
    
//     if(req.url === '/info'){
//          res.writeHead(200, {'Content-Type': 'application/json'})
//          res.write(`id: ${objeto.id}, Sistema Operacional: ${objeto.sistemaOperacional}`)
//          res.write(`id: ${objeto.id}, Memória: ${objeto.memoria}`)
//          res.write(`id: ${objeto.id}, Diretório: ${objeto.diretorio}`)
//          res.end()
//     } 
   
// })

// server.listen(door, () => {
//     console.log(`Rodando na porta ${door}`)
// })


// 02

// const path = require('path')
// const repositorio = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'


// const caminho = {
//     root: '',
//     dir: path.dirname(repositorio),
//     base: path.basename(repositorio),
//     ext: path.extname(repositorio),
//     name: 'planodecurso'
// }
// console.log(caminho)



// 03

// const url = require('url')

// const adress = 'https://nodejs.org/api/url.html#url_new_url_input_base'

//  const parseUrl = new url.URL(adress)

// const Url = {
//     protocol:  parseUrl.protocol,
//     slashes: true,
//     auth: null,
//     host: parseUrl.host,
//     port: parseUrl.port,
//     hostname: parseUrl.hostname,
//     hash: parseUrl.hash,
//     search: parseUrl.search,
//     pathname: parseUrl.pathname,
//     path: parseUrl.pathname,
//     href: parseUrl.href,
// }
// console.log(Url)




// 04

// const fs = require('fs')

// fs.rename('antigo.txt', 'novo.txt', (err) => {
//     if(err) throw err
        
//         confirm.log('executed!')
    
// })


// 05

// const os = require('os')

// console.log(os.cpus())