import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native'
import {connect} from 'react-redux'
import OfferCard from '../../components/OfferCard'
import {CardComponent} from '../../commonrender/CommonRender'
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
import theme from '../../theme'
import {ListHeader, ViewPagerIndicator} from '../../commonrender/CommonRender'
export class SuperOffers extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const superOfferData = [
      {
        id: 0,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/prod03.png')}
          />
        ),
        discount: '50%',
        title: 'Today’s Special!',
        desc: 'Get discount for every order, only valid for today',
        color: '#DADEFF',
      },

      {
        id: 1,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod04.png')}
          />
        ),
        discount: '50%',
        title: 'Today’s Special!',
        desc: 'Get discount for every order, only valid for today',
        color: '#FFE7D6',
      },

      {
        id: 2,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod05.png')}
          />
        ),
        discount: '50%',
        title: 'Today’s Special!',
        desc: 'Get discount for every order, only valid for today',
        color: '#FFD9D6',
      },

      {
        id: 3,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/mod00.png')}
          />
        ),
        discount: '50%',
        title: 'Today’s Special!',
        desc: 'Get discount for every order, only valid for today',
        color: '#DAF2FF',
      },
     
    ]

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <NavigationHeader
          cart={() => {}}
          backPress={() => {
            this.props.navigation.pop()
          }}
          search={() => { this.props.navigation.navigate('Search')}}
          title={'Super Offers'}
        />
        <View
          style={{
            width: SCREENWIDTH,
            marginHorizontal: '5%',
            alignSelf: 'center',
            marginBottom: '25%',
            marginTop: '5%',
          }}>
          <FlatList
            data={superOfferData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <OfferCard data={item} />
              </>
            )}
          />
        </View>
      </SafeAreaView>
    )
  }
}


const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SuperOffers)
