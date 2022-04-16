let num = document.getElementById('txtnum')
let sel = document.querySelector('select#tab')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 50) {
        return true
    } else {
        return false
    }
}

function isList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if(isNumero(num.value) && !isList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('Option')
        item.text = `Valor ${num.value} foi adicionado`
        sel.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já cadastrado na lista')
    }
    num.value = ''
    num.focus()
} 

function finalizar () {
    if (valores.length == 0) {
        res.innerHTML = 'Adicione um número antes de finalizar'
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Temos um total de ${total} números cadastrados </p>`
        res.innerHTML += `<p> O maior número cadastrado é ${maior} </p>`
        res.innerHTML += `<p> O menor número cadastrado é ${menor} </p> `
        res.innerHTML+= `<p> A Soma entre todos números cadastrados é de ${soma} </p>`
        res.innerHTML+= `<p> A média entre todos números cadastrados é de ${media} </p>`
    }
}