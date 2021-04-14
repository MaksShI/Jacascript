'use strict';
//Ex. 1
const chess = {
  gameContainerEl: document.getElementById('game'),
  renderMap() {
    const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
    for (let row = 0; row < rows.length; row++) {
      const tr = document.createElement('tr');
      this.gameContainerEl.appendChild(tr);
      for (let col = 0; col < cols.length; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        if (rows[row] === 0 && cols[col] !== 0) {
          td.innerHTML = cols[col];
        } else if (cols[col] === 0 && rows[row] !== 0) {
          td.innerHTML = rows[row].toString();
        }
        if (this.isCellIsBlack(row, col)) {
          td.style.backgroundColor = 'grey';
        }
      }
    }
  },
  isCellIsBlack(rowNum, colNum) {
    if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
      return false;
    }
    return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
  },
};

chess.renderMap();

// Ex. 3
const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    clearCartButton: null,
    cartItem,
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 1,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartButton = document.querySelector('.cart-btn');
        this.clearCartButton.addEventListener('click', () => this.clearCart());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};
cart.init();