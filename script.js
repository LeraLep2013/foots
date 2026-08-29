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
    const heroImg = document.getElementById("hero-img");
    if (heroImg) {
      (heroImg).setAttribute('src', images[current]);
    }
   }, 3000);





   const catalogData = {
      men: {
        title: "Чоловіче взуття",
        items: [
          {
    "id": 101,
    "title": "Skechers MAX PROTECT",
    "price": "5499 грн.",
    "image": "https://s1.media.intertop.com/load/KM5796/big/MAIN.webp?_gl=1*1kbj5vq*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDkzMTgkajU2JGwwJGgw",
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
    "image": "https://s1.media.intertop.com/load/CE855/big/MAIN.webp?_gl=1*1o0uc97*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODc0MDkzMTQkbzEkZzEkdDE3ODc0MDk2NzQkajU3JGwwJGgw",
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
          { id: 201, title: "Skechers UNO RYZE", price: "4799 грн.", image: "https://s1.media.intertop.com/load/KW9742/big/MAIN.webp?_gl=1*dy5osl*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTIzMDckajI5JGwwJGgw" },
          { id: 202, title: "Braska", price: "3009 грн.", image: "https://s1.media.intertop.com/load/BS4528/big/MAIN.webp?_gl=1*9p6jvq*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTI0MDMkajU0JGwwJGgw" },
          { id: 203, title: "ECCO ECCO RECEPTOR XP W", price: "8999 грн.", image: "https://s1.media.intertop.com/load/ZW9410/big/MAIN.webp?_gl=1*13uqisg*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTI1MDEkajI1JGwwJGgw" },
          { id: 204, title: "INTERTOP x KVITKOVA", price: "2499 грн.", image: "https://s1.media.intertop.com/load/INT47/big/MAIN.webp?_gl=1*15nbprd*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTI1NzMkajM3JGwwJGgw" },
          { id: 205, title: "Skechers DESERT KISS", price: "1749 грн.", image: "https://s1.media.intertop.com/load/KW9611/big/MAIN.webp?_gl=1*1n0mv9a*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTI2MzMkajUyJGwwJGgw" },
          { id: 206, title: "ECCO DRESS CLASSIC 15", price: "6999 грн.", image: "https://s1.media.intertop.com/load/ZW9382/big/MAIN.webp?_gl=1*o2w1ra*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTI3MTUkajQzJGwwJGgw" },
          { id: 207, title: "Calvin Klein FLATF ESPA", price: "3439 грн.", image: "https://s1.media.intertop.com/load/CKF724/big/MAIN.webp?_gl=1*4pignv*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTI4MTYkajIkbDAkaDA." },
          { id: 208, title: "Calvin Klein SQUARED", price: "7789 грн.", image: "https://s1.media.intertop.com/load/CKF759/big/MAIN.webp?_gl=1*1dsrsa8*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTI4ODEkajQ3JGwwJGgw" },
          { id: 209, title: "Skechers KEEPSAKES COZY", price: "4499 грн.", image: "https://s1.media.intertop.com/load/KW9419/big/MAIN.webp?_gl=1*vb7b*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTMwMTckajQyJGwwJGgw" }
        ]
      },
      kids: {
        title: "Дитяче взуття",
        items: [
          { id: 301, title: "Skechers UNO LITE", price: "3499 грн.", image: "https://s1.media.intertop.com/load/KK4008/big/MAIN.webp?_gl=1*32f8yx*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTMwODkkajQwJGwwJGgw" },
          { id: 302, title: "Geox STEPPIEUP BOY", price: "1499 грн.", image: "https://s1.media.intertop.com/load/XK9332/big/MAIN.webp?_gl=1*1m0jx9z*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTMxNjAkajM5JGwwJGgw" },
          { id: 303, title: "adidas TENSAUR SPORT 3.0", price: "1999 грн.", image: "https://s1.media.intertop.com/load/CP430/big/MAIN.webp?_gl=1*1g8zss9*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTMyNzIkajE4JGwwJGgw" },
          { id: 304, title: "Vans Knu Skool", price: "4499 грн.", image: "https://s1.media.intertop.com/load/V4155/big/MAIN.webp?_gl=1*vlupry*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTM3OTckajM1JGwwJGgw" },
          { id: 305, title: "adidas Grand Court", price: "2599 грн.", image: "https://s1.media.intertop.com/load/mp999393/big/MAIN.webp?_gl=1*19u01ce*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTM0NDQkajU3JGwwJGgw" },
          { id: 306, title: "Crocs", price: "1749 грн.", image: "https://s1.media.intertop.com/load/CRC105/big/MAIN.webp?_gl=1*imu3bz*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTM1MTQkajQ3JGwwJGgw" },
          { id: 307, title: "Crocs", price: "1519 грн.", image: "https://s1.media.intertop.com/load/CRC85/big/MAIN.webp?_gl=1*kjp1qy*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTM1NzIkajU2JGwwJGgw" },
          { id: 308, title: "Vans Mary Jane", price: "1249 грн.", image: "https://s1.media.intertop.com/load/V3646/big/MAIN.webp?_gl=1*gqrvbi*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTM2MjYkajIkbDAkaDA." },
          { id: 309, title: "ECCO SP.1 LITE INFANT", price: "3999 грн.", image: "https://s1.media.intertop.com/load/ZK4488/big/MAIN.webp?_gl=1*1wgh2md*_gcl_au*ODEwNzExMzE0LjE3ODc0MDkzMTM.*_ga*NjE4MzczNzM3LjE3ODc0MDkzMTQ.*_ga_1T8JR6P0ZJ*czE3ODgwMTIyNzYkbzIkZzEkdDE3ODgwMTM2ODgkajQyJGwwJGgw" }
        ]
      }
    };

    /** @type {'men' | 'women' | 'kids'} */
    let categoryKey = 'men';

if (window.location.pathname.includes('women')) {
  categoryKey = 'women';
} else if (window.location.pathname.includes('kids')) {
  categoryKey = 'kids';
}

const currentCategory = catalogData[categoryKey] || catalogData.men;

// Безпечне оновлення заголовка
const pageTitleElement = document.getElementById('page-title');
if (pageTitleElement && currentCategory) {
  pageTitleElement.textContent = currentCategory.title;
}

// Рендеринг товарів у сітку
const container = document.getElementById('products-container');

if (container && currentCategory) {
  container.innerHTML = ''; // Очищаємо перед рендером
  
  currentCategory.items.forEach((/** @type {{id: number, title: string, price: string, image: string, buttonText?: string}} */ product) => {
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

    container.appendChild(card);
  });
}

});





let categoryKey = 'men';
  if (window.location.pathname.includes('women')) categoryKey = 'women';
  else if (window.location.pathname.includes('kids')) categoryKey = 'kids';

  const currentCategory = catalogData[categoryKey];
  const container = document.getElementById('products-container');
  
  let cart = []; // Масив для кошика
  let currentUser = null; // Поточний користувач

  // Рендеринг карток
  if (container && currentCategory) {
    document.getElementById('page-title').textContent = currentCategory.title;
    container.innerHTML = ''; 
    
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
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">В кошик</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // --- ЛОГІКА МОДАЛЬНИХ ВІКОН --- //
  const overlay = document.getElementById('modal-overlay');
  const cartModal = document.getElementById('cart-modal');
  const regModal = document.getElementById('reg-modal');
  const profileModal = document.getElementById('profile-modal');

  // Відкриття кошика (прив'язуємо до кнопки в шапці)
  document.querySelector('.icon-btn[aria-label="Кошик"]').onclick = () => {
    overlay.style.display = 'block';
    cartModal.style.display = 'flex';
    updateCartUI();
  };

  // Відкриття профілю/реєстрації
  document.querySelector('.icon-btn[aria-label="Профіль"]').onclick = () => {
    overlay.style.display = 'block';
    if (currentUser) {
      document.getElementById('profile-name').textContent = currentUser;
      profileModal.style.display = 'flex';
    } else {
      regModal.style.display = 'flex';
    }
  };

  function closeModals() {
    overlay.style.display = 'none';
    cartModal.style.display = 'none';
    regModal.style.display = 'none';
    profileModal.style.display = 'none';
  }

  // Закриття при кліку на фон
  overlay.onclick = closeModals;

  // --- ЛОГІКА РЕЄСТРАЦІЇ --- //
  function registerUser() {
    const nameInput = document.getElementById('reg-name').value;
    if(nameInput.trim() !== '') {
      currentUser = nameInput;
      closeModals();
      alert(`Вітаємо, ${currentUser}! Ви успішно зареєструвались.`);
    }
  }

  // --- ЛОГІКА КОШИКА --- //
  function addToCart(id) {
    const product = currentCategory.items.find(item => item.id === id);
    if (product) {
      cart.push(product);
      alert('Товар додано у кошик!');
    }
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
  }

  function updateCartUI() {
    const cartContainer = document.getElementById('cart-items-container');
    const totalPriceEl = document.getElementById('cart-total-price');
    
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p style="color: #fff; text-align: center;">Кошик порожній</p>';
      totalPriceEl.textContent = '0';
      return;
    }

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      // Витягуємо числа з ціни "1750 грн."
      const priceNum = parseInt(item.price.replace(/\D/g, ''));
      total += priceNum;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.image}" alt="">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${item.price}</div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
      `;
      cartContainer.appendChild(itemEl);
    });

    totalPriceEl.textContent = total;
  }


  function openCart() {
  document.getElementById('modal-overlay').style.display = 'block';
  document.getElementById('cart-modal').style.display = 'flex';
  updateCartUI(); // Оновлюємо вміст кошика
}

// Відкриття профілю або реєстрації (залежно від того, чи увійшов користувач)
function openProfileOrReg() {
  document.getElementById('modal-overlay').style.display = 'block';
  
  if (currentUser) {
    document.getElementById('profile-name').textContent = currentUser;
    document.getElementById('profile-modal').style.display = 'flex';
  } else {
    document.getElementById('reg-modal').style.display = 'flex';
  }
}

// Закриття всіх модальних вікон
function closeModals() {
  document.getElementById('modal-overlay').style.display = 'none';
  document.getElementById('cart-modal').style.display = 'none';
  document.getElementById('reg-modal').style.display = 'none';
  document.getElementById('profile-modal').style.display = 'none';
}