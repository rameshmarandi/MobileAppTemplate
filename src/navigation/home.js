import {createStackNavigator} from 'react-navigation-stack'

import ChangePassword from '../screens/ChangePassword/ChangePassword'
import DeactivateAccount from '../screens/DeactivateAccount/DeactivateAccount'

import HomePage from '../screens/Home/HomePage'
import MostPopular from '../screens/MostPopular/MostPopular'
import AddNewAddress from '../screens/Address/AddNewAddress'
import ChangeAddress from '../screens/Address/ChangeAddress'
import MyCart from '../screens/Products/MyCart'
import MyOrders from '../screens/Products/MyOrders'
import OrderConfirm from '../screens/Products/OrderConfirm'
import PlaceOrder from '../screens/Products/PlaceOrder'
import ProductList from '../screens/Products/ProductList'
import ProductOverview from '../screens/Products/ProductOverview'
import EditProfile from '../screens/Profile/EditProfile'
import SuperOffers from '../screens/SuperOffers/SuperOffers'

import bottomTabNavigator from './tabnavigator'
import Categories from '../screens/Categories/Categories'
import SingleCategories from '../screens/Categories/SingleCategories'
import Wishlist from "../screens/Wishlist/Wishlist"
import Search from '../screens/Search/Search'
export default createStackNavigator({
  tab: {
    screen: bottomTabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      headerShown: false,
    },
  },
  SingleCategories: {
    screen: SingleCategories,
    navigationOptions: {
      headerShown: false,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
    },
  },
  MostPopular: {
    screen: MostPopular,
    navigationOptions: {
      headerShown: false,
    },
  },
  ProductList: {
    screen: ProductList,
    navigationOptions: {
      headerShown: false,
    },
  },
  SuperOffers: {
    screen: SuperOffers,
    navigationOptions: {
      headerShown: false,
    },
  },
  ProductOverview: {
    screen: ProductOverview,
    navigationOptions: {
      headerShown: false,
    },
  },
  MyCart: {
    screen: MyCart,
    navigationOptions: {
      headerShown: false,
    },
  },
  PlaceOrder: {
    screen: PlaceOrder,
    navigationOptions: {
      headerShown: false,
    },
  },
  OrderConfirm: {
    screen: OrderConfirm,
    navigationOptions: {
      headerShown: false,
    },
  },
  AddNewAddress: {
    screen: AddNewAddress,
    navigationOptions: {
      headerShown: false,
    },
  },
  ChangeAddress: {
    screen: ChangeAddress,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditProfile: {
    screen:EditProfile,
    navigationOptions: {
      headerShown: false,
    },
  }, 
  MyOrders: {
    screen:MyOrders,
    navigationOptions: {
      headerShown: false,
    },
  },
 
  Wishlist: {
    screen:Wishlist,
    navigationOptions: {
      headerShown: false,
    },
  },
  ChangePassword: {
    screen:ChangePassword,
    navigationOptions: {
      headerShown: false,
    },
  },
  DeactivateAccount: {
    screen:DeactivateAccount,
    navigationOptions: {
      headerShown: false,
    },
  },
  
})
