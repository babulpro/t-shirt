 

let body = document.querySelector('body')
let openShopping = document.querySelector('#shopping')
let closeShopping = document.querySelector('#closeShopping')
let total = document.querySelector('#total')
let quantity = document.querySelector('#quantity')
let list = document.querySelector('#list')
let listCard = document.querySelector('#listCard')

openShopping.addEventListener('click',()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})

let producrs =  [
    {
        id:1,
        name:"Suitable T-shirt for men ",
        price:2222,
        image:"1.PNG"
    },
    {
        id:2,
        name:"Suitable T-shirt for women",
        price:2522,
        image:"2.PNG"
    },
    {
        id:3,
        name:"Suitable T-shirt sleep",
        price:3622,
        image:"3.PNG"
    },
    {
        id:4,
        name:"T-shirt for smart boy",
        price:4222,
        image:"4.PNG"
    },
    {
        id:5,
        name:"ladies collection",
        price:1522,
        image:"5.PNG"
    },
    {
        id:6,
        name:"all player are suitable with this",
        price:2322,
        image:"6.PNG"
    }
    
    
]




let listCards =[]

function creteItems(){
    producrs.forEach((value,keys)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('text-center', 'bg-[#DCE0E1]', 'p-2', 'shadow-xl', 'spacing-2');
        

        newDiv.innerHTML =`
         <img class="w-[80%] rounded-sm m-auto" src="image/${value.image}">
         <div class="capitalize text-red-600 first-letter:text-4xl"> ${value.name}</div>
         <div class="text-red-400 text-sm" >Bd  Tk. ${value.price}</div>
         <button class=" border bg-red-900 px-3 py-1 rounded-md text-slate-300 hover:text-slate-100 hover:bg-red-800 transition-all" onclick="addToCard(${keys})">add to chart</button>
        
        `
        list.appendChild(newDiv)
    })
}

creteItems()

function addToCard(key){
    if(listCard[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(producrs[key]));
        listCards[key].quantity = 1;
    }
    reloadCard()
}


function reloadCard(){
    listCard.innerHTML =" ";
    let count = 0 
    let totalPrice = 0
    listCards.forEach((value,key)=>{
      
            totalPrice +=value.price
            count += value.quantity
            if(value !== null){
                let newLi = document.createElement('li')

              
                newLi.classList.add('grid','grid-cols-4','text-[#fff]','gap-2','px-2','mt-3','pt-3')

                newLi.innerHTML =`
                <img class="w-[60px] rounded-lg hover:w-[80px]" src="image/${value.image}">
                <div class=" text-white capitalize italic text-sm "> ${value.name}</div>
                <div class=" :text-white ">Tk. ${value.price}</div>

                <div class="flex items-center justify-center">
                <button title="Decrement" class="px-3 hover:text-red-700 bg-transparent rounded-lg text-2xl  " onclick="increment(${key},${value.quantity-1})">-</button>

                <div class=" italic  text-red-600 text-2xl" class='count'> ${value.quantity}</div>

                <button title="Increment" class="px-3 hover:text-red-700 bg-transparent rounded-lg text-2xl  " onclick="increment(${key},${value.quantity+1})">+</button>
                </div>
                `
                listCard.appendChild(newLi)
            }
      
    })
    total.innerHTML = 'Total = ' + " "+ totalPrice +" "+" tk"
    quantity.innerHTML = count
}

function increment(key,quantity){
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * producrs[key].price
    }
    reloadCard()
}


 

 