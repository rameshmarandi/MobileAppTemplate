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
import * as AuthAPI from '../../features/auth/authAPI'
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
    .required('Please  enter a valid mobile number (10 digits)'), 
})

export class ForgotPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPassword: false,
      loader: false
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
                  Forgot Password
                </Text>
              </View>
              <Formik
                initialValues={{phoneNo: '', otp: ''}}
                validationSchema={registrationSchema}
                onSubmit={async values => {
                    try{

                      this.setState({loader: true})
                      this.props.navigation.navigate("AuthChangePassword",{
                        mobile: values.phoneNo
                      })

                      values.phoneNo = ''                      
                      this.setState({loader: false})
                    }catch(e){console.tron.log(e)}
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
                        }}>
                        <Text
                          style={{
                            fontSize: getFontSize(14),
                            fontFamily: theme.font.latoRegular,
                            marginBottom: '3%',
                            color: '#666666',
                            
                          }}>
                          Mobile Number
                        </Text>
                        <View>
                          <TextInput
                            keyboardType={'numeric'}
                            maxLength={10}
                            value={values.phoneNo}
                            onFocus={() => setFieldTouched('phoneNo', true)}
                            onChangeText={text =>
                              setFieldValue('phoneNo', text)
                            }
                            style={{
                              fontSize: getFontSize(14),
                              borderWidth: 1,
                              height: getResHeight(45),
                              borderRadius: 5,
                              borderColor: theme.color.inputBorder,
                              paddingLeft: '2.5%',
                              color: '#000',
                            }}
                          />
                          {touched.phoneNo && errors.phoneNo && (
                            <Text
                              style={{
                                fontSize: 12,
                                color: 'red',
                                marginTop: '2%',
                              }}>
                              {errors.phoneNo}
                            </Text>
                          )}
                          <TouchableOpacity
                          disabled={values.phoneNo?.length !==10 ? true: false}
                            onPress={async() => {
                              try {                                          
                                const payload = {
                                  mobile: values.phoneNo,                                           
                                }
                                console.tron.log("Before")
                                const res = await this.props.generateOtpAPI(payload)
                                if(res.payload){
                                  alert(`Your OTP is: ${res.payload.otp}`)
                                }else{
                                  alert("Please try again..")
                                }                                          
                              } catch (error) {
                                console.tron.log(errors)
                              }
                            }}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              position: 'absolute',
                              right: 10,
                              top: 15,
                            }}>
                            <Text
                              style={{
                                fontSize: getFontSize(13),
                                color: values.phoneNo?.length !==10 ? theme.color.darkGray : theme.color.primary,
                                fontFamily: theme.font.latoBold
                              }}>
                              OTP
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View
                        style={{
                          marginBottom: '3%',
                          width: '100%',                        
                        }}>
                        <Text
                          style={{
                            fontSize: getFontSize(14),
                            fontFamily: theme.font.latoRegular,
                            marginBottom: '3%',
                            color: '#666666',
                            
                          }}>
                          Verify OTP
                        </Text>
                        <View>
                          <TextInput
                            value={values.otp}
                            keyboardType={'numeric'}
                            maxLength={4}
                            onFocus={() => setFieldTouched('otp', true)}
                            onChangeText={text => setFieldValue('otp', text)}
                            style={{
                              paddingRight: '4%',
                              fontSize: getFontSize(14),
                              borderWidth: 1,
                              height: getResHeight(45),
                              borderRadius: 5,
                              borderColor: theme.color.inputBorder,
                              paddingLeft: '2.5%',
                              color: '#000',
                            }}
                          />
                          {touched.otp && errors.otp && (
                            <Text
                              style={{
                                fontSize: 12,
                                color: 'red',
                                marginTop: '2%',
                              }}>
                              {errors.otp}
                            </Text>
                          )}                         
                        </View>
                        {/* Forgot Password Section */}
                        <TouchableOpacity
                          sylte={{
                            width: '5%',
                            marginTop: '3%',
                            backgroundColor: 'red',
                          }}>
                          <Text
                            style={{
                              position: 'absolute',
                              right : 0,
                              textAlign: 'right',
                              fontSize: getFontSize(12.5),
                              color: theme.color.pink,
                              textDecorationLine: 'underline',
                              marginTop: '2%',
                            }}>
                            Resend OTP
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <Button
                      loader={this.state.loader}
                        title='Next'
                        type='solid'                        
                        onPress={handleSubmit}                        
                        containerStyle={[
                          {
                            width: '100%',
                            height: getResHeight(40),
                            marginTop: '5%',
                            overflow: 'hidden',
                            opacity: 0.9,
                            marginTop: '18%'
                          },                       
                        ]}
                        disabled={!touched.otp || errors.otp || !touched.phoneNo || errors.phoneNo || values.otp?.length <4}
                        disabledStyle={{
                          backgroundColor: theme.color.disabled
                        }}
                        disabledTitleStyle={{
                          color:theme.color.dimGray
                        }}
                        titleStyle={{
                            fontFamily: theme.font.latoRegular,
                          fontSize: getFontSize(16),
                          color:  !touched.otp || errors.otp || !touched.phoneNo || errors.phoneNo || values.otp?.length <4?theme.color.dimGray:'white',
                        }}                        
                        buttonStyle={{
                          width: '100%',
                          height: getResHeight(40),
                          backgroundColor:  !touched.otp || errors.otp || !touched.phoneNo || errors.phoneNo || values.otp?.length <4?theme.color.disabled: theme.color.primary,
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
                            fontFamily: theme.font.latoRegular,
                            color: '#666666',
                            
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
                                textDecorationLine :"underline"
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
                      width : "60%",
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
                          height:getResHeight(40),
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
                            fontFamily: theme.font.latoBold
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

const mapDispatchToProps = dispatch => {
  return {
    generateOtpAPI: payload => dispatch(AuthAPI.generateOtpAPI(payload))
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
