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
export class OrderConfirm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
      seletedID: 0,
    }
  }

  render () {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              marginBottom:"5%"
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
              source={require('../../assets/img/confirm.png')}
            />
          </View>
          <Text style={{
            alignItems: 'center',
            fontSize: getFontSize(17),
            color : theme.color.black,
            fontFamily: theme.font.latoBold
            }}>Your Order Is Confirmed</Text>
          <Text style={{
            alignItems: 'center',
            fontSize: getFontSize(13),
            color : theme.color.dimLight,
            fontFamily: theme.font.latoRegular,
            marginVertical: '5%',
            }}>Thank You for your purchase !</Text>
          <Text
            style={{
              width: '80%',
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: getFontSize(11),
              color : theme.color.dimLight,
              fontFamily: theme.font.latoRegular,
              lineHeight : 24
            }}>
            We’ll send you a shipping confirmation email as soon as order ships.
          </Text>

          <Button
            onPress={() => {this.props.navigation.navigate("Home")}}
            title='Continue Shopping'
            type='outline'
            iconContainerStyle={{}}
            iconPosition={'right'}
            containerStyle={{
              width: '60%',
              alignSelf: 'center',
              height: getResHeight(40),
              backgroundColor: theme.color.primary,
              margin: '5%',
              borderRadius: 5,
              marginTop: '5%',
            }}
            titleStyle={{
                fontFamily: theme.font.latoRegular,
              fontSize: getFontSize(15),
              color: 'white',
              textAlign: 'center',
            }}
            buttonStyle={{
              height: '100%',
              width: '100%',
              backgroundColor: theme.color.pink,
              borderColor: theme.color.pink,
              borderRadius: 5,
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm)
