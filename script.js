const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL',
     })

     return newValue
}


function showall(array) {

    let myLi = ''

    array.forEach(product => {
        myLi += `
               <li>
                   <img src=${product.src}>
                   <p>${product.name}</p>
                   <p class="item-price">R$ ${formatCurrency(product.price)}</p>
               </li>
            `
    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //10%
    }))

    showall(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
               <li>
                   <p> O Valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
               </li>
            `

}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showall(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showall(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)