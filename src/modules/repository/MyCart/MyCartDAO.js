import AsyncStorage from '@react-native-community/async-storage';

class MyCartDAO {
  async getCurrentLocalCart() {
    let cartData = '';
    try {
      cartData = (await AsyncStorage.getItem('currentCart')) || '';
      if (cartData === '') {
        return '';
      }
    } catch (e) {
      console.log(e.message);
    }
    return JSON.parse(cartData);
  }
  async storeCurrentCart(cartList) {
    let cartData = JSON.stringify(cartList);
    try {
      await AsyncStorage.setItem('currentCart', cartData);
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default MyCartDAO;
