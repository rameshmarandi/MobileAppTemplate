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
import * as ImgPicker from 'react-native-image-picker'
import setVectorIcon from '../../components/VectorComponents'
import {Button, Input, CheckBox} from 'react-native-elements'
import NavigationHeader from '../../components/NavigationHeader'
import RNPaper from '../../components/PaperComponents';
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

export class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID: 0,
      isWAN: false,
      openPicker: false,
      addressType: 'Home'
    }
  }
  imgPicker = async handleChange => {
    let option = {
      title: 'Select Image',
      mediaType: 'photo',
      quality: 1,
      includeExtra: true,
      selectionLimit: 1,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    await ImgPicker.launchImageLibrary(option, async res => {
      if (res.assets && res.assets.length > 0) {
        const path = res.assets[0].uri
        const imgData = {
          uri: path,
          name: 'image.png',
          type: `image/${path.split('.').pop()}`,
        }
        // await this.setState({loaderVisible: true});
        let payload = {
          image: imgData,
        }
        // const response = await this.props.addCoreUserAPI(payload);
        // await this.setState({loaderVisible: false});
        // if (response) {
        //   this.props.getUserJSAPI();
        //   Alert.alert('Profile changed successfully.');
        // } else {
        //   Alert.alert('Something went wrong!');
        // }
      }
      //   else if (res.errorMessage || res.errorCode) {
      //     Alert.alert(
      //       'Ruptok',
      //       res.errorMessage ? res.errorMessage : res.errorCode,
      //     );
      //   }
      this.setState({openPicker: false})
    })
  }

  render () {
    const genderData = ['Male', 'Female'].map((el) => {
        return {label: el, value: el};
      });

      const addressType = ["Home", "Work"]
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <NavigationHeader
          backPress={() => {
            this.props.navigation.pop()
            // this.props.navigation.navigate('Profile')
          }}
          title={'Profile'}
        />

        <View
          style={{
            backgroundColor: 'white',         
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
              dob :""
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
                    marginBottom: '31%',
                  }}>
                  {/* Profile Section */}
                  <View
                    style={{
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginVertical: '3%',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.imgPicker()
                      }}>
                      <View
                        style={{
                          width: getResWidth(70),
                          height: getResWidth(70),
                          borderWidth: 1,
                          borderRadius: 60,
                          borderColor: '#DCDCDC',
                          justifyContent: 'center',
                          alignItems: 'center',
                          overflow: 'hidden',
                        }}>
                        <Text>
                          {setVectorIcon({
                            type: 'Entypo',
                            name: 'plus',
                            size: getFontSize(30),
                            color: theme.color.darkGray,
                          })}
                        </Text>
                        {/* {this.props.coreUser && this.props.coreUser.path ? (
                            <Image
                              style={{
                                width: '100%',
                                height: '100%',
                              }}
                              source={{
                                uri: `${this.props.coreUser.path}`,
                              }}
                            />
                          ) : (
                            setVectorIcon({
                              type: 'Entypo',
                              name: 'plus',
                              size: getFontSize(30),
                              color: theme.color.primary,
                            })
                          )} */}
                      </View>
                    </TouchableOpacity>
                    {/* <Text
                      style={{
                        marginTop: '4%',
                        color: '#CC8B35',
                        fontFamily: theme.font.semiBold,
                        fontSize: getFontSize(12),
                        marginBottom: '5%',
                      }}>
                      Upload New Photo
                    </Text> */}
                  </View>
                  <View
                    style={{
                      width: '100%',
                      paddingVertical: '5%',                     
                      paddingHorizontal: '6%',                      
                    
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
                        color: theme.color.black,
                        fontFamily: theme.font.latoBold
                      }}>
                     Personal Details
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
                        placeholder='Full Name'
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
                    <View
                      style={{                        
                        width: '100%',
                        Zindex:9999
                      }}>
                      <RNPaper.Dropdown
                      items={genderData}                   
                      inputPlaceholder={'Gender'}
                      defultItem={values.Gender}
                      setOpen={() => {}}
                      inputStyle={{
                        width: '100%',
                        height: getResHeight(45),   
                         fontFamily: theme.font.latoRegular,    
                         fontSize: getFontSize(13),                 
                        marginRight: '1%',
                        paddingLeft: '2%',
                   
                      }}
                      dropDownStyle={{
                        width: '99%',
                      }}
                      onChangeItem={async (item) => {
                        setFieldValue('Gender', item);
                        setFieldTouched('Gender', true);
                      }}
                    />
                    </View>

                    <IconInputText
                    // validation={date => {
                    //   const isvalid = validateAge(date, 18);
                    //   if (!isvalid.status) {
                    //     alert(isvalid.message);
                    //   }
                    // }}
                    datePicker={true}
                    isOpenDP={() => {
                      setFieldTouched('dob', true);
                    }}
                    type={"edit"}
                    // editable={this.props.basicDetail ? false : true}
                    title={'DOB'}
                    date={values.dob}
                    formate="DD-MMM-yyyy"
                    onConfirm={date => {
                      setFieldValue('dob', date);
                      setFieldTouched('dob', true);
                    }}
                    onCancel={() => {
                      setFieldTouched('dob', true);
                    }}
                    style={{
                      color: 'black',                   
                      fontSize: getFontSize(13),
                       fontFamily: theme.font.latoRegular,
                      fontFamily: theme.font.latoRegular,
                      paddingLeft: '3%'
                 
                    }}
                    containerStyle={{
                      width: '100%',
                      height: getResHeight(45),
                      marginTop: '5%',
                      alignSelf: 'center',
                      zIndex:-99999
                    }}
                    rightIcon={setVectorIcon({
                      type: 'AntDesign',
                      name: 'calendar',
                      size: getFontSize(20),
                      color: '#6A6A6A',
                    })}
                   placeholderTextColor={theme.color.darkGray}
                    placeholder="DOB"                   
                    value={values.dob}
                    onChangeText={text => {
                      setFieldValue('dob', text);
                    }}
                    onFocus={() => setFieldTouched('dob', true)}
                  />
                  </View>
                     {/* Permanent Address */}
                  <View
                    style={{
                      width: '100%',
                      paddingVertical: '5%',
                      // backgroundColor: theme.color.cardBg,
                      paddingHorizontal: '6%',
                      // marginVertical: '8%',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
                         fontFamily: theme.font.latoRegular,
                        color: theme.color.black,
                        fontFamily: theme.font.latoBold
                      }}>
                      Address
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
                     {/* Permanent Address */}
                  <View
                    style={{
                      width: '100%',
                      // paddingVertical: '5%',
                      // backgroundColor: theme.color.cardBg,
                      paddingHorizontal: '6%',
                      marginTop: '5%',
                    }}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
                         fontFamily: theme.font.latoRegular,
                        color: theme.color.black,
                        fontFamily: theme.font.latoBold
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
                      size: getResWidth(20),
                      color: theme.color.pink,
                    })}
                    checkedIcon={setVectorIcon({
                      type: 'FontAwesome',
                      name: 'check-square',
                      size: getResWidth(20),
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
                      paddingBottom: '5%',
                      // backgroundColor: theme.color.cardBg,
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
                    bottom: 50,                 
                    width: '100%',                 
                    justifyContent: 'center',
                  }}>
                  <Button
                    onPress={() => {
                        this.props.navigation.navigate('Profile')
                    }}
                    title='Save Details'
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
