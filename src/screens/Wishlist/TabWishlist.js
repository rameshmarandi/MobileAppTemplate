import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native'
import {connect} from 'react-redux'
import {CardComponent} from "../../commonrender/CommonRender"
import setVectorIcon from '../../components/VectorComponents'
import {SearchBar} from 'react-native-elements'
import {Button, Input} from 'react-native-elements'
import NavigationHeader from '../../components/NavigationHeader'

import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive'
import theme from '../../theme'
import {ListHeader, ViewPagerIndicator} from '../../commonrender/CommonRender'
export class TabWishlist extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const MostPopularData = [
      {
        id: 0,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod02.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },

      {
        id: 1,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod07.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },

      {
        id: 2,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod02.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },

      {
        id: 3,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod02.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },

      {
        id: 4,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod02.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },

      {
        id: 5,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod07.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },
    ]

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <NavigationHeader 
        search={() => {this.props.navigation.navigate("Search")}}
        cart={() => {this.props.navigation.navigate("MyCart")}} headerTitle={'Wishlist'} />
        <View
          style={{
            alignSelf: 'center',
            width: SCREENWIDTH,        
            backgroundColor: 'white',
            marginBottom: '15%',
            alignSelf: 'center',
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{}}
            data={[0]}
            renderItem={({item, index}) => {
              switch (index) {
                case 0:
                  return (
                    <MostPopular
                      data={MostPopularData}
                      allOnPress={() => {
                        this.props.navigation.navigate('ProductOverview')
                      }}                     
                    />
                  )

                default:
                  break
              }
            }}
            keyExtractor={item => item}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const MostPopular = props => {
  const {data, allOnPress} = props

  return (
    <>
      <View
        style={{
          width: '100%',       
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <FlatList
            style={{
              // marginTop: '5%',
              alignSelf: 'center',
            }}
            contentContainerStyle={{
              width: '100%',
              flexDirection: 'row',
            }}
            numColumns={2}
            showsHorizontalScrollIndicator={true}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <CardComponent
                 data = {item} 
                 close={true}
                 onPress={allOnPress}
                 />
              </>
            )}
          />
        </View>
      </View>
    </>
  )
}


const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TabWishlist)
