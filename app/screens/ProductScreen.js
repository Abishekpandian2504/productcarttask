// 1st add name
// import React, { Component } from 'react';
// import { View, Text, FlatList} from 'react-native';
// import { ImageBackground } from 'react-native-web';
// import get_product from '../data/get_product.json';

// class ProductScreen extends Component {
//   render() {
//     return (
//         <View style={{flex: 1, flexDirection: 'column'}}>
//            <Text >
//              Student List
//            </Text>
//            <FlatList
//              data={get_product}
//              showsVerticalScrollIndicator={false}
//              renderItem={({item}) =>
//                 <View >
//                  <Text>{item.product_name}</Text>
//                 </View>
//              }
//              keyExtractor={(item, index) => index.toString()}
//            />
//         </View>
//      );
//   }
// }

// export default ProductScreen;

//add image
// import React, { Component } from 'react';
// import { View, Text, FlatList, Image, StyleSheet} from 'react-native';

// import get_product from '../data/get_product.json';

// class ProductScreen extends Component {
//   render() {
//     return (
//         <View style={{flex: 1, flexDirection: 'column'}}>
//            <Text >
//              Items
//            </Text>
//            <FlatList
//              data={get_product}
//              showsVerticalScrollIndicator={false}
//              renderItem={({item}) =>
//                 <View >
//                  <Text>{item.product_name}</Text>
//                  <Image source={ {uri: item.product_image}} style = {styles.imageView}/>
                
//                  {/* <Image source={ {uri: item.service_image}} style = {styles.imageView}/> */}
//                  {/* <Text>{item.service_name } </Text>
//                  <Text>{item.category_name}</Text> */}
//                  <Text>{item.shop_name}</Text>

                 
     
//                 </View>
//              }
//              keyExtractor={(item, index) => index.toString()}
//            />
//         </View>
//      );
//   }
// }
// const styles = StyleSheet.create({
//     imageView: {
//         margin: 15,
//         borderColor: 'black',
//         borderWidth: 1,
//         height:200
//       }
// });


// export default ProductScreen;

//add button
// import React, { Component } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, Button} from 'react-native';

// class ProductScreen extends Component {
    
//   render() {
//     return (
//         <View style={{flex: 1, flexDirection: 'column'}}>
//            <Text >
//              Recommended Items
//            </Text>
//            <FlatList
//              data={get_product}
//              showsVerticalScrollIndicator={false}
//              renderItem={({item}) =>
//                 <View >
//                  <Text>{item.product_name}</Text>
//                  <Image source={ {uri: item.product_image}} style = {styles.imageView}/>
                
//                  {/* <Image source={ {uri: item.service_image}} style = {styles.imageView}/> */}
//                  {/* <Text>{item.service_name } </Text>
//                  <Text>{item.category_name}</Text> */}
//                  <Text>{item.shop_name}</Text>
               

//                  <Button style={styles.button}
//                     title="+"
//                     onPress={() => {
//                     dispatch({ type: 'increment', payload: 1 });
//                    }}
//                 />
//                 <Button style={styles.button}
//                    title="-"
//                    onPress={() => {
//                    dispatch({ type: 'decrement', payload: 1 });
//                   }}
//                 />

    
     
//                 </View>
//              }
//              keyExtractor={(item, index) => index.toString()}
//            />
//         </View>
//      );
//   }
// }
// const styles = StyleSheet.create({
//     imageView: {
//         margin: 15,
//         borderColor: 'black',
//         borderWidth: 1,
//         height:200
//       }
// });


// export default ProductScreen;

//3rd add count in button press
import React, { useReducer } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, ImageBackground} from 'react-native';

import get_product from '../data/get_product.json';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }
  
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + action.payload };
      case 'decrement':
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };

const ProductScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

// class ProductScreen extends Component {   
  // render() {
    
    return (
      <ImageBackground
      blurRadius={10}

      style={styles.background}
          source={require("../assets/kfc.png")}>
      
        <View style={{flex: 1, flexDirection: 'column',width:380}}>
         
           <Text >
             Recommended Items
           </Text>
           <FlatList
             data={get_product}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
                <View >
                 <Text>{item.product_name}</Text>
                 <Image source={ {uri: item.product_image}} style = {styles.imageView}/>
                
                 {/* <Image source={ {uri: item.service_image}} style = {styles.imageView}/> */}
                 {/* <Text>{item.service_name } </Text>
                 <Text>{item.category_name}</Text> */}
                 <Text>{item.shop_name}</Text>
               

                 <Button style={styles.button}
                    title="+"
                    onPress={() => {
                    dispatch({ type: 'increment', payload: 1 });
                   }}
                />
                
                <Button style={styles.button}
                   title="-"
                   onPress={() => {
                   dispatch({ type: 'decrement', payload: 1 });
                  }}
                />
                    
                </View>
                
             }
             keyExtractor={(item, index) => index.toString()}
           />
                <Text>Total Cart: {state.count}</Text>
        </View>
        </ImageBackground>
     );
     
  }
//}
const styles = StyleSheet.create({
    imageView: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        height:200
      },
      background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
});


export default ProductScreen;