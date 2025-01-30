const container = document.querySelector('.container')
export default  function createAbout(){
    const subContainer = document.createElement('div');
            subContainer.classList.add('sub-container-3');
            const containerP = document.createElement('p')
            containerP.classList.add('title-crew');
            containerP.textContent = `Stuffs`;
            const staffContainer = document.createElement('div');
            staffContainer.classList.add('staff');


            const staff1 = document.createElement('div');
            const staff2 = document.createElement('div');
            const staff3 = document.createElement('div');


            staff1.classList.add('staff-1')
            staff1.classList.add('coworker')
            staff2.classList.add('staff-2')
            staff2.classList.add('coworker')
            staff3.classList.add('staff-3')
            staff3.classList.add('coworker')


            const img1 = document.createElement('img');
            const img2 = document.createElement('img');
            const img3 = document.createElement('img');

            img1.src = '/photos/owner.webp'
            img2.src = '/photos/sanji.webp'
            img3.src = '/photos/waiter.jpg'


            const workerText1 = document.createElement('div'); 
            const workerText2 = document.createElement('div'); 
            const workerText3 = document.createElement('div'); 

            workerText1.classList.add('worker-text')
            workerText2.classList.add('worker-text')
            workerText3.classList.add('worker-text')

            workerText1.innerHTML = `
            <p class="worker-name">Sayeed</p>
                            <p class="position">Owner</p>
            `

            workerText2.innerHTML = `
             <p class="worker-name">Tyson</p>
                            <p class="position">Chef</p>
            `

            workerText3.innerHTML = `
            <p class="worker-name">Gojo</p>
                            <p class="position">Waiter</p>
            `

            staff1.appendChild(img1)
            staff1.appendChild(workerText1)

            staff2.appendChild(img2)
            staff2.appendChild(workerText2)

            staff3.appendChild(img3)
            staff3.appendChild(workerText3)

            staffContainer.appendChild(staff1)
            staffContainer.appendChild(staff2)
            staffContainer.appendChild(staff3)
            subContainer.appendChild(containerP)
            subContainer.appendChild(staffContainer)
            container.appendChild(subContainer)
}