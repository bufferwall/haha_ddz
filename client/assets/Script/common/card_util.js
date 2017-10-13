const Card = require('../model/Card');

function _getFreezeCard (obj) {
  return Object.freeze(new Card(obj));
}

// 定义一副扑克牌
const allCards = [
  _getFreezeCard({icon: 'j1.jpg', type: '0', val: 17}),
  _getFreezeCard({icon: 'j2.jpg', type: '0', val: 16}),
  _getFreezeCard({icon: 't1.jpg', type: '1', val: 14}),
  _getFreezeCard({icon: 't2.jpg', type: '1', val: 15}),
  _getFreezeCard({icon: 't3.jpg', type: '1', val: 3}),
  _getFreezeCard({icon: 't4.jpg', type: '1', val: 4}),
  _getFreezeCard({icon: 't5.jpg', type: '1', val: 5}),
  _getFreezeCard({icon: 't6.jpg', type: '1', val: 6}),
  _getFreezeCard({icon: 't7.jpg', type: '1', val: 7}),
  _getFreezeCard({icon: 't8.jpg', type: '1', val: 8}),
  _getFreezeCard({icon: 't9.jpg', type: '1', val: 9}),
  _getFreezeCard({icon: 't10.jpg', type: '1', val: 10}),
  _getFreezeCard({icon: 't11.jpg', type: '1', val: 11}),
  _getFreezeCard({icon: 't12.jpg', type: '1', val: 12}),
  _getFreezeCard({icon: 't13.jpg', type: '1', val: 13}),
  _getFreezeCard({icon: 'x1.jpg', type: '2', val: 14}),
  _getFreezeCard({icon: 'x2.jpg', type: '2', val: 15}),
  _getFreezeCard({icon: 'x3.jpg', type: '2', val: 3}),
  _getFreezeCard({icon: 'x4.jpg', type: '2', val: 4}),
  _getFreezeCard({icon: 'x5.jpg', type: '2', val: 5}),
  _getFreezeCard({icon: 'x6.jpg', type: '2', val: 6}),
  _getFreezeCard({icon: 'x7.jpg', type: '2', val: 7}),
  _getFreezeCard({icon: 'x8.jpg', type: '2', val: 8}),
  _getFreezeCard({icon: 'x9.jpg', type: '2', val: 9}),
  _getFreezeCard({icon: 'x10.jpg', type: '2', val: 10}),
  _getFreezeCard({icon: 'x11.jpg', type: '2', val: 11}),
  _getFreezeCard({icon: 'x12.jpg', type: '2', val: 12}),
  _getFreezeCard({icon: 'x13.jpg', type: '2', val: 13}),
  _getFreezeCard({icon: 'h1.jpg', type: '3', val: 14}),
  _getFreezeCard({icon: 'h2.jpg', type: '3', val: 15}),
  _getFreezeCard({icon: 'h3.jpg', type: '3', val: 3}),
  _getFreezeCard({icon: 'h4.jpg', type: '3', val: 4}),
  _getFreezeCard({icon: 'h5.jpg', type: '3', val: 5}),
  _getFreezeCard({icon: 'h6.jpg', type: '3', val: 6}),
  _getFreezeCard({icon: 'h7.jpg', type: '3', val: 7}),
  _getFreezeCard({icon: 'h8.jpg', type: '3', val: 8}),
  _getFreezeCard({icon: 'h9.jpg', type: '3', val: 9}),
  _getFreezeCard({icon: 'h10.jpg', type: '3', val: 10}),
  _getFreezeCard({icon: 'h11.jpg', type: '3', val: 11}),
  _getFreezeCard({icon: 'h12.jpg', type: '3', val: 12}),
  _getFreezeCard({icon: 'h13.jpg', type: '3', val: 13}),
  _getFreezeCard({icon: 'k1.jpg', type: '4', val: 14}),
  _getFreezeCard({icon: 'k2.jpg', type: '4', val: 15}),
  _getFreezeCard({icon: 'k3.jpg', type: '4', val: 3}),
  _getFreezeCard({icon: 'k4.jpg', type: '4', val: 4}),
  _getFreezeCard({icon: 'k5.jpg', type: '4', val: 5}),
  _getFreezeCard({icon: 'k6.jpg', type: '4', val: 6}),
  _getFreezeCard({icon: 'k7.jpg', type: '4', val: 7}),
  _getFreezeCard({icon: 'k8.jpg', type: '4', val: 8}),
  _getFreezeCard({icon: 'k9.jpg', type: '4', val: 9}),
  _getFreezeCard({icon: 'k10.jpg', type: '4', val: 10}),
  _getFreezeCard({icon: 'k11.jpg', type: '4', val: 11}),
  _getFreezeCard({icon: 'k12.jpg', type: '4', val: 12}),
  _getFreezeCard({icon: 'k13.jpg', type: '4', val: 13})
];

//拷贝牌组，返回一组新的牌组
Card.prototype.getNewCards = function () {
  return this.data.slice(0);
};
let util = {
  /**
   * 获取一副新扑克牌
   */
  getNewCards: () => {
    return allCards.slice(0);
  }
}

module.exports = util;