// import React from 'react';
// import OrderScreen from './app/screens/OrderScreen';


// export default function App() {
//   return <OrderScreen/>;
// }


//2nd
// import React from 'react';
// import ProductScreen from './app/screens/ProductScreen';

// export default function App() {
//   return <ProductScreen/>;
// }

//3rd
// import React from 'react';
// import ShopScreen from './app/screens/ShopScreen';

// export default function App() {
//   return <ShopScreen/>;
// }

//4th
// import React from 'react';
// import HomeScreen from './app/screens/HomeScreen';


// export default function App() {
//   return <HomeScreen/>;
// }

//loginscreen
// import React from 'react';
// import LoginScreen from './app/screens/LoginScreen';

// export default function App() {
//   return <LoginScreen/>;
// }


//5th link the different screens
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './app/screens/HomeScreen';
import ShopScreen from './app/screens/ShopScreen';
import OrderScreen from './app/screens/OrderScreen';
import ProductScreen from './app/screens/ProductScreen';
import LoginScreen from './app/screens/LoginScreen';


const navigator = createStackNavigator(
    {
      Home: HomeScreen,
      Order: OrderScreen,
      Product : ProductScreen,
      Shop : ShopScreen,
      Login : LoginScreen,
       
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'flat 50% offer'
      },
    }
  );

  export default createAppContainer(navigator);