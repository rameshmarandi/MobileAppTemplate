import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native'
import {connect} from 'react-redux'
import {CardComponent} from '../../commonrender/CommonRender'
import setVectorIcon from '../../components/VectorComponents'
import {SearchBar} from 'react-native-elements'
import {Button, Input} from 'react-native-elements'
import NavigationHeader from '../../components/NavigationHeader'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive'
import theme from '../../theme'
import {ListHeader, ViewPagerIndicator} from '../../commonrender/CommonRender'
export class MyOrders extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValue :""
    }
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
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/prod06.png')}
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
            source={require('../../assets/img/prod06.png')}
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
            source={require('../../assets/img/prod06.png')}
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
            source={require('../../assets/img/prod06.png')}
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
            source={require('../../assets/img/prod06.png')}
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
            source={require('../../assets/img/prod06.png')}
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
          backPress={() => {
            this.props.navigation.pop()
          }}
          title={'My Orders'}
          filter={() => {}}
        />
        <View
          style={{
            alignSelf: 'center',
            width: SCREENWIDTH,
            backgroundColor: 'white',
            marginBottom: '15%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              paddingHorizontal: '6%',
              borderRadius: 10,
              marginTop: '4%',
            }}>
            <SearchBar
              placeholder='Search Your Order here'
              onChangeText={text => this.setState({searchValue: text})}
              value={this.state.searchValue}
              leftIconContainerStyle={{paddingLeft: 10}}
              searchIcon={
                <Ionicons name='search' size={18} color={'#141414'} />
              }
              inputStyle={{
                  fontFamily: theme.font.latoRegular,
                fontSize: getFontSize(13),
                color: 'black',
              }}
              inputContainerStyle={{
                backgroundColor: '#f8f8f8',
                borderRadius: 8,
              }}
              containerStyle={{
                marginTop: 5,
                width: '100%',
                backgroundColor: theme.color.primary,
                padding: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 8,
              }}
            />
          </View>
         <View style={{
          marginBottom:"40%",
         
         }}>
         <FlatList
            showsVerticalScrollIndicator={false}
            data={MostPopularData}
            containerStyle={{
              width:"100%",
              backgroundColor:"red"
            }}
            renderItem={({item, index}) => {
              return (
                <>
                  <MostPopularProduct
                    data={MostPopularData}
                    allOnPress={() => {}}
                    lastItem ={MostPopularData.length -1 == index ? true : false}
                  />
                </>
              )
            }}
            keyExtractor={item => item}
          />
         </View>
        </View>
      </SafeAreaView>
    )
  }
}

const MostPopularProduct = props => {
  const {data, allOnPress , lastItem} = props

  return (
    <>
      <View
        style={{
          borderBottomWidth: lastItem == true?0: 1,
          borderBottomColor: theme.color.midGray,
          width: SCREENWIDTH,       
         
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '6%',
            paddingVertical: '5%',        
          }}>
          <View style={{
            width :"35%",         
          }}>
            <View
              style={{
                height: getResHeight(118),
                width: "100%",
                backgroundColor: theme.color.cardBg,
                borderRadius: 10,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
                source={require('../../assets/img/prod02.png')}
              />
            </View>
          </View>
          <View
            style={{
              width: '60%',
             marginLeft: '5%', 
               
              
            }}>
            <Text
              style={{
                fontSize: getFontSize(12.5),
                color: theme.color.black,
                fontFamily: theme.font.latoBold,
              }}>
              Cancelled On 14 June, 2022
            </Text>
            <Text
              style={{
                fontSize: getFontSize(11),
                color: theme.color.black,
                fontFamily: theme.font.latoBold,
                marginVertical: '3%',
              }}>
              Apple Watch Series 6
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '7%',
                marginTop: '3%',
              }}>
              <Text
                style={{
                  fontSize: getFontSize(13),
                  color: theme.color.darkGray,
                  fontFamily: theme.font.latoRegualr,
                }}>
                Price :
              </Text>
              <Text
                style={{
                  fontSize: getFontSize(13),
                  color: theme.color.darkGray,                 
                  fontFamily: theme.font.latoRegualr,
                }}>
                {' '}
                ₹ 36000.00/-
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                // justifyContent: 'center',
              }}>
              <Button
                onPress={() => {
                  // this.props.navigation.navigate('Profile')
                }}
                title='Order Return'
                type='outline'
                iconContainerStyle={{}}
                iconPosition={'right'}
                containerStyle={{
                  width: '100%',
                  alignSelf: 'center',
                  height: getResHeight(38),
                  backgroundColor: theme.color.primary,               
                  borderRadius: 8,
                
                }}
                titleStyle={{
                    fontFamily: theme.font.latoRegular,
                  fontSize: getFontSize(13),
                  color: 'white',
                }}
                buttonStyle={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: theme.color.primary,
                  borderColor: theme.color.primary,
                  borderRadius: 8,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
