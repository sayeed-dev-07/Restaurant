const container = document.querySelector('.container')

export default  function createHome(){
    const subContainer = document.createElement('div');
            const textContainer = document.createElement('div');
            const photoContainer = document.createElement('div');
            const video = document.createElement('video')
            video.src = '/public/video/video.mp4'
            video.loop = true;
            video.autoplay = true;
            video.muted = true;
            subContainer.classList.add('sub-container')
            textContainer.classList.add('text')
            photoContainer.classList.add('photo')
            photoContainer.appendChild(video);

            textContainer.innerHTML = `<p class="headline">
                        Bringing Passion to Every Plate – Only at <span>Sayeed’s</span> Kitchen.
                    </p>
                    <p class="extra-text">Crafted with Love, Served with Elegance.</p>
                    <button class="order">order now</button>`
            subContainer.appendChild(textContainer)
            subContainer.appendChild(photoContainer)
            container.appendChild(subContainer)
}