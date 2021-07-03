
// let miPromesa = new Promise((res, rej)=> {
//     setTimeout(()=> {
//         res('Resolucion correcta de la promesa')
//     }, 3000)
// })

// let imprimir = 'una funcion de promesa'

// function imprime (data) {
//     console.log(data)
// }

// function icinio (call) {

//     if (typeof call === 'function') {
//         miPromesa.then(res => {
//             call (`Esto se imprime primero, desde ${imprimir} y cono resultado dio : ${res} `)
//         }).catch(error => {
//             console.log(error)
//         });
//         call('Esto se imprime segundo');
//         call('Esto se imprime tercerro')
//     }else {
//         console.log('Algo raro paso y se genero un error')
//     }
// }

// icinio(imprime)

// //Json
// {
//     "nombre": "algo",
//     "apellido" : "alguien"
// }

//Api Git - 
let resultado;
let url = "https://api.github.com/users/"

// function getUsuariosGit (id) {
//     let urlid = url + id;

//     fetch(urlid)
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//             resultado = json
//         })
//         .catch(error => {
//             console.log(error)
//             console.error('Ocurrio un error inesperado en la consulta.')
//         })
// }

// getUsuariosGit('nbisso')

async function getGit(id) {
    let urlid = url + id;

    const resp = await fetch(urlid)
    const data = await resp.json()
    return data
}

async function getUsuariosGit (usuario) {
    resultado = await getGit(usuario)
    console.log(resultado)
}

getUsuariosGit('aolguin')

