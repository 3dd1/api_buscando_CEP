// const meu_endereco = fetch("https://viacep.com.br/ws/60833045/json/")
// .then(requisicao=>requisicao.json())
// .then(resposta=>resposta)
// .catch(error=>error)
// async function buscar_cep(){
//     try{
//         const requisicao = await fetch("https://viacep.com.br/ws/60833045/json/") 
//         const resposta = await requisicao.json()
//         if(resposta.erro){
//             console.log("cep inválido")
//         }else{
//             console.log(resposta);
//         }


//     }catch(error){
//         console.log(error);
//     }
    
// }
// function adc_endereco(e){
//     e.preventDefault()
//     const p = document.createElement("p")
    
// }
const caixa = document.querySelector("#caixa")
const div_resposta = document.querySelector("#div_resposta")
const formulario = document.querySelector("#formulario")
async function buscar_cep(ev){
    ev.preventDefault()
    try{
        const requisicao = await fetch(`https://viacep.com.br/ws/${caixa.value}/json/`) 
        const resposta = await requisicao.json()
        if(resposta.erro){
            erro.textContent =("CEP Inválido")
        }else{
            const endereco = document.createElement("p")
            document.body.appendChild(endereco)
            endereco.textContent = (`endereço: ${resposta.logradouro}`)
            const complemento = document.createElement("p")
            document.body.appendChild(complemento)
            complemento.textContent = (`complemento: ${resposta.complemento}`)
            const bairro = document.createElement("p")
            document.body.appendChild(bairro)
            bairro.textContent = (`bairro: ${resposta.bairro}`)
            const cidade = document.createElement("p")
            document.body.appendChild(bairro)
            cidade.textContent = (`cidade: ${resposta.localidade}`)
            const estado = document.createElement("p")
            document.body.appendChild(estado)
            estado.textContent = (`estado: ${resposta.uf}`)
            
            caixa.value = ""
            caixa.focus()

        }

    }catch(error){
        console.log(error);
    }
    
}

formulario.addEventListener("submit", buscar_cep)

