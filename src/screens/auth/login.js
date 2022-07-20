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
    .min(8, 'Please enter a valid password')
    .matches(/[A-Z]+/, 'Please enter a valid password')
    // .matches(/[@$!%*#?&]+/, 'Password has special characters.')
    .matches(/\d+/, 'Please enter a valid password'),


})

export class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPassword: false,
    }
  }

  render () {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
          <KeyboardAvoidingView behavior={Platform.OS  === 'ios' ? "padding" : "height"}
          style={{flex:1}}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingTop: '15%',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5%',
            }}>
            <Text
              style={{
                marginTop: '10%',
                fontSize: getFontSize(22),
                fontFamily: theme.font.latoBold,                
                color: '#000',
              }}>
              Login
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
                    <TextInput
                      keyboardType={'numeric'}
                      maxLength={10}
                      value={values.phoneNo}
                      onFocus={() => setFieldTouched('phoneNo', true)}
                      onChangeText={text => setFieldValue('phoneNo', text)}
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
                      Password
                    </Text>
                    <View>
                    <TextInput
                      secureTextEntry={this.state.showPassword !== true
                        ? true
                        : false}
                      value={values.password}
                      onFocus={() => setFieldTouched('password', true)}
                      onChangeText={text => setFieldValue('password', text)}
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
                        showPassword: !this.state
                          .showPassword,
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
       {/* Forgot Password Section */}
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("ForgotPassword")}
                    sylte={{
                      width:"5%",
                      marginTop: '3%',
                      backgroundColor: 'red'
                    }}>
                    <Text
                      style={{
                        textAlign: 'right',
                        fontSize: getFontSize(14),
                        color: '#666666',
                        marginTop: '5%',   
                        fontFamily: theme.font.latoRegular,                     
                        
                      }}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                  </View>
               
                  
                  <Button
                    title='Login'
                    // loading={true}
                    // loadingProps={{                      
                    //   size: getFontSize(30),
                    //    color: "white"
                    //   }}
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
                    onPress={()=>{this.props.navigation.navigate("Home")}}
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
                        marginTop: '10%',
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
                      marginTop: '10%',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
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
                          fontSize: getFontSize(13),
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
                      marginTop: '7%',
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
                      }}
                    > Or</Text>
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

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
