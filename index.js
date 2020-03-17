const btn = document.querySelector('.btn');
const image = document.querySelector('.card-img-top')
const arrImages = [
  'animpadistov_1.jpg',
  'animpadistov_2.jpg',
  'animpadistov_3.jpg',
  'animpadistov_4.jpg',
  'animpadistov_5.jpg',
  'animpadistov_6.jpg',
  'animpadistov_7.jpg',
]

btn.addEventListener('click', () => {
  const magicNumber = Math.floor(Math.random() * (arrImages.length));
  const src = `${image.src.slice(0, image.src.lastIndexOf('/') + 1)}${arrImages[magicNumber]}`;
  image.src = src;
});