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
import {Button, Input, CheckBox} from 'react-native-elements'
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
import * as Yup from 'yup'
const LoginSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^[0-9]+$/, 'Only number are allowed for this field')
    .min(10, 'Number is now below 10 digits!')
    .max(10, 'Number is now above 10 digits!')
    .required('Mobile Number is required!'),
  password: Yup.string().required('Password is required!'),
})

export class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID: 0,
      isWAN: false,
      onPressColor: '#FFFFFF',
      onPressColor2: '#FFFFFF',
      setting: false,
    }
  }

  render () {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <View style={{}}>
          <View
            style={{
              paddingHorizontal: '6%',
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10%',
                padding: '6%',
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
              }}>
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 50,
                  borderWidth: 1,
                  overflow: 'hidden',
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                  source={require('../../../src/assets/img/profile.jpg')}
                />
              </View>

              <Text
                style={{
                  fontSize: getFontSize(17),
                  fontFamily: theme.font.latoBold,
                  color: theme.color.black,
                  marginTop: '4%',
                }}>
                David Beckham
              </Text>
              <Text
                style={{
                  fontSize: getFontSize(12),
                  fontFamily: theme.font.latoRegular,
                  color: theme.color.darkGray,
                  letterSpacing: 0.6,
                  marginTop: '3%',
                }}>
                david@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              marginBottom: '8%',
              padding: '6%',
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              backgroundColor: '#FFFFFF',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EditProfile')
              }}
              style={{
                marginVertical: '5%',
                paddingBottom: '5%',
                borderBottomWidth: 0.5,
                borderBottomColor: theme.color.darkGray,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 26,
                      height: 26,
                      overflow: 'hidden',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../src/assets/img/user.png')}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: getFontSize(14),
                      fontFamily: theme.font.regular,
                      color: theme.color.darkGray,
                      marginLeft: '13%',
                    }}>
                    Profile
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('EditProfile')}>
                  <Text>
                    {' '}
                    {setVectorIcon({
                      type: 'Entypo',
                      name: 'chevron-right',
                      size: getFontSize(20),
                      color: theme.color.primary,
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyOrders')
              }}
              style={{
                paddingBottom: '5%',
                borderBottomWidth: 0.5,
                borderBottomColor: theme.color.darkGray,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      overflow: 'hidden',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../src/assets/img/shoping_bag.png')}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: getFontSize(14),
                      fontFamily: theme.font.regular,
                      color: theme.color.darkGray,
                      marginLeft: '9%',
                    }}>
                    My Orders
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MyOrders')}>
                  <Text>
                    {' '}
                    {setVectorIcon({
                      type: 'Entypo',
                      name: 'chevron-right',
                      size: getFontSize(20),
                      color: theme.color.primary,
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyCart')
              }}
              style={{
                marginVertical: '5%',
                paddingBottom: '5%',
                borderBottomWidth: 0.5,
                borderBottomColor: theme.color.darkGray,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      overflow: 'hidden',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../src/assets/img/cart.png')}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: getFontSize(14),
                      fontFamily: theme.font.regular,
                      color: theme.color.darkGray,
                      marginLeft: '11%',
                    }}>
                    My Cart
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MyCart')}>
                  <Text>
                    {' '}
                    {setVectorIcon({
                      type: 'Entypo',
                      name: 'chevron-right',
                      size: getFontSize(20),
                      color: theme.color.primary,
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({setting: !this.state.setting})
              }}
              style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      overflow: 'hidden',
                      paddingLeft: '2%',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../src/assets/img/setting.png')}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: getFontSize(14),
                      fontFamily: theme.font.regular,
                      color: theme.color.darkGray,
                      marginLeft: '12%',
                    }}>
                    Settings
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({setting: !this.state.setting})
                  }}>
                  <Text>
                    {this.state.setting !== false ? (
                      <>
                        <Text>
                          {setVectorIcon({
                            type: 'Entypo',
                            name: 'chevron-down',
                            size: getFontSize(20),
                            color: theme.color.primary,
                          })}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text>
                          {setVectorIcon({
                            type: 'Entypo',
                            name: 'chevron-right',
                            size: getFontSize(20),
                            color: theme.color.primary,
                          })}
                        </Text>
                      </>
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            {this.state.setting !== false && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ChangePassword')
                    this.setState({setting: !this.state.setting})
                  }}
                  style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{}}>
                      <Text
                        style={{
                          fontSize: getFontSize(14),
                          fontFamily: theme.font.regular,
                          color: theme.color.darkGray,
                          marginLeft: '20%',
                          marginTop: '8%',
                          marginBottom: '5%',
                        }}>
                        Change Password
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('DeactivateAccount')
                    this.setState({setting: !this.state.setting})
                  }}
                  style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{}}>
                      <Text
                        style={{
                          fontSize: getFontSize(14),
                          fontFamily: theme.font.regular,
                          color: theme.color.darkGray,
                          marginLeft: '19%',
                        }}>
                        Deactivate Account
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}

            <View
              style={{               
              marginTop: this.state.setting !== false ?  "10%" :'20%' 
              }}>
              <TouchableOpacity
              style={{flexDirection:"row",alignItems:"center",justifyContent: 'center'}}
                  // onPress={() => this.props.navigation.navigate('MyCart')}
                  >
                  <Text>
                    {' '}
                    {setVectorIcon({
                      type: 'MaterialCommunityIcons',
                      name: 'logout',
                      size: getFontSize(20),
                      color: theme.color.primary,
                    })}
                  </Text>
                  <Text style={{
                    fontSize: getFontSize(14),
                    fontFamily: theme.font.latoBold,
                    color: theme.color.darkGray,
                    marginLeft: '3%'
                  }}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
