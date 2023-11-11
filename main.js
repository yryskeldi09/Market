
let row = document.querySelector(".main__row")

const getProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((res) => {
            res.forEach(item => {
                row.innerHTML += `
                     <div class="main__conts">
            <div class="main__img">
                <img src="${item.images[0]}" alt="" class="main__img">
            </div>
            <p class="main__t">${item.title}</p>
            <p class="main__g">${item.price} грн</p>
            <p class="main__s">${item.}</p>

<div class="main__png"><svg width="52" height="14" viewBox="0 0 52 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                <circle cx="26" cy="7" r="7" fill="#6F83A4"/>
                <circle cx="45" cy="7" r="7" fill="#F1DDAA"/>
            </svg>
            </div>
        </div>
                `
            })
        })
};
getProduct()