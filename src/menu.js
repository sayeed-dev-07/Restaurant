const container = document.querySelector('.container')


export default function createMenu(){
    const cardContainer = document.createElement('div')
            cardContainer.classList.add('top-sell-items');

            const subContainer = document.createElement('div')
            subContainer.classList.add('sub-container-2')


            const topSellContainer = document.createElement('div');
            topSellContainer.classList.add('top-sell')
            const card1 = document.createElement('div')
            const card2 = document.createElement('div')
            const card3 = document.createElement('div')
            const imgCard1 = document.createElement('img');
            imgCard1.src = '../public/photos/biryani.jpg'
            const imgCard2 = document.createElement('img');
            imgCard2.src = '../public/photos/kebab.jpg'
            const imgCard3 = document.createElement('img');
            imgCard3.src = '../public/photos/sushi.jpg'
            card1.classList.add('card')
            card2.classList.add('card')
            card3.classList.add('card')
            const card1p1 = document.createElement('p')
            const card2p1 = document.createElement('p')
            const card3p1 = document.createElement('p')
            const card1p2 = document.createElement('p')
            const card2p2 = document.createElement('p')
            const card3p2 = document.createElement('p')
            const containerP = document.createElement('p');
            card1p1.classList.add('top-sell-text')
            card2p1.classList.add('top-sell-text')
            card3p1.classList.add('top-sell-text')
            card1p2.classList.add('order-now')
            card2p2.classList.add('order-now')
            card3p2.classList.add('order-now')
            card1p1.textContent = 'Biryani';
            card2p1.textContent = 'Kebab';
            card3p1.textContent = 'Sushi';
            card1p2.textContent = 'Order Now';
            card2p2.textContent = 'Order Now';
            card3p2.textContent = 'Order Now';
            containerP.classList.add('highlighted-text')
            containerP.innerHTML = `
            Top <span>Selling</span> Items
            `
            card1.appendChild(imgCard1)
            card2.appendChild(imgCard2)
            card3.appendChild(imgCard3)
            card1.appendChild(card1p1)
            card2.appendChild(card2p1)
            card3.appendChild(card3p1)
            card1.appendChild(card1p2)
            card2.appendChild(card2p2)
            card3.appendChild(card3p2)

            cardContainer.appendChild(card1)
            cardContainer.appendChild(card2)
            cardContainer.appendChild(card3)

            topSellContainer.appendChild(containerP)
            topSellContainer.appendChild(cardContainer)


            // regular selling items creating starts here 
            const regularMenu = document.createElement('div');
            regularMenu.classList.add('regular-menu');

            const regularContainerP = document.createElement('p')
            regularContainerP.classList.add('highlighted-text');
            regularContainerP.innerHTML = `
            Regular <span>Menu</span>
            `

            const dishContainer = document.createElement('div');
            dishContainer.classList.add('dish-container');

            const regularCard1 = document.createElement('div')
            const regularCard2 = document.createElement('div')
            const regularCard3 = document.createElement('div')
            const regularCard4 = document.createElement('div')
            const regularCard5 = document.createElement('div')
            const regularCard6 = document.createElement('div')

            regularCard1.classList.add('regular-card')
            regularCard2.classList.add('regular-card')
            regularCard3.classList.add('regular-card')
            regularCard4.classList.add('regular-card')
            regularCard5.classList.add('regular-card')
            regularCard6.classList.add('regular-card')



            const imgaeContainer1 = document.createElement('div')
            const imgaeContainer2 = document.createElement('div')
            const imgaeContainer3 = document.createElement('div')
            const imgaeContainer4 = document.createElement('div')
            const imgaeContainer5 = document.createElement('div')
            const imgaeContainer6 = document.createElement('div')

            imgaeContainer1.classList.add('img-container')
            imgaeContainer2.classList.add('img-container')
            imgaeContainer3.classList.add('img-container')
            imgaeContainer4.classList.add('img-container')
            imgaeContainer5.classList.add('img-container')
            imgaeContainer6.classList.add('img-container')


            const img1 = document.createElement('img')
            img1.src = '../public/photos/pizza.jpg'
            const img2 = document.createElement('img')
            img2.src = '../public/photos/burger.jpg'
            const img3 = document.createElement('img')
            img3.src = '../public/photos/cookies.jpg'
            const img4 = document.createElement('img')
            img4.src = '../public/photos/drinks.jpg'
            const img5 = document.createElement('img')
            img5.src = '../public/photos/noodles.jpg'
            const img6 = document.createElement('img')
            img6.src = '../public/photos/kebab.jpg'


            const allText1 = document.createElement('div')
            const allText2 = document.createElement('div')
            const allText3 = document.createElement('div')
            const allText4 = document.createElement('div')
            const allText5 = document.createElement('div')
            const allText6 = document.createElement('div')

            allText1.classList.add('all-text')
            allText2.classList.add('all-text')
            allText3.classList.add('all-text')
            allText4.classList.add('all-text')
            allText5.classList.add('all-text')
            allText6.classList.add('all-text')




            allText1.innerHTML = `
            <div class="dish-name">Pizza</div>
                    <div class="footer-text">
                        <p class="price">$4.50</p>
                        <button class="buy">Buy Now</button>
                    </div>
            `

            allText2.innerHTML = `
            <div class="dish-name">Burger</div>
                    <div class="footer-text">
                        <p class="price">$2.50</p>
                        <button class="buy">Buy Now</button>
                    </div>
            `
            allText3.innerHTML = `
            <div class="dish-name">Cookies</div>
                    <div class="footer-text">
                        <p class="price">$4.50</p>
                        <button class="buy">Buy Now</button>
                    </div>
            `
            allText4.innerHTML = `
            <div class="dish-name">Soft Drinks</div>
                    <div class="footer-text">
                        <p class="price">$1.10</p>
                        <button class="buy">Buy Now</button>
                    </div>
            `
            allText5.innerHTML = `
            <div class="dish-name">Noodles</div>
                    <div class="footer-text">
                        <p class="price">$3.70</p>
                        <button class="buy">Buy Now</button>
                    </div>
            `
            allText6.innerHTML = `
            <div class="dish-name">Kebab</div>
                    <div class="footer-text">
                        <p class="price">$6.00</p>
                        <button class="buy">Buy Now</button>
                    </div>
            `
            imgaeContainer1.appendChild(img1);
            imgaeContainer2.appendChild(img2);
            imgaeContainer3.appendChild(img3);
            imgaeContainer4.appendChild(img4);
            imgaeContainer5.appendChild(img5);
            imgaeContainer6.appendChild(img6);


            regularCard1.appendChild(imgaeContainer1)
            regularCard2.appendChild(imgaeContainer2)
            regularCard3.appendChild(imgaeContainer3)
            regularCard4.appendChild(imgaeContainer4)
            regularCard5.appendChild(imgaeContainer5)
            regularCard6.appendChild(imgaeContainer6)

            regularCard1.appendChild(allText1);
            regularCard2.appendChild(allText2);
            regularCard3.appendChild(allText3);
            regularCard4.appendChild(allText4);
            regularCard5.appendChild(allText5);
            regularCard6.appendChild(allText6);


            dishContainer.appendChild(regularCard1)
            dishContainer.appendChild(regularCard2)
            dishContainer.appendChild(regularCard3)
            dishContainer.appendChild(regularCard4)
            dishContainer.appendChild(regularCard5)
            dishContainer.appendChild(regularCard6)

            regularMenu.appendChild(regularContainerP);
            regularMenu.appendChild(dishContainer);

            subContainer.appendChild(topSellContainer)
            subContainer.appendChild(regularMenu)

            container.appendChild(subContainer)
}