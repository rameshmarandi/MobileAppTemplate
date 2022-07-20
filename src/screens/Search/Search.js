import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
  TouchableWithoutFeedback,
  NativeModules,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import {connect} from 'react-redux'
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
export class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {}
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
        
        />
        <View
          style={{
            alignSelf: 'center',
             width : SCREENWIDTH -40,
            backgroundColor: 'white',
            marginBottom: '15%',
            alignSelf: 'center',
          }}>
          <SearchBar
            onFocus={() => {}}
            
            placeholder='Search for Products and More'
            onChangeText={text => this.setState({searchValue: text})}
            value={this.state.searchValue}
            leftIconContainerStyle={{paddingLeft: 10}}
            searchIcon={<Ionicons name='search' size={18} color={'#141414'} />}
            inputStyle={{
              fontFamily: theme.font.latoRegular,
              fontSize: getFontSize(13),
              color: 'black',
            }}
            inputContainerStyle={{
              backgroundColor: '#f8f8f8',
              borderRadius: 5,
            }}
            containerStyle={{
              marginTop: 5,
              width: '100%',
              backgroundColor: theme.color.primary,
              padding: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)
