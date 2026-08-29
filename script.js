document.addEventListener('DOMContentLoaded', () => {
      // 1. Перелік зображень для перемикання
      const images = [
        '1shoes1.jpg',
        '1shoes2.webp',
        '1shoes3.jpg'
      ];

 let current = 0;

  setInterval(() => {
    current = (current + 1) % images.length;
    document.getElementById("hero-img").src = images[current];
   }, 3000);});





   const catalogData = {
      men: {
        title: "Чоловіче взуття",
        items: [
          {
    "id": 101,
    "title": "Skechers MAX PROTECT",
    "price": "5499 грн.",
    "image": "https://s1.media.intertop.com/load/KM5796/big/MAIN.webp?_gl=1*1kbj5vq*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDkzMTgkajU2JGwwJGgwhttps://s1.media.intertop.com/load/KM5796/big/MAIN.webp?_gl=1*1kbj5vq*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDkzMTgkajU2JGwwJGgw",
    "buttonText": "В кошик"
  },
  {
    "id": 102,
    "title": "Skechers UNO LITE 2",
    "price": "3799 грн.",
    "image": "https://s1.media.intertop.com/load/KM5791/big/MAIN.webp?_gl=1*159ymbt*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDk0MTIkajU1JGwwJGgw",
    "buttonText": "В кошик"
  },
  {
    "id": 103,
    "title": "adidas CRAZYCHAOS 2000",
    "price": "3359 грн.",
    "image": "https://s1.media.intertop.com/load/CN4219/big/MAIN.webp?_gl=1*cwapge*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDk1MzUkajE1JGwwJGgw",
    "buttonText": "В кошик"
  },
  {
    "id": 104,
    "title": "Champion RD18",
    "price": "1679 грн.",
    "image": "https://s1.media.intertop.com/load/CMM31/big/MAIN.webp?_gl=1*1et9ou9*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDk2MjUkajQ2JGwwJGgw",
    "buttonText": "В кошик"
  },
  {
    "id": 105,
    "title": "NIKE PACIFIC",
    "price": "3992 грн.",
    "image": "https://s1.media.intertop.com/load/CE855/big/MAIN.webp?_gl=1*1o0uc97*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDk2NzQkajU3JGwwJGgwg",
    "buttonText": "В кошик"
  },
  {
    "id": 106,
    "title": "New Balance 574 CORE",
    "price": "4319 грн.",
    "image": "https://s1.media.intertop.com/load/MQ602/big/MAIN.webp?_gl=1*1allcxh*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MTAzODMkajI3JGwwJGgw",
    "buttonText": "В кошик"
  },
  {
    "id": 107,
    "title": "Estro",
    "price": "3630 грн.",
    "image": "https://s1.media.intertop.com/load/mp883550/big/MAIN.webp?_gl=1*hgrb0c*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MTA0NTkkajM0JGwwJGgw",
    "buttonText": "В кошик"
  },
  {
    "id": 108,
    "title": "Timberland MAPLE GROVE",
    "price": "8299 грн.",
    "image": "https://s1.media.intertop.com/load/TF5706/big/MAIN.webp?_gl=1*1cjfwnu*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MTA1MzIkajMyJGwwJGgw",
    "buttonText": "В кошик"
  },
  {
    "id": 109,
    "title": "Skechers AIDAN",
    "price": "1899 грн.",
    "image": "https://s1.media.intertop.com/load/KM5705/big/MAIN.webp?_gl=1*182jw3u*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MTA2MTckajMxJGwwJGgw",
    "buttonText": "В кошик"
  }
        ]
      },
      women: {
        title: "Жіноче взуття",
        items: [
          { id: 201, title: "Шкіряні Чорні<br>Туфлі на подборах", price: "1750 грн.", image: "women-heels-black.png" },
          { id: 202, title: "Білі Легкі<br>Кросівки", price: "1950 грн.", image: "women-sneakers-white.png" },
          { id: 203, title: "Бежеві Замшеві<br>Лофери", price: "1499 грн.", image: "women-loafers-beige.png" },
          { id: 204, title: "Елегантні Червоні<br>Балетки", price: "1200 грн.", image: "women-flats-red.png" },
          { id: 205, title: "Чорні Осінні<br>Ботильйони", price: "2300 грн.", image: "women-boots-black.png" },
          { id: 206, title: "Нюдові Босоніжки<br>на підборах", price: "1650 грн.", image: "women-sandals-nude.png" },
          { id: 207, title: "Спортивні Рожеві<br>Кросівки", price: "1800 грн.", image: "women-sneakers-pink.png" },
          { id: 208, title: "Класичні Бежеві<br>Човники", price: "1900 грн.", image: "women-pumps-beige.png" },
          { id: 209, title: "Високі Шкіряні<br>Сапоги", price: "3100 грн.", image: "women-high-boots.png" }
        ]
      },
      kids: {
        title: "Дитяче взуття",
        items: [
          { id: 301, title: "Яскраві Дитячі<br>Кросівки на липучках", price: "899 грн.", image: "kids-sneakers-color.png" },
          { id: 302, title: "Шкіряні Шкільні<br>Туфлі", price: "1100 грн.", image: "kids-shoes-black.png" },
          { id: 303, title: "Сині Замшеві<br>Мокасини", price: "950 грн.", image: "kids-moccasins-blue.png" },
          { id: 304, title: "Зимові Теплі<br>Черевики", price: "1550 грн.", image: "kids-winter-boots.png" },
          { id: 305, title: "Літні Яскраві<br>Сандалі", price: "799 грн.", image: "kids-sandals.png" },
          { id: 306, title: "Білі Текстильні<br>Кеди", price: "850 грн.", image: "kids-sneakers-white.png" },
          { id: 307, title: "Гумові Черевички<br>від дощу", price: "650 грн.", image: "kids-rain-boots.png" },
          { id: 308, title: "Рожеві Святкові<br>Балетки", price: "920 грн.", image: "kids-flats-pink.png" },
          { id: 309, title: "Спортивні Дитячі<br>Кросівки", price: "1050 грн.", image: "kids-sport-shoes.png" }
        ]
      }
    };

    // Для сторінки Чоловічого взуття обираємо категорію 'men'
    // (Для women.html встановіть 'women', для kids.html — 'kids')
    // const categoryKey = 'men'; 

    // const currentCategory = catalogData[categoryKey];

    // // Встановлюємо динамічно заголовок сторінки
    // document.getElementById('page-title').textContent = currentCategory.title;

    // // Рендеримо картки товарів у сітку
    // const container = document.getElementById('products-container');

    // currentCategory.items.forEach(product => {
    //   const card = document.createElement('div');
    //   card.className = 'product-card';
      
    //   card.innerHTML = `
    //     <div class="product-image-box">
    //       <img src="${product.image}" alt="${product.title.replace('<br>', ' ')}">
    //     </div>
    //     <p class="product-name">${product.title}</p>
    //     <div class="product-footer">
    //       <span class="product-price">${product.price}</span>
    //       <button class="add-to-cart-btn" data-id="${product.id}">В кошик</button>
    //     </div>
    //   `;
      
    //   container.appendChild(card);
    // });


    let categoryKey = 'men';

if (window.location.pathname.includes('women')) {
  categoryKey = 'women';
} else if (window.location.pathname.includes('kids')) {
  categoryKey = 'kids';
}

const currentCategory = catalogData[categoryKey];

// Безпечне оновлення заголовка
const pageTitleElement = document.getElementById('page-title');
if (pageTitleElement && currentCategory) {
  pageTitleElement.textContent = currentCategory.title;
}

// Рендеринг товарів у сітку
const container = document.getElementById('products-container');

if (container && currentCategory) {
  container.innerHTML = ''; // Очищаємо перед рендером
  
  currentCategory.items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <div class="product-image-box">
        <img src="${product.image}" alt="${product.title.replace('<br>', ' ')}">
      </div>
      <p class="product-name">${product.title}</p>
      <div class="product-footer">
        <span class="product-price">${product.price}</span>
        <button class="add-to-cart-btn" data-id="${product.id}">${product.buttonText || 'В кошик'}</button>
      </div>
    `;