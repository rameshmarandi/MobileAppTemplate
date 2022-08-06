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
  email: Yup.string()
  .required("Email is required!")
  .email("Please enter valid email"),
mobile: Yup.string()
.matches(/^[0-9]+$/, 'Only number are allowed for this field')
.min(10, 'Number is now below 10 digits!')
.max(10, 'Number is now above 10 digits!')
.required('Mobile number is required!'),
password: Yup.string()
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
})

export class DeactivateAccount extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID: 0,
      isWAN: false,
    }
  }

  render () {
    const declarationsData = [
      {
        id: 0,
        title: 'When you Deactivate the account',
        desc:
          'Cursus in nisl a felis massa non mi a dui. Elit lectus massa sit pulvinar a nam dui. Laoreet purus feugiat dictum lacus, dolor facilisis senectus a. Aliquam in non scelerisque scelerisque sit elementum amet. Consequat tortor malesuada aliquam ultrices ante. Faucibus risus amet sit eu, purus, justo volutpat tellus. Pharetra vitae in urna purus lorem ipsum ut.',
      },
      {
        id: 1,
        title: 'How do I Reactivate my account',
        desc:
          'Cursus in nisl a felis massa non mi a dui. Elit lectus massa sit pulvinar a nam dui. Laoreet purus feugiat dictum lacus, dolor facilisis senectus a. Aliquam in non scelerisque scelerisque sit elementum amet. Consequat tortor malesuada aliquam ultrices ante. Faucibus risus amet sit eu, purus, justo volutpat tellus. Pharetra vitae in urna purus lorem ipsum ut.',
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
          title={'Deactivate Account'}
        />

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
          }}>
          <Formik
            initialValues={{
              email: '',
              mobile: '',
              password: '',
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
              <ScrollView 
                showsVerticalScrollIndicator={false}
              style={{
                marginBottom : "20%"
              }} >
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
                      value={values.email}
                      placeholder='Email Id*'
                      placeholderTextColor={theme.color.darkGray}
                      onFocus={() => setFieldTouched('email', true)}
                      onChangeText={text => setFieldValue('email', text)}
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
                      marginBottom: '5%',
                      width: '100%',
                    }}>
                    <TextInput
                      placeholder='Mobile Number*'
                      placeholderTextColor={theme.color.darkGray}
                      value={values.mobile}
                      onFocus={() => setFieldTouched('mobile', true)}
                      onChangeText={text => setFieldValue('mobile', text)}
                      style={{
                        paddingRight: '4%',
                        fontSize: getFontSize(14),
                        borderWidth: 1,
                        height: getResHeight(45),
                        fontFamily: theme.font.latoRegular,
                        borderRadius: 5,
                        borderColor: theme.color.inputBorder,
                        paddingLeft: '5%',
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
                  </View>
                  <View
                    style={{
                      marginBottom: '5%',
                      width: '100%',
                    }}>
                    <TextInput
                      value={values.password}
                      placeholder='Enter Password*'
                      placeholderTextColor={theme.color.darkGray}
                      onFocus={() => setFieldTouched('password', true)}
                      onChangeText={text => setFieldValue('password', text)}
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
                  </View>
                </View>

                <View
                  style={{
                    width: '100%',
                    borderTopWidth: 0.8,
                    borderTopColor : theme.color.darkGray,
                    marginVertical: '4%',
                    paddingTop:"8%"
                  }}>
                  <FlatList
                    data={declarationsData}
                    renderItem={({item, index}) => {
                      return (
                        <>
                          <View style={{
                            paddingHorizontal:"6%",                           
                          }}>
                            <Text style={{
                                fontSize: getFontSize(14),
                                fontFamily: theme.font.latoBold,
                                color : theme.color.primary,
                                marginBottom:"5%"
                            }}>{item.title}</Text>
                            <Text style={{
                                fontSize: getFontSize(12.5),
                                fontFamily: theme.font.latoRegular,
                                color : theme.color.darkGray,
                                marginBottom:"5%",
                                lineHeight : 25
                               
                            }}>{item.desc}</Text>
                          </View>
                        </>
                      )
                    }}
                  />
                </View>
                
                </ScrollView>
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
                    title='Confirm Deactivation'
                    type='outline'
                    iconContainerStyle={{}}
                    iconPosition={'right'}
                    containerStyle={{
                      width: '80%',
                      alignSelf: 'center',
                      height: getResHeight(40),
                      backgroundColor: !touched.email || errors.email || !touched.phone || errors.phone ||!touched.password || errors.password || values.password<8 ? theme.color.disabled:theme.color.primary,
                      margin: '5%',
                      borderRadius: 3,                  
                    }}
                    disabled={!touched.email || errors.email || !touched.phone || errors.phone ||!touched.password || errors.password || values.password<8 }
                    disabledStyle={{
                      backgroundColor: theme.color.disabled
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
                      borderRadius: 3,
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

export default connect(mapStateToProps, mapDispatchToProps)(DeactivateAccount)
