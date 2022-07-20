import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  NativeModules,
  ScrollView,
} from 'react-native'
import {connect} from 'react-redux'

import OfferCard from '../../components/OfferCard'
import setVectorIcon from '../../components/VectorComponents'
import {SearchBar} from 'react-native-elements'
import {Button, Input} from 'react-native-elements'
import NavigationHeader from '../../components/NavigationHeader'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive'
import theme from '../../theme'
import {
  ListHeader,
  BannerComponent,
  CardComponent,
  IconInputText,
} from '../../commonrender/CommonRender'
import ViewPagerIndicator from '../../components/ViewPagerIndicator'
export class ProductOverview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wishlist: true,
      selectColor: '#7A5548',
      pincheck: false
    }
  }

  render () {
    const selectColor = ['#7A5548', '#607D8A', '#3F51B2', '#62C9C9']
    const productInfoData = [
      {
        id: 0,
        title: 'Product Details',
      },
      {
        id: 1,
        title: 'Best Offers',
      },
      {
        id: 2,
        title: 'Return & Exchange Policy',
      },
    ]   
    const MostPopularData1 = [
      {
        id: 1,
        renderIcon: (
          <Image
            style={{
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
        id: 2,
        renderIcon: (
          <Image
            style={{
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
        id: 2,
        renderIcon: (
          <Image
            style={{
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
        id: 2,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/prod05.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },
    ]
    const superOfferData1 = [
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
            source={require('../../assets/img/prod03.png')}
          />
        ),
        discount: '50%',
        title: 'Today’s Special!',
        desc: 'Get discount for every order, only valid for today',
        color: '#DADEFF',
      },
      {
        id: 1,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/prod03.png')}
          />
        ),
        discount: '50%',
        title: 'Today’s Special!',
        desc: 'Get discount for every order, only valid for today',
        color: '#DADEFF',
      },
      {
        id: 2,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/prod03.png')}
          />
        ),
        discount: '50%',
        title: 'Today’s Special!',
        desc: 'Get discount for every order, only valid for today',
        color: '#DADEFF',
      },
      

    ]
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.color.midGray,
        }}>
        <NavigationHeader
          cart={() => {
            this.props.navigation.navigate('MyCart')
          }}
          backPress={() => {
            this.props.navigation.pop()
          }}
          search={() => { this.props.navigation.navigate('Search')}}
          title={'Bags'}
          style={{
            backgroundColor: theme.color.midGray,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{              
            }}>
            <BannerComponent data={superOfferData1} 
            type={"singleProduct"}
            onPress={true}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',             
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              paddingHorizontal: '6%',
              paddingBottom: '5%',
              borderBottomWidth: 7,
              borderBottomColor: theme.color.midGray,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '8%',
              }}>
              <Text
                style={{
                  fontSize: getFontSize(18),
                  color: theme.color.black,
                  fontFamily: theme.font.latoBold,                  
                }}>
                Min Bag
              </Text>             
            </View>
            <Text
              style={{
                width: '90%',
                fontSize: getFontSize(11),
                color: theme.color.darkGray,
                marginVertical: '4%',
                fontFamily: theme.font.latoRegular,
              }}>
              Eget lorem nec arcu, risus velit, tempus. Arcu purus mollis proin
              integer sem.
            </Text>
            <View
              style={{
                width: '75%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: getFontSize(13),
                  color: theme.color.black,
                  fontFamily: theme.font.latoBold,
                }}>
                ₹ 418.00/-
              </Text>
              <Text
                style={{
                  fontSize: getFontSize(13),
                  color: theme.color.darkGray,
                  textDecorationLine: 'line-through',
                  fontFamily: theme.font.regular,
                }}>
                ₹ 500/-
              </Text>
              <Text
                style={{
                  fontSize: getFontSize(13),
                  color: 'red',
                  fontFamily: theme.font.latoBold,
                }}>
                10% off
              </Text>
            </View>

            {/* Devlivery Optioin */}
          </View>
          <View
            style={{
              paddingHorizontal: '6%',
              borderBottomWidth: 7,
              borderBottomColor: theme.color.midGray,
              paddingTop: '2%',
              backgroundColor :"#FFFFFF"
            }}>
              <Text style={{
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoBold,
                color: theme.color.black,
                marginTop:"5%"
              }}>Delivery Option</Text>
            {/* <ListHeader title={'Delivery Option'} /> */}
            <Formik
              initialValues={{
                pincode: '',
              }}
              onSubmit={async values => {}}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                setFieldTouched,
              }) => (
                <>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padingBottom: '3%',
                      backgroundColor :"#FFFFFF"
                    }}>
                    <IconInputText
                      keyboardType='numeric'
                      placeholder='Enter PIN Code for Delivery'
                      value={values.pincode}
                      style={{                      
                        fontSize: values.pincode.length <1 ? getFontSize(10):getFontSize(13),
                        fontFamily: values.pincode.length <1 ? theme.font.latoRegular : theme.font.latoBold,
                        color: 'black',
                        width: '20%',
                      }}
                      containerStyle={{
                        width: '65%',
                      }}
                      maxLength={6}
                      onChangeText={text => {
                        setFieldValue('pincode', text)
                      }}
                      onFocus={() => {
                        setFieldTouched('pincode', true)
                      }}
                      placeholderTextColor='#696969'
                      leftIcon={setVectorIcon({
                        type: 'MaterialIcons',
                        name: 'location-on',
                        size: getFontSize(22),
                        color: '#6A6A6A',
                      })}
                    />

                    <Button
                      onPress={() => {
                          this.setState({pincheck : !this.state.pincheck})
                      }}
                      disabled={values.pincode.length < 6 ? true : false}
                      title='Check'
                      type='outline'
                      iconContainerStyle={{}}
                      iconPosition={'right'}
                      containerStyle={{
                        width: '30%',
                        alignSelf: 'center',
                        height: getResHeight(40),
                        backgroundColor:values.pincode.length == 6 ?theme.color.primary: 'white',
                        borderRadius: 5,                        
                        margin: '5%',
                      }}
                      titleStyle={{
                        fontFamily: theme.font.latoRegular,
                        fontSize: getFontSize(14),
                        color :values.pincode.length == 6 ? "#FFFFFF": theme.color.darkGray,
                      
                      }}
                      buttonStyle={{
                        height: '100%',
                        width: '100%',
                        backgroundColor:values.pincode.length== 6   ? theme.color.primary: 'white',
                       borderColor:  values.pincode.length == 6? theme.color.primary : theme.color.darkGray,
                        borderRadius: 5,
                      }}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
          <View
            style={{
              paddingHorizontal: '6%',
              paddingVertical: '5%',
              borderBottomWidth: 2,
              borderBottomColor: theme.color.midGray,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor :"#FFFFFF"
            }}>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoBold,
                
                color: theme.color.black,
              }}>
              Sold By :{' '}
            </Text>
            <Text
              style={{
                fontSize: getFontSize(13),
                fontFamily: theme.font.latoRegular,
                color: theme.color.darkGray,
              }}>
              Seller Name
            </Text>
          </View>
          {/* In Stock Setion */}
          <View

            style={{
              paddingHorizontal: '6%',
              paddingVertical: '5%',
              borderBottomWidth: 2,
              borderBottomColor: theme.color.midGray,
              backgroundColor :"#FFFFFF"
            }}>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoBold,
                color: theme.color.green,
              }}>
              In Stock
            </Text>
          </View>
          {/* Select Color */}

          <View
            style={{
              paddingHorizontal: '6%',
              paddingVertical: '5%',
              borderBottomWidth: 2,
              borderBottomColor: theme.color.midGray,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor :"#FFFFFF"
            }}>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoBold,
                color: theme.color.black,
              }}>
              Select Color
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '5%',
              }}>
              {selectColor.map((i, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => this.setState({selectColor: i})}
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: i,
                      borderRadius: 50,
                      margin: '3%',
                    }}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor:
                          this.state.selectColor == i ? '#FFFFFF' : null,
                        borderRadius: 50,
                        position: 'absolute',
                        top: 4.7,
                        left: 5.1,
                      }}
                    />
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
          {/* Product Information Section */}
          <View
            style={{
              paddingVertical: '5%',
              backgroundColor:"#FFFFFF"
            }}>
            <Text
              style={{
                paddingHorizontal: '6%',
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoBold,
                color: theme.color.black,
              }}>
              Product Information
            </Text>
            <FlatList
              data={productInfoData}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View
                      style={{
                        borderBottomWidth:
                          productInfoData.length - 1 == index ? 0 : 2,
                        borderBottomColor: theme.color.midGray,
                        paddingHorizontal: '6%',
                        paddingVertical: '5%',
                      }}>
                      <Text
                        style={{
                          fontSize: getFontSize(13),
                          fontFamily: theme.font.latoBold,
                          color: theme.color.primary,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: getFontSize(12),
                          color: theme.color.darkGray,
                          marginVertical: '4%',                          
                          fontFamily: theme.font.latoRegular,
                        }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        dolor sit amet.
                      </Text>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: getFontSize(13),
                            color: 'red',
                            textDecorationLine: 'underline',
                            fontFamily: theme.font.latoRegular,
                          }}>
                          View More
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )
              }}
            />
          </View>

          {/* Similary Product Section */}
          <View
            style={{
              paddingHorizontal: '5%',
              backgroundColor: "#FFFFFF",
            }}>
         <Text
              style={{
              
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoBold,
                color: theme.color.black,
              }}>
              View Similar Product
            </Text>

            <View
              style={{
                alignSelf: 'center',
                width: SCREENWIDTH,
                backgroundColor: 'white',
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
                        <MostPopularProduct
                          data={MostPopularData1}
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
          </View>
        </ScrollView>
        {/* Button Section */}
        <View style={{
          width: '100%',
          // backgroundColor: 'green',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: SCREENWIDTH - 35,
            // backgroundColor: 'red',
            backgroundColor: 'white',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '5%',
            // marginTop: '1%',
          }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("MyCart");
            }}
            title='Add To Cart'
            type='outline'
            iconContainerStyle={{}}
            icon={setVectorIcon({
              type: 'AntDesign',
              name: 'shoppingcart',
              size: getFontSize(18),
              color: '#FFFFFF',
            })}
            iconPosition={'left'}
            containerStyle={{
              width: '48%',
              alignSelf: 'center',
              height: getResHeight(40),
              backgroundColor: 'white',
              // marginVertical: '5%',
              borderRadius: 5,
            }}
            titleStyle={{
              fontFamily: theme.font.latoRegular,
              fontSize: getFontSize(14),
              color: '#FFFFFF',
              marginLeft: '5%',
            }}
            buttonStyle={{
              height: '100%',
              width: '100%',
              backgroundColor: theme.color.primary,
              borderColor: theme.color.primary,
              borderRadius: 5,
            }}
          />
          <Button
           onPress={() => {
            this.props.navigation.navigate("Wishlist");
          }}
            title='Wishlist'
            type='outline'
            icon={setVectorIcon({
              type: 'Feather',
              name: 'heart',
              size: getFontSize(18),
              color: theme.color.primary,
            })}
            iconContainerStyle={{}}
            iconPosition={'left'}
            containerStyle={{
              width: '48%',
              alignSelf: 'center',
              height: getResHeight(40),
              backgroundColor: 'white',
              // marginVertical: '5%',
              borderRadius: 5,
            }}
            titleStyle={{
              fontFamily: theme.font.latoRegular,
              fontSize: getFontSize(14),
              color: theme.color.primary,
              marginLeft: '5%',
            }}
            buttonStyle={{
              height: '100%',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderColor: theme.color.primary,
              borderRadius: 5,
            }}
          />
        </View>
        </View>
      </SafeAreaView>
    )
  }
}
const MostPopularProduct = props => {
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
            marginBottom: '13%',
          }}>
          <FlatList
            style={{
              marginTop: '5%',
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
                  data={item}
                  wish={true}
                  type={'popular'}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverview)
