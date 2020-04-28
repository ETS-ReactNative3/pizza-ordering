import {StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const textStyle = StyleSheet.create({
  restaurant: {
    fontSize: 47,
    color: '#FFFFFF',
    letterSpacing: 0.1,
  },

  restaurantName: {
    fontSize: 30,
    color: '#FFFFFF',
    letterSpacing: 0.07,
  },

  StartOrderButton: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#FFFFFF',
    letterSpacing: 0.07,
  },

  CategoryText: {
    marginRight: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    fontSize: 29,
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },

  TextNavigationPanel: {
    marginLeft: 35,
    fontSize: 20,
    color: '#FFFFFF',
  },

  headerCategoryName: {
    fontSize: 28,
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },

  favoriteProductName: {
    width: 0.44 * w,
    fontSize: 19.728,
    color: '#FFFFFF',
    letterSpacing: 0.26,
  },

  orderNowButton: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    letterSpacing: 0.16,
  },

  favoriteProductInfo: {
    fontSize: 13,
    marginLeft: 10,
    color: '#FFFFFF',
    letterSpacing: 0.16,
  },

  ProductListName: {
    fontSize: 13,
    marginLeft: 10,
    color: '#0b2031',
    letterSpacing: 0.16,
  },

  ProductListDescription: {
    fontSize: 11,
    marginLeft: 10,
    marginRight: 10,
    color: '#706e7b',
    letterSpacing: 0.26,
  },

  ProductListRate: {
    fontSize: 11,
    marginLeft: 5,
    marginRight: 10,
    color: '#706e7b',
    letterSpacing: 0.26,
  },

  ProductDetailName: {
    paddingTop: 10,
    fontSize: 25,
    color: '#0b2031',
    letterSpacing: 0.2,
    alignSelf: 'center',
    textAlign: 'center',
    width: 0.8 * w,
  },

  ProductDetailRate: {
    marginLeft: 10,
    fontSize: 20,
    color: '#ffd93f',
    letterSpacing: 0.1,
  },

  DescriptionHeader: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 20,
    color: '#e4283d',
    letterSpacing: 0.2,
  },

  DecriptionInfo: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    fontSize: 15,
    color: '#0b2031',
    letterSpacing: 0.1,
  },

  ProductDetailPrice: {
    marginLeft: 10,
    fontSize: 15,
    color: '#0b2031',
    letterSpacing: 0.1,
  },

  AllProduct: {
    marginLeft: 20,
    fontSize: 20,
    color: '#0b2031',
    letterSpacing: 0.2,
  },

  ModifyType:{
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 20,
    color: '#0b2031',
    letterSpacing: 1.5,
  },

  SizeText:{
    paddingTop: 5,
    fontSize: 15,
    color: '#0b2031',
  },

  SizeTextUnpick:{
    paddingTop: 5,
    fontSize: 15,
    color: '#aeaeae',
  },

  quantityPicker:{
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 17,
  },

  StringInput: {
    height: 45,
    width: 0.7*w,
    marginTop: 3,
    marginBottom: 3,
    fontSize: 15,
    borderWidth: 1,
  },
});

export {textStyle};
