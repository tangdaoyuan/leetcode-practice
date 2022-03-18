// https://leetcode-cn.com/problems/simple-bank-system/
/**
 * 简易银行系统
 * 
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.cards = balance;
  this.len = balance.length;
};

Bank.prototype.isValidAccount = function (account) {
  if (account < 1 || account > this.len) {
    return false;
  }
  return true;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  if (!this.isValidAccount(account1) || !this.isValidAccount(account2)) {
    return false;
  }
  if (this.cards[account1 - 1] < money) {
    return false;
  }
  this.cards[account1 - 1] -= money;
  this.cards[account2 - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  if (!this.isValidAccount(account)) {
    return false;
  }
  this.cards[account - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  if (!this.isValidAccount(account)) {
    return false;
  }
  if (this.cards[account - 1] < money) {
    return false;
  }
  this.cards[account - 1] -= money;
  return true;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
