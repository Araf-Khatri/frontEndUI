const span = document.querySelector('span')
const cards = document.getElementsByClassName('cards');
const cancelNavBtn = document.querySelector('.cross-icon');
const menuBtn = document.querySelector('.menuButton');
const navPage = document.querySelector('.nav');

const html = 
`
<div class="card"> 
    <div class="card-flex">
        <div class="OYO-flex">
            <div class="oyoimg">
                <img src="./img&icons/logo.jpeg" alt="logo" />
            </div>
            <p>OYO</p>
        </div>
        <div class="submitwork">
            <p>Submit Work</p>
        </div>
    </div>
    <div class="project-info">
        <div class="info">
            <h2>Diwali Campaign</h2>
            <p>Lorem ipsum lorem lorem lorem dolor r adipisicing elit. Rerum quas commodi numquam at provident quasi incidunt? Nulla const id corrupti quasi</p>
        </div>
        <div class="price">
            <p>$</p>
            <h2>2500</h2>
        </div>
    </div>
</div>

`;

const endVal = 18;
for(let i = 0; i < endVal; i++) {
    cards[0].insertAdjacentHTML('beforeend', html);
}
span.textContent = `(${endVal})`

menuBtn.addEventListener('click', () => {
    navPage.style.display = 'block';
    navPage.style.left = 0;
    navPage.style.opacity = 1;
});

cancelNavBtn.addEventListener('click', () => {
    navPage.style.left = '-700px';
    navPage.style.opacity = 0;
})

