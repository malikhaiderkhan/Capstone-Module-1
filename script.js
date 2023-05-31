const speakers = [{
  id: 1,
  name: 'Peter Brabeck-Letmathe',
  work: 'Vice-Chairman of the Board of Trustees, World Economic Forum',
  intro: 'Peter Brabeck-Letmathe is a prominent business executive and former Chairman and CEO of Nestlé, the world largest food and beverage company.',
  img: './images/speaker1.png',
  address: '',
},
{
  id: 2,
  name: 'Thomas Buberl',
  work: 'Chief Executive Officer, AXA',
  intro: 'Thomas Buberl is a prominent business executive who currently serves as the CEO of AXA, a leading global insurance company.',
  img: './images/speaker2.png',
  address: '',
},
{
  id: 3,
  name: 'Kristalina Georgieva',
  work: 'Managing Director, International Monetary Fund (IMF)',
  intro: 'Kristalina Georgieva is a Bulgarian economist and politician who currently serves as the Managing Director of the International Monetary Fund (IMF).',
  img: './images/speaker4.png',
  address: 'unique',
},
{
  id: 4,
  name: 'Marc Benioff',
  work: 'Chair and Co-Chief Executive Officer, Salesforce',
  intro: 'Marc Benioff is an American technology entrepreneur and philanthropist. He is the co-founder, chairman, and CEO of Salesforce.',
  img: './images/speaker5.png',
  address: 'unique',
},
{
  id: 5,
  name: 'David M. Rubenstein',
  work: 'Co-Founder and Co-Chairman, Carlyle',
  intro: 'Rubenstein is a co-founder and co-executive chairman of The Carlyle Group, a global investment firm based in Washington, D.C.',
  img: './images/speaker6.png',
  address: 'unique',
},
{
  id: 6,
  name: 'Laurence D. Fink',
  work: 'Chairman and Chief Executive Officer, BlackRock',
  intro: 'Laurence D. Fink, commonly known as Larry Fink, is an American businessman and the co-founder, chairman, and CEO of BlackRock, the world largest asset management company. ',
  img: './images/speaker3.png',
  address: 'unique',
},
];

function displaySpeakers() {
  let result = '';
  speakers.filter((speaker) => speaker.id > 0).forEach((speaker) => {
    result += `<div class="speaker ${speaker.address}">
      <img src="${speaker.img}" alt="">
      <div>
          <h3>${speaker.name}</h3>
          <p>${speaker.work}</p>
          <hr>
          <p class="speaker-info">${speaker.intro}</p>
      </div>
  
  </div>`;
  });
  document.querySelector('.featured').innerHTML = result;
}

displaySpeakers();

const loadMoreBtn = document.querySelector('#show-more');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  const boxes = [...document.querySelectorAll('.featured .speaker')];
  for (let i = currentItem; i < currentItem + 4; i += 1) {
    boxes[i].style.display = 'flex';
  }
  currentItem += 4;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
