// //1st
// import React, { Component } from 'react';
// import { View, Text, FlatList} from 'react-native';
// import studentList from '../data/StudentList.json';

// class DemoApp extends Component {
//   render() {
//     return (
//         <View style={{flex: 1, flexDirection: 'column'}}>
//            <Text >
//              Student List
//            </Text>
//            <FlatList
//              data={studentList}
//              showsVerticalScrollIndicator={false}
//              renderItem={({item}) =>
//                 <View >
//                  <Text>{item.name}</Text>
//                 </View>
//              }
//              keyExtractor={(_item, index) => index.toString()}
//            />
//         </View>
//      );
//   }
// }

// export default DemoApp;

//2nd
import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground} from 'react-native';
import get_shop from '../data/get_shop.json';

// class ShopScreen extends Component {
  const ShopScreen = () => {
  //render() 
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
   <ImageBackground
      blurRadius={1}

      style={styles.background}
          source={require("../assets/kfc.png")}>

           <Text >
             KFC
           </Text>
           <FlatList
             data={get_shop}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
                <View >
                 
                 {/* <Image>{item.shop_image}</Image> */}
                 <Image source={ {uri: item.shop_image}} style = {styles.imageView}/>
                 <Text>{item.shop_name}</Text>
                 <Text>{item.shop_mobile}</Text>
                 <Text>{item.shop_address}</Text>
                 <Text>{item.shop_preparation_time}</Text>
                 <Text>{item.shop_distance}</Text>
                 <Text>{item.shop_tax}</Text>
                 

                </View>
             }
             keyExtractor={(item, index) => index.toString()}
           />
           </ImageBackground>
        </View>
     );
  }

const styles = StyleSheet.create({
  imageView: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1,
      height:150,
      width: 180,
      alignItems:'center',
      alignContent: 'center'
    },
    background: {
    
      justifyContent: 'flex-end',
      alignItems: "center",
  },
  
});

export default ShopScreen;