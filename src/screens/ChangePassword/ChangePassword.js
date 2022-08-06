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
  oldPassword: Yup.string()
  .min(
    8,
    'Please enter valid password!',
  )
  .matches(
    /[A-Z]+/,
    'Please enter valid password!',
  )
  // .matches(/[@$!%*#?&]+/, 'Password has special characters.')
  .matches(
    /\d+/,
    'Please enter valid password!',
  ),
  newPassword: Yup.string()
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
cNewPassword: Yup.string()
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
  .when('newPassword', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('newPassword')],
      'Both Password need to be the same.',
    ),
  }),
})

export class ChangePassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID: 0,
      isWAN: false,
    }
  }

  render () {
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
          title={'Change Password'}
        />

        <View
          style={{
            backgroundColor: 'white',  
            flex:1    
          }}>
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              cNewPassword: '',
            }}
            validationSchema={LoginSchema}
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
                      paddingHorizontal: '6%',
                      marginTop: '10%',
                    }}>
                    <View
                      style={{
                        marginBottom: '5%',
                      }}>
                      <TextInput
                        value={values.oldPassword}
                       placeholderTextColor={theme.color.darkGray}
                        placeholder='Old Password*'
                        onFocus={() => setFieldTouched('oldPassword', true)}
                        onChangeText={text => setFieldValue('oldPassword', text)}
                        style={{
                          paddingRight: '5%',
                          fontSize: getFontSize(14),
                           fontFamily: theme.font.latoRegular,
                         
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                      {touched.oldPassword && errors.oldPassword && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'red',
                            marginTop: '2%',
                          }}>
                          {errors.oldPassword}
                        </Text>
                      )}
                    </View>
                    <View
                      style={{
                        marginBottom: '5%',
                        width: '100%',
                      }}>
                      <TextInput
                       placeholderTextColor={theme.color.darkGray}
                       placeholder='New Password*'
                        value={values.newPassword}
                        onFocus={() => setFieldTouched('newPassword', true)}
                        onChangeText={text => setFieldValue('newPassword', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(14),
                           fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                      {touched.newPassword && errors.newPassword && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'red',
                            marginTop: '2%',
                          }}>
                          {errors.newPassword}
                        </Text>
                      )}
                    </View>
                    <View
                      style={{
                        marginBottom: '5%',
                        width: '100%',
                      }}>
                      <TextInput
                        value={values.cNewPassword}                       
                       placeholderTextColor={theme.color.darkGray}
                        placeholder='Confirm New Password*'
                        onFocus={() => setFieldTouched('cNewPassword', true)}
                        onChangeText={text => setFieldValue('cNewPassword', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(14),
                           fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                       {touched.cNewPassword && errors.cNewPassword && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'red',
                            marginTop: '2%',
                          }}>
                          {errors.cNewPassword}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 0,
                    width: '100%',                  
                  }}>
                  <Button
                    onPress={() => {
                      //   this.props.navigation.navigate('OrderConfirm')
                    }}
                    title='Change Password'
                    type='outline'
                    iconContainerStyle={{}}
                    iconPosition={'right'}
                    containerStyle={{
                      width: '80%',
                      alignSelf: 'center',
                      height: getResHeight(40),
                      backgroundColor: !touched.oldPassword || errors.message || !touched.newPassword || errors.newPassword || !touched.cNewPassword || errors.cNewPassword || values.cNewPassword <8 ? theme.color.disabled:theme.color.primary,
                      margin: '5%',
                      borderRadius: 5,
                      marginTop: '8%',
                    }}
                    disabledStyle={{
                      backgroundColor: theme.color.disabled
                    }}
                    disabled={!touched.oldPassword || errors.message || !touched.newPassword || errors.newPassword || !touched.cNewPassword || errors.cNewPassword || values.cNewPassword <8}
                    titleStyle={{
                        fontFamily: theme.font.latoRegular,
                      fontSize: getFontSize(15),
                      color: !touched.oldPassword || errors.message || !touched.newPassword || errors.newPassword || !touched.cNewPassword || errors.cNewPassword || values.cNewPassword <8  ? "white" : 'white',
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

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
