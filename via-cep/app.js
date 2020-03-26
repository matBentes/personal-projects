const cepEle = document.querySelector('#inputCep')

cepEle.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
        const CEP = cepEle.value
        const pAlert = document.querySelector('#text-alert')        
        if(pAlert) { 
            let container = document.querySelector('.container')
            container.removeChild(pAlert)
        }
        
        if (CEP.length !== 8) { 
            let form = document.querySelector('form')
            const p = document.createElement('p')
            p.classList.add('text-center', 'mb-4')
            p.style.color = '#fe1c00'
            p.id = "text-alert"
            p.innerText = 'Insira um CEP valido'
            form.before(p)
            return
        }
        takeTheCep(CEP)
        
    }
})

async function takeTheCep(CEP) {
    const result = await fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(result => result.json())
    fillTheField(result)
}

function fillTheField(result) {
    let logradouro = document.querySelector('#inputLogradouro')
    logradouro.value = result.logradouro
    let ibge = document.querySelector('#inputIbge')
    ibge.value = result.ibge
    let bairro = document.querySelector('#inputBairro')
    bairro.value = result.bairro
    let localidade = document.querySelector('#inputLocalidade')
    localidade.value = result.localidade
    let uf = document.querySelector('#inputUf')
    uf.value = result.uf
}