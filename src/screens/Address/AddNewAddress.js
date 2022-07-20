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

export class ChangeAddress extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID: 0,
      isWAN: false,
      selectedType:"Home"
    }
  }

  render () {
    const addressType = ["Home", "Work", ]
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
          title={'Change Address'}
        />

        <View
          style={{
            backgroundColor: 'white',
            // marginBottom:"50%"
          }}>
          <Formik
            initialValues={{
              name: '',
              mobile: '',
              email: '',
              houseNo: '',
              street: '',
              pincode: '',
              district: '',
              state: '',
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
                    marginBottom: '45%',
                  }}>
                 
                  {/* Contact Details */}

                  <View
                    style={{
                      width: '100%',
                      paddingVertical: '5%',
                      backgroundColor: theme.color.cardBg,
                      paddingHorizontal: '6%',
                      marginTop: '8%',
                      marginBottom: '5%',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
                        color: theme.color.black,
                        fontFamily: theme.font.latoBold,
                      }}>
                      Contact Details
                    </Text>
                  </View>

                  <View
                    style={{
                      paddingHorizontal: '6%',
                    }}>
                    <View
                      style={{
                        marginBottom: '5%',
                      }}>
                      <TextInput
                        value={values.name}
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='Name'
                        onFocus={() => setFieldTouched('name', true)}
                        onChangeText={text => setFieldValue('name', text)}
                        style={{
                          paddingRight: '5%',
                          fontSize: getFontSize(13),                          
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginBottom: '5%',
                        width: '100%',
                      }}>
                      <TextInput
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='Mobile No'
                        value={values.mobile}
                        keyboardType={'numeric'}
                        maxLength={10}
                        onFocus={() => setFieldTouched('mobile', true)}
                        onChangeText={text => setFieldValue('mobile', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(13),
                          
                          fontFamily: theme.font.latoRegular,
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
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
                        value={values.email}
                        keyboardType={'email-address'}
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='Email ID'
                        onFocus={() => setFieldTouched('email', true)}
                        onChangeText={text => setFieldValue('email', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(13),
                          
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      width: '100%',
                      paddingVertical: '5%',
                      backgroundColor: theme.color.cardBg,
                      paddingHorizontal: '6%',
                      marginTop: '5%',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
                        color: theme.color.black,
                        fontFamily: theme.font.latoBold,
                      }}>
                      Permanent Details
                    </Text>
                  </View>
                  <CheckBox
                    containerStyle={{
                      borderWidth: 1,
                      width: SCREENWIDTH,
                      alignSelf: 'center',
                      borderRadius: 8,
                      backgroundColor: 'white',
                      borderColor: 'white',
                      outline: 'none',
                      marginLeft: '12%',
                      marginVertical: '6%',
                    }}
                    checked={this.state.isWAN}
                    uncheckedIcon={setVectorIcon({
                      type: 'FontAwesome',
                      name: 'square-o',
                      size: getResWidth(18),
                      color: theme.color.pink,
                    })}
                    checkedIcon={setVectorIcon({
                      type: 'FontAwesome',
                      name: 'check-square',
                      size: getResWidth(18),
                      color: theme.color.pink,
                    })}
                    checkedColor={this.state.isWAN ? theme.color.pink : '#999'}
                    onPress={() => {
                      this.setState({isWAN: !this.state.isWAN})
                    }}
                    title={
                      <View
                        style={{
                          marginLeft: '3%',
                        }}>
                        <Text
                          style={{
                            fontSize: getFontSize(13),                            
                           fontFamily: theme.font.latoRegular,                         
                            color: theme.color.darkGray,
                          }}>
                          Same as Correspondence Address
                        </Text>
                      </View>
                    }
                  />

                  <View
                    style={{
                      paddingHorizontal: '6%',
                    }}>
                    <View
                      style={{
                        marginBottom: '5%',
                      }}>
                      <TextInput
                        value={values.houseNo}
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='Flat No. / House No'
                        onFocus={() => setFieldTouched('houseNo', true)}
                        onChangeText={text => setFieldValue('houseNo', text)}
                        style={{
                          paddingRight: '5%',
                          fontSize: getFontSize(13),                          
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginBottom: '5%',
                        width: '100%',
                      }}>
                      <TextInput
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='Street'
                        value={values.street}
                        onFocus={() => setFieldTouched('street', true)}
                        onChangeText={text => setFieldValue('street', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(13),
                          
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginBottom: '5%',
                        width: '100%',
                      }}>
                      <TextInput
                        value={values.pincode}
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='Pincode'
                        maxLength={6}
                        keyboardType='numeric'
                        onFocus={() => setFieldTouched('pincode', true)}
                        onChangeText={text => setFieldValue('pincode', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(13),
                          
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginBottom: '5%',
                        width: '100%',
                      }}>
                      <TextInput
                        value={values.district}
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='District'
                        onFocus={() => setFieldTouched('district', true)}
                        onChangeText={text => setFieldValue('district', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(13),
                          
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          backgroundColor: theme.color.inputBg,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginBottom: '5%',
                        width: '100%',
                      }}>
                      <TextInput
                        value={values.state}
                        placeholderTextColor={theme.color.darkGray}
                        placeholder='State'
                        onFocus={() => setFieldTouched('state', true)}
                        onChangeText={text => setFieldValue('state', text)}
                        style={{
                          paddingRight: '4%',
                          fontSize: getFontSize(13),
                          
                          fontFamily: theme.font.latoRegular,
                          borderWidth: 1,
                          height: getResHeight(45),
                          borderRadius: 5,
                          backgroundColor: theme.color.inputBg,
                          borderColor: theme.color.inputBorder,
                          paddingLeft: '5%',
                          color: '#000',
                        }}
                      />
                    </View>
                   
                  </View>
                  <View
                    style={{
                      width: '100%',
                      paddingVertical: '5%',
                      backgroundColor: theme.color.cardBg,
                      paddingHorizontal: '6%',
                      marginTop: '5%',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
                        color: theme.color.black,
                        fontFamily: theme.font.latoBold
                      }}>
                      Save Address as
                    </Text>
                 
                  </View>
                  <View style={{
                    marginTop: "5%",
                    paddingBottom: '5%',
                    flexDirection: 'row',
                    paddingHorizontal: '6%',

                  }}>
                  {  addressType.map((i,index) => {
                      return(<>
                      <TouchableOpacity 
                      onPress={() => {this.setState({addressType : i})}}
                      style={{
                        paddingHorizontal:"5%",
                        paddingVertical:"2.5%",
                        borderWidth: 1,
                        borderColor: this.state.addressType == i ?theme.color.pink : theme.color.darkGray,
                        backgroundColor: this.state.addressType == i ?theme.color.pink :"#FFFFFF",
                        marginRight : "5%",
                        borderRadius : 50
                      }}>
                        <Text style={{
                          fontSize: getFontSize(13),                          
                          fontFamily: theme.font.latoRegular,
                          color: this.state.addressType == i ? "#FFFFFF": theme.color.darkGray,
                        }}>{i}</Text>
                      </TouchableOpacity>
                      </>)
                    })}
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
                        this.props.navigation.navigate('PlaceOrder')
                    }}
                    title='Add Address'
                    type='outline'
                    iconContainerStyle={{}}
                    iconPosition={'right'}
                    containerStyle={{
                      width: '80%',
                      alignSelf: 'center',
                      height: getResHeight(40),
                      backgroundColor: theme.color.primary,
                      margin: '5%',
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

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAddress)
