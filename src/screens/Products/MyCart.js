import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native'
import {connect} from 'react-redux'
import {
  CardComponent,
  IconInputText,
  CustomUIModal,
} from '../../commonrender/CommonRender'
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
import {Formik} from 'formik'
import theme from '../../theme'
import {ListHeader, ViewPagerIndicator} from '../../commonrender/CommonRender'
import ThemedListItem from 'react-native-elements/dist/list/ListItem'
export class MyCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID :0
    }
  }

  render () {
    const MostPopularData = [
      {
        id: 0,
        renderIcon: (
          <Image
            style={{
              // position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/prod03.png')}
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

    const addressData = [
      {
        id: 0,
        type: 'home',
        name: 'Jenny Wilson',
        mobile: '+91 98765 43210',
        address:
          'Building No,66, 78th Main Road, 100ft Road, Indiranagar, Bangalore 123456',
      },
      {
        id: 1,
        type: 'office',
        name: 'Jenny Wilson',
        mobile: '+91 98765 43210',
        address:
          'Building No,66, 78th Main Road, 100ft Road, Indiranagar, Bangalore 123456',
      },
      {
        id :2,
        type: 'office',
        name : "Jenny Wilson",
        mobile:"+91 98765 43210",
        address : "Building No,66, 78th Main Road, 100ft Road, Indiranagar, Bangalore 123456"
      },
      {
        id :3,
        type: 'office',
        name : "Jenny Wilson",
        mobile:"+91 98765 43210",
        address : "Building No,66, 78th Main Road, 100ft Road, Indiranagar, Bangalore 123456"
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
          title={'My Cart'}
        />

        <CustomUIModal
          isShow={this.state.showmodal}
          onRequestClose={() => this.setState({showmodal: false})}
          outsidePress={() => this.setState({showmodal: false})}
          leftText={'Saved Address'}
          rightText={'Add New Addresss'}
          textOnPress={() => {
         this.props.navigation.navigate("AddNewAddress")
          }}        
          customUIRender={
            <>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{
              marginBottom:"18%",
              maxHeight : SCREENHEIGHT - 150,              
            }}>
              <FlatList
                data={addressData}
                keyExtractor={item => item}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <AddressCard 
                      data={item} 
                      seletedID = {this.state.seletedID}
                      selectedAddress={(id) => {this.setState({seletedID : id})}} />
                    </>
                  )
                }}
              />
              </ScrollView>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: getResHeight(80),
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent:"center",
                  backgroundColor: theme.color.dimPrimary,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}>
               
                  <Button
                    onPress={() => {
                      this.setState({showmodal:false})                
                    }}
                    title='Confirm Address'
                    type='outline'
                    iconContainerStyle={{}}
                    iconPosition={'right'}
                    containerStyle={{
                      width: '80%',
                      alignSelf: 'center',
                      height: getResHeight(40),
                      backgroundColor: theme.color.primary,                    
                      borderRadius:5,
                    }}
                    titleStyle={{
                        fontFamily: theme.font.latoRegular,
                      fontSize: getFontSize(14),
                      color: 'white',
                    }}
                    buttonStyle={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: theme.color.primary,
                      borderColor: theme.color.primary,
                      borderRadius:5,
                    }}
                  />
             
              </View>
            </>
          }
        />

        <View
          style={{
            backgroundColor: 'white',
            marginBottom: '0%',
          }}>
          <Formik
            initialValues={{
              coupon: '',
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
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{
                  
                    marginBottom: '35%', }}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{}}
                    data={MostPopularData}
                    renderItem={({item, index}) => {
                      return (
                        <CartProduct
                          data={item}
                          allOnPress={() => {
                            // this.props.navigation.navigate('TrendingJobs')
                          }}
                        />
                      )
                    }}
                    keyExtractor={item => item}
                  />
            <View style={{
              paddingHorizontal: '5%',
            }}>
                  {/* offers Benifit */}
                  <Text style={{
                    fontSize: getFontSize(14),
                    fontFamily: theme.font.latoBold,
                    color: theme.color.black,
                    marginTop: '5%'
                  }}>Offers & Benifits</Text>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padingBottom: '3%',
                      marginTop: '4%',
                    }}>
                    <IconInputText
                      placeholder='Apply Coupon Code'
                      value={values.coupon}
                      style={{
                        marginLeft: '2%',
                        fontSize: getFontSize(13),
                        fontWeight: '400',
                        color: 'black',
                        width: '20%',
                        letterSpacing: 0.7,
                      }}
                      containerStyle={{
                        width: '100%',
                      }}
                      onChangeText={text => {
                        setFieldValue('coupon', text)
                      }}
                      onFocus={() => {
                        setFieldTouched('coupon', true)
                      }}
                      disabled={values.coupon.length<1? true : false}
                      rightIconPress={() => {}}
                      placeholderTextColor='#696969'
                      rightIcon={setVectorIcon({
                        type: 'FontAwesome',
                        name: 'angle-right',
                        size: getFontSize(25),
                        color: '#6A6A6A',
                      })}
                    />
                  </View>

                  {/* Address Section */}
                  <View
                    style={{
                      width: '100%',
                      marginTop: '4%',
                      marginBottom: '4%',
                    }}>
                 <Text style={{
                    fontSize: getFontSize(14),
                    fontFamily: theme.font.latoBold,
                    color: theme.color.black,
                    marginTop: '5%'
                  }}>Address</Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: theme.color.cardBg,
                        paddingVertical: '8%',
                        paddingLeft: '3%',
                        paddingRight: '3%',
                        marginTop: '4%',
                        borderRadius: 10,
                      }}>
                      <View
                        style={{
                          width: '50%',
                          marginRight: '6%',                         
                        }}>
                        <View
                          style={{
                            width: '83%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: getFontSize(12),
                              color: theme.color.black,
                              fontFamily: theme.font.latoRegular
                            }}>
                            Deliver to :
                          </Text>
                          <Text
                            style={{
                              fontSize: getFontSize(12),
                              color: theme.color.black,
                              fontFamily: theme.font.latoBold
                            }}>
                            {' '}
                            Mumbai - 000001
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: getFontSize(11),
                            color: theme.color.darkGray,
                            marginTop: '3%',
                            fontFamily: theme.font.latoRegular
                          }}>
                          Lorem ipsum dolor sit, ...
                        </Text>
                      </View>
                      <Button
                        onPress={() => {
                          this.setState({showmodal: true})
                        }}
                        title='Change'
                        type='outline'
                        iconContainerStyle={{}}
                        iconPosition={'right'}
                        containerStyle={{
                          width: '35%',
                          alignSelf: 'center',
                          height: getResHeight(40),
                          backgroundColor: 'white',

                          borderRadius: 5,
                          marginLeft: '4%',
                        }}
                        titleStyle={{
                            fontFamily: theme.font.latoRegular,
                          fontSize: getFontSize(15),
                          color: theme.color.primary,
                        }}
                        buttonStyle={{
                          height: '100%',
                          width: '100%',
                          backgroundColor: 'white',
                          borderColor: theme.color.primary,
                          borderRadius: 5,
                        }}
                      />
                    </View>
                  </View>

                  {/* Bill Details */}
                  <View
                    style={{
                      width: '100%',                     
                      marginBottom: '20%',
                    }}>
                 <Text style={{
                    fontSize: getFontSize(14),
                    fontFamily: theme.font.latoBold,
                    color: theme.color.black,
                    marginTop: '5%'
                  }}>Bill Details</Text>

                    <View
                      style={{
                        width: '100%',
                        backgroundColor: theme.color.cardBg,
                        padding: '5%',
                        marginTop: '4%',
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: getFontSize(14),
                          color: theme.color.black,  
                          fontFamily: theme.font.latoBold
                        }}>
                        Price Details ( 2 Items )
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          borderBottomWidth: 1,
                          borderBottomColor: theme.color.darkGray,
                          paddingBottom: '4%',
                          marginTop: '4%',
                        }}>
                        <View style={[styles.container, {}]}>
                          <Text style={[styles.LeftText, {}]}>Total MRP</Text>
                          <Text
                            style={[
                              styles.RightText,
                              {
                                color: theme.color.darkGray,
                              },
                            ]}>
                            ₹ 3915/-
                          </Text>
                        </View>
                        <View style={[styles.container, {}]}>
                          <Text style={[styles.LeftText, {}]}>
                            Discount MRP
                          </Text>
                          <Text
                            style={[
                              styles.RightText,
                              {
                                color: 'red',
                              },
                            ]}>
                            - ₹300
                          </Text>
                        </View>
                        <View style={[styles.container, {}]}>
                          <Text style={[styles.LeftText, {}]}>
                            Coupon Discount
                          </Text>
                          <Text
                            style={[
                              styles.RightText,
                              {
                                color: 'red',
                              },
                            ]}>
                            - ₹100
                          </Text>
                        </View>
                        <View style={[styles.container, {}]}>
                          <Text style={[styles.LeftText, {}]}>
                            Shipping Charges
                          </Text>
                          <Text
                            style={[
                              styles.RightText,
                              {
                                color: theme.color.green,
                              },
                            ]}>
                            +₹40
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.container,
                          {
                            marginTop: '2%',
                          },
                        ]}>
                        <Text style={styles.total}>Total Amount</Text>
                        <Text style={styles.total}>₹3655</Text>
                      </View>
                    </View>
                  </View>
                  </View>
                </ScrollView>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: getResHeight(135),
                    backgroundColor: theme.color.dimPrimary,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: '5%',
                      paddingHorizontal: '6%',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginLeft: '4%'}}>
                      <Text style={[styles.LeftText, {}]}>Total Price</Text>
                      <Text
                        style={{
                          fontSize: getFontSize(16),
                          fontFamily: theme.font.latoBold,
                          color: theme.color.black,
                          paddingTop: '5%'
                        }}>
                        ₹ 420/-
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: '5%',
                      }}>
                      <Button
                        onPress={() => {
                          this.props.navigation.navigate("PlaceOrder")
                        }}
                        title='Continue'
                        type='outline'
                        iconContainerStyle={{}}
                        iconPosition={'right'}
                        containerStyle={{
                          width: '90%',
                          alignSelf: 'center',
                          height: getResHeight(40),
                          backgroundColor: theme.color.primary,
                          margin: '5%',
                          borderRadius: 5,
                        }}
                        titleStyle={{
                            fontFamily: theme.font.latoRegular,
                          fontSize: getFontSize(15),
                          color: 'white',
                        }}
                        buttonStyle={{
                          height: '100%',
                          width: '100%',
                          backgroundColor: theme.color.primary,
                          borderColor: theme.color.primary,
                          borderRadius: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    )
  }
}

class AddressCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedAddress: false
    }
  }

  render () {
    const {data, selectedAddress , seletedID} = this.props
    return (
      <>
      <View style={{paddingHorizontal: '6%',}}>
        <TouchableOpacity
          onPress={()=>selectedAddress(data.id)}
          style={{
            backgroundColor: seletedID == data.id ? theme.color.cardBg: '#FFFFFF',
            marginBottom: '5%',
            borderRadius: 10,
            borderWidth: seletedID == data.id ? 0 : 0.5,
            borderColor: theme.color.darkGray
            
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: '5%',
            }}>
           {data.type =="home" ? (
             <Text>
             {' '}
             {setVectorIcon({
               type: 'Feather',
               name: 'home',
               size: getFontSize(16),
               color:seletedID == data.id ?  theme.color.primary : theme.color.black,
             })}
           </Text>
           ) : (
            <Text>
            {' '}
            {setVectorIcon({
              type: 'MaterialCommunityIcons',
              name: 'office-building',
              size: getFontSize(20),
              color:seletedID == data.id ?  theme.color.primary : theme.color.black,
            })}
          </Text>
           )}
          
            <Text
              style={{
                fontSize: getFontSize(14),
                color:seletedID == data.id ?  theme.color.primary :theme.color.black ,
                fontFamily: theme.font.latoBold,              
                marginLeft:data.type == "home" ? '2%' : 0,
              }}>
             {data.type == "home" ? "Home Address":" Office Address"}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: '5%',
              paddingBottom: '5%',
            }}>
            <Text
              style={{
                fontFamily: theme.font.latoBold,
                fontSize: getFontSize(14),
                color:seletedID == data.id ? theme.color.black : theme.color.darkGray,
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                fontFamily: theme.font.latoRegular,
                fontSize: getFontSize(12),
                color: theme.color.darkGray,
                marginVertical: '4%',
              }}>
              {data.mobile}
            </Text>
            <Text
              style={{
                fontFamily: theme.font.latoRegular,
                fontSize: getFontSize(11),
                color: theme.color.darkGray,
                lineHeight: 24
              }}>
              {data.address}
            </Text>
          </View>
        </TouchableOpacity>
        </View>
      </>
    )
  }
}

class CartProduct extends Component {
  constructor (props) {
    super(props)
    this.state = {
      qty: 1,
    }
  }

  render () {
    const {data} = this.props
    return (
      <>
      <View style={{
        paddingHorizontal: '5%',
      }}>
        <View
          style={{        
            width: '100%',
            alignSelf: 'center',
            marginTop: '3%',           
           backgroundColor: theme.color.cardBg,
            borderRadius: 10,            
            paddingHorizontal: '5%',
            paddingVertical: '3%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '5%',
           
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowRadius: 10,
            shadowOpacity: 0.1,
            elevation: 5,
            borderRadius: 5,
          }}>
          <View
            style={{
              width: getResWidth(80),             
              height: getResHeight(130),
              // backgroundColor: 'white',
              borderRadius: 10,
              overflow: 'hidden',
             padding :"4%"
            }}>
            {data.renderIcon}
          </View>
          <View style={{width :"62%", }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.title}>Min bag</Text>
              <TouchableOpacity>
                <Text>
                  {setVectorIcon({
                    type: 'MaterialIcons',
                    name: 'delete-outline',
                    size: getFontSize(22),
                    color: 'red',
                  })}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width :" 90%",
                flexDirection: 'row',
                marginVertical: '3%',
                justifyContent: 'space-between'
              }}>
              <Text
                style={{
                  fontSize: getFontSize(14),
                  color: theme.color.black,
                  fontFamily: theme.font.latoBold
                }}>
                ₹ 420.00/-
              </Text>
              <Text
                style={{
                  fontSize: getFontSize(14),
                  color: theme.color.darkGray,
                  textDecorationLine: 'line-through',
                  fontFamily: theme.font.regular,                
                }}>
                ₹ 500/-
              </Text>
            </View>
            <Text
              style={{
                fontSize: getFontSize(14),
                color: theme.color.green,
                fontFamily: theme.font.latoBold,
              }}>
              In Stock
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: '3%'
              }}>
              <Text style={styles.title}>Qty</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: '5%',
                  width: getResWidth(90),
                  backgroundColor: 'white',
                  justifyContent: 'space-between',
                  paddingHorizontal: '6%',
                  paddingVertical: '2%',
                  borderRadius: 5,
                  marginVertical: '3%',
                }}>
                <TouchableOpacity
                  disabled={this.state.qty == 1 ? true : false}
                  onPress={() => {
                    if (this.state.qty == 1) {
                      setQty(1)
                    } else {
                      this.setState({qty: this.state.qty - 1})
                    }
                  }}>
                  <Text>
                    {setVectorIcon({
                      type: 'Feather',
                      name: 'minus',
                      size: getFontSize(18),
                      color: theme.color.darkGray,
                    })}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: getFontSize(14),
                    color: theme.color.black,
                    fontFamily: theme.font.latoBold,
                  }}>
                  {this.state.qty}
                </Text>
                <TouchableOpacity
                  onPress={() => this.setState({qty: this.state.qty + 1})}>
                  <Text>
                    {' '}
                    {setVectorIcon({
                      type: 'Entypo',
                      name: 'plus',
                      size: getFontSize(18),
                      color: theme.color.darkGray,
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: getFontSize(11),
                color: theme.color.darkGray,
                fontFamily: theme.font.latoRegular,
              }}>
              Free 15 Days Return Policy
            </Text>
          </View>
        </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: getFontSize(15),
    color: theme.color.black,
    fontFamily: theme.font.latoBold
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '3%',
  },
  LeftText: {
    fontSize: getFontSize(13),
    color: theme.color.darkGray,
    fontFamily: theme.font.latoRegular,
  },
  RightText: {
    fontSize: getFontSize(13),    
    fontFamily: theme.font.latoBold,
  },
  total: {
    fontSize: getFontSize(13),   
    fontFamily: theme.font.latoBold,
    color: theme.color.black,
  },
})

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
