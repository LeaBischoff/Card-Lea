const factsButton = document.getElementById('factsButton');
const battleButton = document.getElementById('battleButton');
const card = document.getElementById('card');

const title1 = document.querySelector('[data-js="head1"]');
const title2 = document.querySelector('[data-js="head2"]');
const title3 = document.querySelector('[data-js="head3"]');
const title4 = document.querySelector('[data-js="head4"]');

const description1 = document.querySelector('[data-js="description1"]');
const description2 = document.querySelector('[data-js="description2"]');
const description3 = document.querySelector('[data-js="description3"]');
const description4 = document.querySelector('[data-js="description4"]');

console.log(description1);


battleButton.onclick = function(){
    card.style.backgroundImage = 'linear-gradient(rgb(236, 176, 10), rgb(180, 33, 33))'
    battleButton.style.backgroundColor= 'rgb(65, 3, 24)'
    factsButton.style.backgroundColor= 'rgb(65, 3, 24)'
    title1.innerHTML= 'Weakness';
    title2.innerHTML= 'Strength';
    title3.innerHTML= 'Enemies';
    title4.innerHTML= 'Friends';
    description1.innerHTML= 'addicted to sunflowers'
    description2.innerHTML= 'can walk up to 20 hours'
    description3.innerHTML= 'gnomes and faries'
    description4.innerHTML= 'birds and toads'
};

factsButton.onclick =function(){
    card.style.backgroundImage= 'linear-gradient(rgb(0, 83, 33), rgb(121, 186, 8))'
    battleButton.style.backgroundColor=  'rgb(2, 65, 28)'
    factsButton.style.backgroundColor= ' rgb(2, 65, 28)'
    title1.innerHTML= 'Habitat';
    title2.innerHTML= 'Nutrition'; 
    title3.innerHTML= 'Size';
    title4.innerHTML= 'Tame with';
    description1.innerHTML= 'Big forests'
    description2.innerHTML= 'Berries and nuts'
    description3.innerHTML= '20cm'
    description4.innerHTML= 'headrubs'

};

