const api_base = `https://magiccards-70e57.firebaseio.com/MagicCard/-M35AbwPhyvrlnZUosLo.json`;
const btn = document.querySelector('.btn');
const image = document.querySelector('.card-img-top');
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
  setSource({ src })
});

let timerId = setInterval(() => getSource(), 2000);

setSource = async (body) => {
  try {
    const response = await fetch(`${api_base}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};

getSource = async () => {
  try {
    const response = await fetch(`${api_base}`, {
      method: 'GET',
    });
    const { src } = await response.json();
    image.src = src;

  } catch (error) {
    console.log(error);
  }
};