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
  StyleSheet,
  LayoutAnimation,
  UIManager,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {TextTrans, BtnTrans} from '../../../i18translater'
import {Formik} from 'formik'
import {connect} from 'react-redux'
import {Button, Input} from 'react-native-elements'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import NavigationHeader from '../../components/NavigationHeader'

import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive'
import theme from '../../theme'
export class TabCategories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      selectedID :""
    }
  }

  render () {
    const categoriesData = [
      {
        id: 0,
        renderImg: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/women.png')}
          />
        ),
        category: 'WOMEN',
        submenu: [
          {
            title: 'Bags, Wallets & Clutches',
            data: [
              {key: 'Explore All Bags', value: false},
              {
                key: 'Handbags',
                value: false,
                categoryList: () =>
                  this.props.navigation.navigate('ProductList'),
              },
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Footwear',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Beauty & Personal Care',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
        ],
      },
      {
        id: 1,
        renderImg: (
          <Image
            style={{
              //  position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/men.png')}
          />
        ),
        category: 'MEN',
        submenu: [
          {
            title: 'Bags, Wallets & Clutches',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Footwear',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Beauty & Personal Care',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
        ],
      },
      {
        id: 2,
        renderImg: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/girl.png')}
          />
        ),
        category: 'Girl',
        submenu: [
          {
            title: 'Bags, Wallets & Clutches',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Footwear',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Beauty & Personal Care',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
        ],
      },
      {
        id: 3,
        renderImg: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/boy.png')}
          />
        ),
        category: 'Boy',
        submenu: [
          {
            title: 'Bags, Wallets & Clutches',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Footwear',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
          {
            title: 'Beauty & Personal Care',
            data: [
              {key: 'Explore All Bags', value: false},
              {key: 'Handbags', value: false},
              {key: 'Wallets', value: false},
              {key: 'Clutches', value: false},
            ],
          },
        ],
      },
    ]
    const listOfSubCategories = this.props.subcategories.filter(
      (i, index) => this.state?.selectedID== i?.categoryId,
    )
    return (
      <>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
          }}>
          <NavigationHeader
            headerTitle='Categories'
            search={() => { this.props.navigation.navigate('Search')}}
            cart={() => {
              this.props.navigation.navigate('MyCart')
            }}
          />
          <View style={{marginTop: '5%', paddingBottom: '10%'}}>
            <FlatList
              data={this.props.allcategories}
              // data={categoriesData}
              contentContainerStyle={{
                width: '100%',
              }}
              renderItem={({item, index}) => {
                return (
                  <>
                    <CategoryComponet 
                    data={item} 
                     subcategories ={listOfSubCategories} 
                    singlePress={_id => {
                     this.setState({selectedID: _id})
                    }}/>
                  </>
                )
              }}
            />
          </View>
        </SafeAreaView>
      </>
    )
  }
}

export class CategoryComponet extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  render () {
    const {data,subcategories, singlePress} = this.props
    const renderAccordians = () => {
      const items = []
      for (let item of subcategories) {
        items.push(<Accordian title={item?.subcategoryName} data={item?.data} />)
      }
      return items
    }
    return (
      <>
      <View style={{
        flex:1
      }}>
        <TouchableOpacity
         onPress={() => {
          this.setState({open: !this.state.open})
          singlePress(data._id)
        }}
          style={{
            height: 210,
            marginBottom: '2%',
            backgroundColor: "red"
          }}>
          {data.renderImg}
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: 70,
            left: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({open: !this.state.open})
              singlePress(data._id)
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
               <View style={{
              maxWidth: '80%',              
            }}>
            <Text
              style={{
                fontSize: getFontSize(22),
                color: '#FFFFFF',
                fontFamily: theme.font.latoBold,              
                letterSpacing: 1
              }}>
              {data?.categoryName}
            </Text>
            </View>
            <View>
            {this.state.open == false ? (
              <>
                <Entypo
                  name={'chevron-down'}
                  color={'#FFFFFF'}
                  size={getFontSize(26)}
                  style={{
                    paddingLeft: '3%',
                  }}
                />
              </>
            ) : (
              <>
                <Entypo
                  name={'chevron-up'}
                  color={'#FFFFFF'}
                  size={getFontSize(26)}
                  style={{
                    paddingLeft: '3%',
                  }}
                />
              </>
            )}
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: theme.font.latoRegular,
              marginTop: '3%',
              color: '#FFFFFF',
              fontWeight: '400',
            }}>
            Lorem ipsum dolor, sit amet{' '}
          </Text>
        </View>

        {this.state.open !== false ? (
          <>
            <View>{renderAccordians()}</View>
          </>
        ) : null}
        </View>
      </>
    )
  }
}

export class Accordian extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data,
      expanded: false,
    }

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  render () {
    return (
      <View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={[styles.title]}>{this.props.title}</Text>
          <Icon
            name={
              this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
            }
            size={getFontSize(26)}
            color={theme.color.primary}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={{}}>
            <FlatList
              data={this.state.data}
              numColumns={1}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                  }}>
                  <TouchableOpacity
                    style={[
                      styles.childRow,
                      styles.button,
                      item.value ? styles.btnActive : styles.btnInActive,
                    ]}
                    onPress={item.categoryList}>
                    <Text
                      style={{
                        fontSize: getFontSize(13),
                        color: theme.color.black,
                        fontFamily: theme.font.latoBold,
                      }}>
                      {item.key}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.childHr} />
                </View>
              )}
            />
          </View>
        )}
      </View>
    )
  }

  onClick = index => {
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({expanded: !this.state.expanded})
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: getFontSize(13),
    fontFamily: theme.font.latoBold,
    color: theme.color.darkGray,
  },
  itemActive: {
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: '8.5%',
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: theme.color.dimGray,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parentHr: {
    height: 1,
    width: '100%',
  },
  childHr: {
    height: 1,
    width: '100%',
  },
})
const mapDispatchToProps = dispatch => {
  return {   
  }
}

const mapStateToProps = (state, props) => {
  return {
    allcategories: state.Categories.allcategories,
    subcategories: state.Categories.subcategories,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCategories)
