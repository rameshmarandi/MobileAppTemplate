import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native'
// import {TextTrans, BtnTrans} from '../../../i18translater'
import {Formik} from 'formik'
import {connect} from 'react-redux'
import {Button, Input} from 'react-native-elements'

import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive'
import theme from '../../theme'
import * as Yup from 'yup'

import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
const registrationSchema = Yup.object().shape({
  phoneNo: Yup.string()
    .matches(/^[0-9]+$/, 'Only number are allowed for this field')
    .min(10, 'Number is now below 10 digits!')
    .max(10, 'Number is now above 10 digits!')
    .required('Mobile number is required!'),
  password: Yup.string()
    .min(
      8,
      'Please enter at least 8 Character, 1 uppercase character and 1 number',
    )
    .matches(
      /[A-Z]+/,
      'Please enter at least 8 Character, 1 uppercase character and 1 number',
    )
    // .matches(/[@$!%*#?&]+/, 'Password has special characters.')
    .matches(
      /\d+/,
      'Please enter at least 8 Character, 1 uppercase character and 1 number',
    ),
  cPassword: Yup.string()
    .min(
      8,
      'Please enter at least 8 Character, 1 uppercase character and 1 number',
    )
    .matches(
      /[A-Z]+/,
      'Please enter at least 8 Character, 1 uppercase character and 1 number',
    )
    // .matches(/[@$!%*#?&]+/, 'Password has special characters.')
    .matches(
      /\d+/,
      'Please enter at least 8 Character, 1 uppercase character and 1 number',
    )
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both Password need to be the same.',
      ),
    }),
})

export class AuthChangePassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      passIcon: 'eye',
      showPassword: false,
      ConfirmShowPassword: false,
      LoaderVisible: false,
      NextRScreen: false,
    }
  }

  render () {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingTop: '15%',
              }}>
              <View
                style={{
                  paddingHorizontal: '6%',
                  marginTop: '15%',
                  marginBottom: '10%',
                }}>
                <Text
                  style={{
                    fontSize: getFontSize(18),
                    fontFamily: theme.font.latoBold,
                    color: theme.color.black,
                  }}>
                  Change Password
                </Text>
              </View>
              <Formik
                initialValues={{phoneNo: '', password: ''}}
                validationSchema={registrationSchema}
                onSubmit={async values => {
                  this.handleLogin(values.phoneNo, values.password)
                }}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  setFieldValue,
                  setFieldTouched,
                  errors,
                  touched,
                  isValid,
                }) => (
                  <>
                    <View
                      style={{
                        flex: 1,
                        width: SCREENWIDTH - 50,
                        alignSelf: 'center',
                      }}>
                      <View
                        style={{
                          marginBottom: '5%',
                          width: '100%',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: getFontSize(14),
                              fontFamily: theme.font.medium,
                              marginBottom: '3%',
                              color: '#666666',
                              fontWeight: '400',
                            }}>
                            Password
                          </Text>
                        </View>
                        <View style={{}}>
                          <TextInput
                            secureTextEntry={
                              this.state.showPassword !== true ? true : false
                            }
                            value={values.password}
                            onFocus={() => setFieldTouched('password', true)}
                            onChangeText={text =>
                              setFieldValue('password', text)
                            }
                            style={{
                              paddingRight: '13%',
                              fontSize: getFontSize(14),
                              borderWidth: 1,
                              height: getResHeight(45),
                              borderRadius: 5,
                              borderColor: theme.color.inputBorder,
                              paddingLeft: '2.5%',
                              color: '#000',
                            }}
                          />
                          {touched.password && errors.password && (
                            <Text
                              style={{
                                fontSize: 12,
                                color: 'red',
                                marginTop: '2%',
                              }}>
                              {errors.password}
                            </Text>
                          )}
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({
                                showPassword: !this.state.showPassword,
                              })
                            }
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              position: 'absolute',
                              right: 10,
                              top: 12,
                            }}>
                            {this.state.showPassword == false ? (
                              <>
                                <MaterialIcons
                                  name={'visibility'}
                                  size={getFontSize(23)}
                                  color={theme.color.darkGray}
                                />
                              </>
                            ) : (
                              <>
                                <MaterialIcons
                                  name={'visibility-off'}
                                  size={getFontSize(23)}
                                  color={theme.color.darkGray}
                                />
                              </>
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View
                        style={{
                          marginBottom: '3%',
                          width: '100%',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: getFontSize(14),
                              fontFamily: theme.font.medium,
                              marginBottom: '3%',
                              color: '#666666',
                              fontWeight: '400',
                            }}>
                            Confirm Password
                          </Text>
                        </View>

                        <View style={{}}>
                          <TextInput
                            secureTextEntry={
                              this.state.ConfirmShowPassword !== true
                                ? true
                                : false
                            }
                            value={values.cPassword}
                            onFocus={() => setFieldTouched('cPassword', true)}
                            onChangeText={text =>
                              setFieldValue('cPassword', text)
                            }
                            style={{
                              paddingRight: '13%',
                              fontSize: getFontSize(14),
                              borderWidth: 1,
                              height: getResHeight(45),
                              borderRadius: 5,
                              borderColor: theme.color.inputBorder,
                              paddingLeft: '2.5%',
                              color: '#000',
                            }}
                          />
                          {touched.cPassword && errors.cPassword && (
                            <Text
                              style={{
                                fontSize: 12,
                                color: 'red',
                                marginTop: '2%',
                              }}>
                              {errors.cPassword}
                            </Text>
                          )}
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({
                                ConfirmShowPassword: !this.state
                                  .ConfirmShowPassword,
                              })
                            }
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              position: 'absolute',
                              right: 10,
                              top: 12,
                            }}>
                            {this.state.ConfirmShowPassword == false ? (
                              <>
                                <MaterialIcons
                                  name={'visibility'}
                                  size={getFontSize(23)}
                                  color={'#666666'}
                                />
                              </>
                            ) : (
                              <>
                                <MaterialIcons
                                  name={'visibility-off'}
                                  size={getFontSize(23)}
                                  color={'#666666'}
                                />
                              </>
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>

                      <Button
                        title='Next'
                        type='solid'
                        // icon={setVectorIcon({
                        //   type: 'AntDesign',
                        //   name: 'arrowright',
                        //   size: getFontSize(22),
                        //   color:
                        //     !touched.MobileNo ||
                        //     errors.MobileNo ||
                        //     this.state.pressLogin
                        //       ? '#AAAAAA'
                        //       : 'white',
                        //   style: {
                        //     marginLeft: 5,
                        //   },
                        // })}
                        // iconRight={true}
                        onPress={() => this.props.navigation.navigate('Home')}
                        // disabled={
                        //   !touched.MobileNo ||
                        //   errors.MobileNo ||
                        //   this.state.pressLogin
                        // }
                        disabledStyle={{
                          backgroundColor: 'rgba(235, 163, 0, .2)',
                        }}
                        containerStyle={[
                          {
                            width: '100%',
                            height: getResHeight(40),
                            marginTop: '5%',
                            overflow: 'hidden',
                            opacity: 0.9,
                          },
                          !this.state.pressLogin && {elevation: 0},
                        ]}
                        titleStyle={{
                          fontFamily: theme.font.latoRegular,
                          fontSize: getFontSize(16),
                          color: 'white',
                        }}
                        buttonStyle={{
                          width: '100%',
                          height: getResHeight(40),
                          backgroundColor: '#62C9C9',
                          borderRadius: 8,
                        }}
                      />
                      {/* Don't have an Account Section */}
                      <View
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginTop: '5%',
                        }}>
                        <Text
                          style={{
                            fontSize: getFontSize(14),
                            fontFamily: theme.font.medium,
                            color: '#666666',
                            fontWeight: '400',
                          }}>
                          Don't have account?{' '}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate('Registration')
                          }}>
                          <Text
                            style={{
                              fontSize: getFontSize(14),
                              fontFamily: theme.font.medium,
                              fontWeight: '600',
                              color: '#FF86A0',
                              textDecorationLine: 'underline',
                            }}>
                            Register
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          marginTop: '5%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            backgroundColor: '#0000001F',
                            width: '100%',
                            height: getResHeight(0.8),
                            position: 'absolute',
                          }}
                        />
                        <Text
                          style={{
                            color: '#5E5E5E',
                            backgroundColor: 'white',
                            fontSize: getFontSize(14.5),
                            fontFamily: theme.font.semiBold,
                          }}>
                          {' '}
                          Or
                        </Text>
                      </View>
                      {/* Login With Google  */}
                      <TouchableOpacity
                        style={{
                          width: '60%',
                          alignSelf: 'center',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 20,
                          marginTop: '8%',
                        }}>
                        <View
                          style={{
                            borderWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderColor: '#2962ff',
                            borderRadius: 5,
                          }}>
                          <View
                            style={{
                              height: getResHeight(40),
                              width: getResWidth(40),
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#FFFFFF',
                              borderRadius: 5,
                            }}>
                            <Image
                              style={{
                                height: getResHeight(30),
                                width: getResWidth(20),
                              }}
                              source={require('../../assets/img/google_icon.png')}
                            />
                          </View>
                          <View
                            style={{
                              height: getResHeight(40),
                              backgroundColor: '#2962ff',
                              justifyContent: 'center',
                              alignItems: 'center',
                              paddingHorizontal: '5%',
                              borderRightRadius: 5,
                            }}>
                            <Text
                              style={{
                                fontSize: getFontSize(13),
                                marginBottom: '3%',
                                color: '#FFFFFF',
                                fontFamily: theme.font.latoBold,
                              }}>
                              Signup with Google
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AuthChangePassword)
