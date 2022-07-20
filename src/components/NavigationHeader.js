import React, {Component} from 'react'
import {
  Alert,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native'
import {connect} from 'react-redux'
import {Button, Overlay} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

import theme from '../theme'
// import DismissKeyboardView from '../hoc/DismissKeyboardView';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENWIDTH,
} from '../utility/responsive'

class NavigationHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPassword: false,
      pressLogin: false,
      LoginSingupModel: false,
      modalVisible: false,
    }
  }

  render () {
    const {style} = this.props
    return (
      <View>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              width: SCREENWIDTH,
              paddingRight: '3%', 
              paddingLeft :'2%', 
              justifyContent: 'space-between',
              alignSelf: 'center',
              height: getResHeight(50), 
              marginVerticle:"15%"   
           
  
            },
            style,
          ]}>
          <View>
            {this.props.backPress && (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity onPress={this.props.backPress}>
                    <Entypo
                      name='chevron-left'
                      size={getFontSize(33)}
                      color={theme.color.darkGray}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: getFontSize(15),
                      fontFamily: theme.font.latoBold,
                      color: theme.color.black,                   
                    }}>
                    {this.props.title}
                  </Text>
                </View>
              </>
            )}
            {this.props.HeaderSeach && (
              <>
                <View>
                 {this.props.HeaderSeach}
                 </View>
              </>
            )}
            {this.props.titleImg && (
              <View
                style={{
                  height: getResWidth(32),
                  marginLeft: '2%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  // source={require('../assets/img/Ruptoklogo-hd.png')}
                  style={{
                    width: getResWidth(65),
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            )}
            {this.props.logo && (
              <View
                style={{
                  height: getResWidth(32),
                  marginLeft: '2%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: getFontSize(25),
                    color: theme.color.black,
                    fontFamily: theme.font.latoBold
                  }}>
                  {this.props.logo }
                </Text>
              </View>
            )}
            {this.props.headerTitle && (
              <View
                style={{
                  height: getResWidth(32),
                  marginLeft: '2%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: getFontSize(15),
                    fontFamily: theme.font.latoBold,
                    color: theme.color.black,  
                  }}>
                  {this.props.headerTitle }
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',            
            }}>

            {this.props.filter && (
              <>
                <TouchableOpacity onPress={this.props.filter}>
                  <Ionicons
                    name='ios-options-outline'
                    size={getFontSize(25)}
                    color={theme.color.darkGray}
                  />
                </TouchableOpacity>
              </>
            )}
            {this.props.search && (
              <>
                <TouchableOpacity onPress={this.props.search}>
                  <Ionicons
                    name='search'
                    size={getFontSize(22)}
                    color={theme.color.darkGray}
                  />
                </TouchableOpacity>
              </>
            )}
            {this.props.cart && (
              <>
                <TouchableOpacity onPress={this.props.cart}>
                  <Ionicons
                    name='cart'
                    size={getFontSize(25)}
                    color={theme.color.darkGray}
                    style={{
                      paddingLeft: '3%',
                    }}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader)
