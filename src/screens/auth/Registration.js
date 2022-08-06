import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native'
import * as AuthAPI from '../../features/auth/authAPI'
import RNPaper from '../../components/PaperComponents'
import {Formik} from 'formik'
import {connect} from 'react-redux'
import {Button, Input} from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive'
import theme from '../../theme'
import * as Yup from 'yup'
const registrationSchema = Yup.object().shape({
  fName: Yup.string()
    .required('First name is required!')
    .min(3, 'Minium 3 characters are required'),
  lName: Yup.string()
    .required('Last name is required!')
    .min(3, 'Minium 3 characters are required'),
  email: Yup.string()
    .required('Email is required!')
    .email('Please enter valid email'),

    mobile: Yup.string()
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

export class Registration extends Component {
  constructor (props) {
    super(props)
    this.state = {
      passIcon: 'eye',
      showPassword: false,
      ConfirmShowPassword: false,
      LoaderVisible: false,
      NextRScreen: false,
      loader: false
    }
  }

  render () {
    const genderData = ['Male', 'Female'].map(el => {
      return {label: el, value: el}
    })

    return (
      <>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
          }}>
          <ScrollView style={{paddingBottom: '25%'}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{}}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingVertical: '5%',
                  }}>
                  {this.state.NextRScreen !== false ? (
                    <>
                      <TouchableOpacity
                        onPress={() => {
                          this.state.NextRScreen == true
                            ? this.setState({NextRScreen: false})
                            : null
                        }}
                        style={{
                          position: 'absolute',
                          top: 15,
                          left: 15,
                        }}>
                        <Entypo
                          name='chevron-left'
                          size={getFontSize(35)}
                          color={theme.color.darkGray}
                        />
                      </TouchableOpacity>
                    </>
                  ) : null}

                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingBottom: '2%',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(18),
                        fontFamily: theme.font.latoBold,
                        color: '#000',
                      }}>
                      Register
                    </Text>
                    <Text
                      style={{
                        width: '80%',
                        fontSize: getFontSize(13),
                        fontFamily: theme.font.latoRegular,
                        marginTop: '2%',
                        marginBottom: '3%',
                        color: '#666666',
                        lineHeight: 26,
                        textAlign: 'center',
                      }}>
                      By signing up, you agree to the{' '}
                      <Text
                        style={{
                          textDecorationLine: 'underline',
                          // color: '#1255FF',
                        }}>
                        Terms of use
                      </Text>{' '}
                      and
                      <Text
                        style={{
                          textDecorationLine: 'underline',
                          // color: '#1255FF',
                        }}>
                        {' '}
                        Privacy Policy
                      </Text>
                    </Text>
                  </View>
                  <Formik
                    initialValues={{
                      fName: '',
                      lName: '',
                      email: '',
                      mobile: '',
                      password: '',
                      cPassword: '',
                      otp: '',
                      Gender: 'Male',
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={async values => {
                      try{
                        this.setState({loader: true})
                        const payload = {
                          firstname:values.fName,
                          lastname:values.lName,
                          email:values.email,
                          mobile: values.mobile,
                          password:values.password,
                          otp:values.otp,                        
                        }
                        const res = await this.props.RegistrationAPI(payload)
                        await AuthAPI.setUserSession(true)
                        console.tron.log("Registration successfulres atfront", res)
                          if(res?.payload == "success"){
                           this.props.navigation.navigate("Home")
                          }
                          this.setState({loader: false})
                      }catch(e){
                        console.tron.log(e)
                      }
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
                        <ScrollView style={{}}>
                          <View
                            style={{
                              flex: 1,
                              width: SCREENWIDTH - 50,
                              alignSelf: 'center',
                            }}>
                            {this.state.NextRScreen == false ? (
                              <>
                                <View
                                  style={{
                                    marginBottom: '3%',
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: getFontSize(14),
                                      fontFamily: theme.font.medium,
                                      marginBottom: '3%',
                                      color: '#666666',
                                      fontWeight: '400',
                                    }}>
                                    First Name
                                  </Text>
                                  <TextInput
                                    value={values.fName}
                                    onFocus={() =>
                                      setFieldTouched('fName', true)
                                    }
                                    onChangeText={text =>
                                      setFieldValue('fName', text)
                                    }
                                    style={{
                                      paddingRight: '5%',
                                      fontSize: getFontSize(14),
                                      borderWidth: 1,
                                      height: getResHeight(45),
                                      borderRadius: 5,
                                      borderColor: theme.color.inputBorder,
                                      paddingLeft: '2.5%',
                                      color: '#000',
                                    }}
                                  />
                                  {touched.fName && errors.fName && (
                                    <Text
                                      style={{
                                        fontSize: 12,
                                        color: 'red',
                                        marginTop: '2%',
                                      }}>
                                      {errors.fName}
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
                                      fontFamily: theme.font.medium,
                                      marginBottom: '3%',
                                      color: '#666666',
                                      fontWeight: '400',
                                    }}>
                                    Last Name
                                  </Text>
                                  <TextInput
                                    value={values.lName}
                                    onFocus={() =>
                                      setFieldTouched('lName', true)
                                    }
                                    onChangeText={text =>
                                      setFieldValue('lName', text)
                                    }
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
                                  {touched.lName && errors.lName && (
                                    <Text
                                      style={{
                                        fontSize: 12,
                                        color: 'red',
                                        marginTop: '2%',
                                      }}>
                                      {errors.lName}
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
                                      fontFamily: theme.font.medium,
                                      marginBottom: '3%',
                                      color: '#666666',
                                      fontWeight: '400',
                                    }}>
                                    Email ID
                                  </Text>
                                  <TextInput
                                    value={values.email}
                                    onFocus={() =>
                                      setFieldTouched('email', true)
                                    }
                                    onChangeText={text =>
                                      setFieldValue('email', text)
                                    }
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
                                  {touched.email && errors.email && (
                                    <Text
                                      style={{
                                        fontSize: 12,
                                        color: 'red',
                                        marginTop: '2%',
                                      }}>
                                      {errors.email}
                                    </Text>
                                  )}
                                </View>
                                <View
                                  style={{
                                    width: '100%',
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: getFontSize(14),
                                      fontFamily: theme.font.medium,
                                      marginBottom: '3%',
                                      color: '#666666',
                                      fontWeight: '400',
                                    }}>
                                    Gender
                                  </Text>
                                  <RNPaper.Dropdown
                                    items={genderData}
                                    // inputLabel="Gender"
                                    // inputPlaceholder={'Gender'}
                                    defultItem={values.Gender}
                                    setOpen={() => {}}
                                    inputStyle={{
                                      width: '100%',
                                      height: getResHeight(45),
                                      marginRight: '1%',
                                    }}
                                    dropDownStyle={{
                                      width: '99%',
                                    }}
                                    onChangeItem={async item => {
                                      setFieldValue('Gender', item)
                                      setFieldTouched('Gender', true)
                                    }}
                                  />
                                </View>
                              </>
                            ) : (
                              <>
                                <View
                                  style={{
                                    marginBottom: '3%',
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
                                      value={values.mobile}
                                      onFocus={() =>
                                        setFieldTouched('mobile', true)
                                      }
                                      onChangeText={text =>
                                        setFieldValue('mobile', text)
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
                                    {touched.mobile && errors.mobile && (
                                      <Text
                                        style={{
                                          fontSize: 12,
                                          color: 'red',
                                          marginTop: '2%',
                                        }}>
                                        {errors.mobile}
                                      </Text>
                                    )}
                                    <TouchableOpacity
                                      onPress={async () => {
                                        try {                                          
                                          const payload = {
                                            mobile: values.mobile,                                           
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
                                      disabled={
                                        values.mobile?.length !== 10
                                          ? true
                                          : false
                                      }
                                 
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
                                          color:
                                            values.mobile?.length !== 10
                                              ? theme.color.darkGray
                                              : theme.color.primary,
                                          fontFamily: theme.font.latoBold,
                                        }}>
                                        OTP
                                      </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View
                                  style={{
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
                                      maxLength={6}
                                      onFocus={() =>
                                        setFieldTouched('otp', true)
                                      }
                                      onChangeText={text =>
                                        setFieldValue('otp', text)
                                      }
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
                                      backgroundColor: 'red',
                                    }}>
                                    <Text
                                      style={{
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
                                      Password
                                    </Text>
                                  </View>
                                  <View style={{}}>
                                    <TextInput
                                      secureTextEntry={
                                        this.state.showPassword !== true
                                          ? true
                                          : false
                                      }
                                      value={values.password}
                                      onFocus={() =>
                                        setFieldTouched('password', true)
                                      }
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
                                      onFocus={() =>
                                        setFieldTouched('cPassword', true)
                                      }
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
                                      {this.state.ConfirmShowPassword ==
                                      false ? (
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
                              </>
                            )}
                            {this.state.NextRScreen == false ? (
                              <Button

                                title={'Next'}
                                type='solid'
                                onPress={() => {
                                  this.setState({NextRScreen: true})
                                  if (this.state.NextRScreen == true) {
                                    this.props.navigation.navigate('Home')
                                  }
                                }}
                                disabled={
                                  !touched.fName || errors.fName ||
                                  !touched.lName || errors.lName ||
                                  !touched.email || errors.email ||
                                  !touched.Gender || errors.Gender
                                }
                                disabledStyle={{
                                  backgroundColor: theme.color.disabled
                                }}
                                disabledTitleStyle={{
                                  color:theme.color.dimGray
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
                                  fontSize: getFontSize(15),
                                  color:  
                                    !touched.fName || errors.fName ||
                                  !touched.lName || errors.lName ||
                                  !touched.email || errors.email ||
                                  !touched.Gender || errors.Gender? theme.color.dimGray:"white"
                             
                                }}
                                buttonStyle={{
                                  width: '100%',
                                  height: getResHeight(40),
                                  backgroundColor:   !touched.fName || errors.fName ||
                                  !touched.lName || errors.lName ||
                                  !touched.email || errors.email ||
                                  !touched.Gender || errors.Gender? theme.color.disabled:theme.color.primary,
                                  borderRadius: 8,
                                }}
                              />
                            ) : (
                              <Button
                                title={'Register'}
                                loader={this.state.loader}
                                type='solid'
                                onPress={handleSubmit}                                
                                containerStyle={[
                                  {
                                    width: '100%',
                                    height: getResHeight(40),
                                    marginTop: '5%',
                                    overflow: 'hidden',
                                    opacity: 0.9,
                                  },
                                ]}                                
                                disabledStyle={{
                                  backgroundColor: theme.color.disabled
                                }}
                                disabledTitleStyle={{
                                  color:theme.color.dimGray
                                }}
                                disabled={
                                  !touched.mobile ||
                                  errors.mobile ||
                                  !touched.otp ||
                                  errors.otp ||
                                  !touched.password ||
                                  errors.password ||
                                  !touched.cPassword ||
                                  errors.cPassword ||
                                  values.otp?.length < 4 ||
                                  values.cPassword?.length < 8
                                }
                                titleStyle={{
                                  fontFamily: theme.font.latoRegular,
                                  fontSize: getFontSize(15),
                                  color:  
                                  !touched.mobile ||
                                  errors.mobile ||
                                  !touched.otp ||
                                  errors.otp ||
                                  !touched.password ||
                                  errors.password ||
                                  !touched.cPassword ||
                                  errors.cPassword ||
                                  values.otp?.length < 4 ||
                                  values.cPassword?.length < 8? theme.color.dimGray:"white"
                             
                                }}
                                buttonStyle={{
                                  width: '100%',
                                  height: getResHeight(40),
                                  backgroundColor:   !touched.mobile ||
                                  errors.mobile ||
                                  !touched.otp ||
                                  errors.otp ||
                                  !touched.password ||
                                  errors.password ||
                                  !touched.cPassword ||
                                  errors.cPassword ||
                                  values.otp?.length < 4 ||
                                  values.cPassword?.length < 8? theme.color.disabled:theme.color.primary,
                                  borderRadius: 8,
                                }}

                                
                              />
                            )}

                            <View
                              style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginTop: '6%',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  marginBottom: '3%',
                                }}>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.state.NextRScreen == true
                                      ? this.setState({NextRScreen: false})
                                      : null
                                  }}
                                  style={{
                                    width: '20%',
                                    borderRadius: 10,
                                    height: 5,
                                    backgroundColor:
                                      this.state.NextRScreen == false
                                        ? theme.color.pink
                                        : '#DCDCDC',
                                  }}
                                />
                                <TouchableOpacity
                                  onPress={() => {
                                    this.state.NextRScreen == false
                                      ? this.setState({NextRScreen: false})
                                      : null
                                  }}
                                  disabled={
                                    this.state.NextRScreen == false ||
                                    this.state.NextRScreen == true
                                      ? true
                                      : false
                                  }
                                  style={{
                                    width: '20%',
                                    borderRadius: 10,
                                    marginLeft: '3%',
                                    height: 5,
                                    backgroundColor:
                                      this.state.NextRScreen == true
                                        ? theme.color.pink
                                        : '#DCDCDC',
                                  }}
                                />
                              </View>

                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginVertical: '3%',
                                }}>
                                <Text
                                  style={{
                                    fontSize: getFontSize(14),
                                    fontFamily: theme.font.medium,
                                    color: '#666666',
                                    fontWeight: '400',
                                  }}>
                                  Already have an account?{' '}
                                </Text>
                                <TouchableOpacity
                                  onPress={() => {
                                    this.props.navigation.navigate('Login')
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: getFontSize(14),
                                      fontFamily: theme.font.medium,
                                      fontWeight: '600',
                                      color: '#FF86A0',
                                      textDecorationLine: 'underline',
                                    }}>
                                    Login
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                            <View
                              style={{
                                width: '100%',
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
                                marginTop: '2%',
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
                        </ScrollView>
                      </>
                    )}
                  </Formik>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    RegistrationAPI: payload => dispatch(AuthAPI.RegistrationAPI(payload)),
    generateOtpAPI: payload => dispatch(AuthAPI.generateOtpAPI(payload))
  };
};

const mapStateToProps = (state, props) => {
  return {
  
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Registration)
