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
export class PlaceOrder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID: 0,
    }
  }

  render () {
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
        id: 2,
        type: 'office',
        name: 'Jenny Wilson',
        mobile: '+91 98765 43210',
        address:
          'Building No,66, 78th Main Road, 100ft Road, Indiranagar, Bangalore 123456',
      },
      {
        id: 3,
        type: 'office',
        name: 'Jenny Wilson',
        mobile: '+91 98765 43210',
        address:
          'Building No,66, 78th Main Road, 100ft Road, Indiranagar, Bangalore 123456',
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
          title={'Address'}
        />

        <CustomUIModal
          isShow={this.state.showmodal}
          onRequestClose={() => this.setState({showmodal: false})}
          outsidePress={() => this.setState({showmodal: false})}
          leftText={'Saved Address'}
          rightText={'Add New Addresss'}
          textOnPress={() => {
            this.props.navigation.navigate('AddNewAddress')
          }}
          customUIRender={
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  marginBottom: '25%',
                  maxHeight: SCREENHEIGHT - 150,               
                }}>
                <FlatList
                  data={addressData}
                  keyExtractor={item => item}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <AddressCard
                          data={item}
                          seletedID={this.state.seletedID}
                          selectedAddress={id => {
                            this.setState({seletedID: id})
                          }}
                        />
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
                  height: getResHeight(100),
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: theme.color.dimPrimary,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}>
                <Button
                  onPress={() => {
                    this.setState({showmodal: false})
                    // this.props.navigation.navigate("PlaceOrder")
                  }}
                  title='Continue'
                  type='outline'
                  iconContainerStyle={{}}
                  iconPosition={'right'}
                  containerStyle={{
                    width: '80%',
                    alignSelf: 'center',
                    height: getResHeight(45),
                    backgroundColor: theme.color.primary,                 
                    borderRadius: 3,
                  }}
                  titleStyle={{
                      fontFamily: theme.font.latoRegular,
                    fontSize: getFontSize(18),
                    color: 'white',
                  }}
                  buttonStyle={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: theme.color.primary,
                    borderColor: theme.color.primary,
                    borderRadius: 3,
                  }}
                />
              </View>
            </>
          }
        />

        <View
          style={{
            backgroundColor: 'white',
            // marginBottom:"50%"
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
                    paddingHorizontal: '6%',
                  }}>
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
                  }}>Delivery Address</Text>

                    <View
                      style={{
                        backgroundColor: theme.color.cardBg,
                       marginBottom: '5%',
                        marginTop: '4%',
                        borderRadius: 10,
                       borderColor: theme.color.darkGray,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: '5%',
                        }}>
                        <Text>
                          {' '}
                          {setVectorIcon({
                            type: 'Feather',
                            name: 'home',
                            size: getFontSize(16),
                            color: theme.color.primary,
                          })}
                        </Text>                        
                        <Text
                          style={{
                            fontSize: getFontSize(14),
                            color: theme.color.primary,
                            fontFamily: theme.font.latoBold,
                            marginLeft: '2%',
                          }}>
                          Home Address
                          {/* {data.type == 'home' ? 'Home Address' : ' Office Address'} */}
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingHorizontal: '5%',
                          paddingBottom: '5%',
                        }}>
                        <Text
                          style={{
                            fontSize: getFontSize(13),
                            fontFamily: theme.font.latoBold,
                            color: theme.color.black,
                          }}>
                          {/* {data.name} */}
                          Ramesh Marandi
                        </Text>
                        <Text
                          style={{
                            fontFamily: theme.font.latoRegular,
                            fontSize: getFontSize(12),
                            color: theme.color.darkGray,
                            marginVertical: '4%',
                          }}>
                          +91 7887706698
                          {/* {data.mobile} */}
                        </Text>
                        <Text
                          style={{
                            fontFamily: theme.font.latoRegular,
                            fontSize: getFontSize(12),
                            color: theme.color.darkGray,
                            lineHeight: 24,
                          }}>
                          'Building No,66, 78th Main Road, 100ft Road,
                          Indiranagar, Bangalore 123456',                        
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingHorizontal: '6%',
                          paddingBottom: '5%',
                        }}>
                        <Button
                          onPress={() => {
                           this.props.navigation.navigate("ChangeAddress")
                          }}
                          title='Change Or Add Address'
                          type='outline'
                          iconContainerStyle={{}}
                          iconPosition={'right'}
                          containerStyle={{
                            width: '100%',
                            alignSelf: 'center',
                            height: getResHeight(40),
                            backgroundColor: theme.color.primary,                           
                            borderRadius: 5,
                          }}
                          titleStyle={{
                            fontFamily: theme.font.latoRegular,
                           fontSize: getFontSize(15),
                            color: theme.color.primary,
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
                  </View>

                  {/* Bill Details */}
                  <View
                    style={{
                      width: '100%',                     
                      marginBottom: '60%',
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
                </ScrollView>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: getResHeight(135),
                    alignItems: 'center',                  
                    backgroundColor: theme.color.dimPrimary,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}>
                  <Button
                    onPress={() => {
                      this.props.navigation.navigate('OrderConfirm')
                    }}
                    title='Place Order'
                    type='outline'
                    iconContainerStyle={{}}
                    iconPosition={'right'}
                    containerStyle={{
                      width: '80%',
                      alignSelf: 'center',
                      height: getResHeight(40),
                      backgroundColor: theme.color.primary,                      
                      borderRadius: 5,
                      marginTop: '8%',
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
      selectedAddress: false,
    }
  }

  render () {
    const {data, selectedAddress, seletedID} = this.props
    return (
      <>
        <View style={{paddingHorizontal: '6%'}}>
          <TouchableOpacity
            onPress={() => selectedAddress(data.id)}
            style={{
              backgroundColor:
                seletedID == data.id ? theme.color.cardBg : '#FFFFFF',
              marginBottom: '5%',
              borderRadius: 10,
              borderWidth: seletedID == data.id ? 0 : 0.5,
              borderColor: theme.color.darkGray,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: '5%',
              }}>
              {data.type == 'home' ? (
                <Text>
                  {' '}
                  {setVectorIcon({
                    type: 'Feather',
                    name: 'home',
                    size: getFontSize(23),
                    color:
                      seletedID == data.id
                        ? theme.color.primary
                        : theme.color.black,
                  })}
                </Text>
              ) : (
                <Text>
                  {' '}
                  {setVectorIcon({
                    type: 'MaterialCommunityIcons',
                    name: 'office-building',
                    size: getFontSize(30),
                    color:
                      seletedID == data.id
                        ? theme.color.primary
                        : theme.color.black,
                  })}
                </Text>
              )}

              <Text
                style={{
                  fontSize: getFontSize(18),
                  color:
                    seletedID == data.id
                      ? theme.color.primary
                      : theme.color.black,
                  fontWeight: '600',
                  marginLeft: '2%',
                }}>
                {data.type == 'home' ? 'Home Address' : ' Office Address'}
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: '5%',
                paddingBottom: '5%',
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: getFontSize(18),
                  color: theme.color.darkGray,
                }}>
                {data.name}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: getFontSize(16),
                  color: theme.color.darkGray,
                  marginVertical: '4%',
                }}>
                {data.mobile}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: getFontSize(16),
                  color: theme.color.darkGray,
                  lineHeight: 24,
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

const styles = StyleSheet.create({
  title: {
    fontSize: getFontSize(16),
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
    fontSize: getFontSize(14),   
    fontFamily: theme.font.latoBold,
    color: theme.color.black,
  },
})

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder)
