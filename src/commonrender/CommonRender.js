import React, {Component, useEffect, useState, useRef} from 'react'
// import SkeletonContent from 'react-native-skeleton-content';

import DatePicker from 'react-native-date-picker'
import {
  Alert,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  TextInput,
  Platform,
  ViewPropTypes,
  Modal,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import moment from 'moment'
import setVectorIcon from '../components/VectorComponents'
import PropTypes, {string} from 'prop-types'
import {Divider, Button} from 'react-native-elements'
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../utility/responsive'
import theme from '../theme'
import ViewPagerIndicator from '../components/ViewPagerIndicator'
import OfferCard from '../components/OfferCard'

export const CardComponent = props => {
  const [btnpressed, setBtnPressed] = useState(false)
  const [wishlist, setWishlist] = useState(false)
  return (
    <>
      <View
        style={{         
          width: SCREENWIDTH / 2 - 23,
          flexDirection: 'column',
          marginBottom: '4%',
          margin: '2%',
          alignSelf: 'center',
          borderColor: theme.color.dimGray,
          borderWidth: 1,
          backgroundColor: '#FFFFFF',
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 1},
          shadowRadius: 10,
          shadowOpacity: 0.1,
          elevation: 5,
          borderRadius: 5,
        }}>
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            width: '100%',
            height: getResHeight(180),
            backgroundColor: '#F2F2F2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {props.data.renderIcon}
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: '5%',
            paddingVertical: '6%',
            backgroundColor: 'white',
            position: 'absolute',
            left: 5,
            top: 12,
            alignItems: 'center',
            justifyContent: 'center',
            shadowRadius: 10,
          }}>
          <Text
            style={{
              fontSize: getFontSize(12),
              fontFamily: theme.font.latoBold,
              color: 'red',
            }}>
            10% OFF
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setWishlist(!wishlist)}
          style={{
            height: 31,
            width: 31,
            backgroundColor: '#FFFFFF',
            borderRadius: 50,
            position: 'absolute',
            right: 12,
            top: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {props.wish && (
            <>
              <Text>
                {wishlist !== false ? (
                  <Text>
                    {setVectorIcon({
                      type: 'Foundation',
                      name: 'heart',
                      size: getFontSize(18),
                      color: theme.color.primary,
                    })}
                  </Text>
                ) : (
                  <Text>
                    {setVectorIcon({
                      type: 'Feather',
                      name: 'heart',
                      size: getFontSize(15),
                      color: theme.color.darkGray,
                    })}
                  </Text>
                )}
              </Text>
            </>
          )}
          {props.close && (
            <>
              <Text>
                {setVectorIcon({
                  type: 'Ionicons',
                  name: 'close',
                  size: getFontSize(18),
                  color: theme.color.darkGray,
                })}
              </Text>
            </>
          )}
        </TouchableOpacity>
        {/* bottom Container */}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: '5%',
            paddingVertical: '6%',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: getFontSize(14),
              fontFamily: theme.font.latoBold,
              marginBottom: '8%',
              color: '#1F1F1F',
            }}>
            Samsung M21
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '97%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: getFontSize(13),
                fontFamily: theme.font.latoBold,
                marginBottom: '3%',
                color: '#1F1F1F',
              }}>
              ₹ 420.00/-
            </Text>
            <Text
              style={{
                fontSize: getFontSize(13),
                fontFamily: theme.font.latoRegular,
                marginBottom: '3%',
                color: theme.color.darkGray,
                textDecorationLine: 'line-through',
              }}>
              ₹ 500/-
            </Text>
          </View>
          <Button
            title={props.type == 'popular' ? 'Add To Cart' : 'Move To Cart'}
            type={
              props.type == 'popular'
                ? 'solid'
                : btnpressed == false
                ? 'Outline'
                : 'solid'
            }
            onPress={() => {
              setBtnPressed(!btnpressed)
            }}
            containerStyle={[
              {
                width: '100%',
                height: getResHeight(40),
                marginTop: '10%',
                overflow: 'hidden',
                opacity: 0.9,
              },
              // !this.state.pressLogin && {elevation: 0},
            ]}
            titleStyle={{
              fontFamily: theme.font.latoRegular,
              fontSize: getFontSize(14),
              color:
                props.type == 'popular'
                  ? '#FFFFFF'
                  : btnpressed == false
                  ? theme.color.primary
                  : '#FFFFFF',
            }}
            buttonStyle={{
              height: getResHeight(38),
              borderWidth: 1,
              borderColor:
                btnpressed == false ? theme.color.primary : '#FFFFFF',
              backgroundColor:
                props.type == 'popular'
                  ? theme.color.primary
                  : btnpressed == false
                  ? '#FFFFFF'
                  : theme.color.primary,

              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </>
  )
}

export const BannerComponent = props => {
  const {data, allOnPress, bannerType} = props
  const [page, setPage] = useState(0)
  const flatlistRef = useRef(null)
  const onViewRef = useRef(viewableItems => {
    viewableItems.viewableItems.length > 0
      ? setPage(viewableItems.viewableItems[0].index)
      : setPage(0)
  })
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50})
  return (
    <>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
        <FlatList
          horizontal
          pagingEnabled
          data={data}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          ref={flatlistRef}
          legacyImplementation={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <>
              <OfferCard data={item} 
              type={props.type} 
              onPress={props.onPress}/>
            </>
          )}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            left: '30%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ViewPagerIndicator
            style={{}}
            size={getResWidth(8)}
            space={'5%'}
            numPages={data.length}
            activeIndex={page}
            defaultColor={'#FFFFFF'}
            activeColor={theme.color.pink}
          />
        </View>
      </View>
    </>
  )
}
export class IconInputText extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render () {
    const {containerStyle} = this.props
    const {leftIcon, rightIcon, type} = this.props
    const {
      title,
      datePicker,
      formate,
      onConfirm,
      onCancel,
      date,
      maximumDate,
      minimumDate,
      isOpenDP,
      validation,
    } = this.props

    const defultDate = () => {
      const currentDate = new Date()

      let defultDate = currentDate
      if (date && typeof date == 'string') {
        defultDate = new Date(date)
      }
      return defultDate
    }

    return (
      <>
        <DatePicker
          modal
          title={title}
          mode='date'
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          open={this.state.open}
          date={defultDate()}
          onConfirm={date => {
            this.setState({open: false, date: date})
            let newDate = date.toDateString()
            if (typeof formate == 'string') {
              newDate = moment(date).format(formate)
            }
            onConfirm ? onConfirm(newDate) : null
          }}
          onCancel={() => {
            this.setState({open: false})
            onCancel()
          }}
        />

        <View
          style={[
            {
              backgroundColor: type == 'edit' ? '#FFFFFF' : '#f4f5f6',
              borderRadius: 5,
              borderWidth: type == 'edit' ? 1 : 0,
              borderColor: type == 'edit' ? theme.color.inputBorder : null,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: '2.5%',
            },
            containerStyle,
          ]}>
          {datePicker && (
            <TouchableOpacity
              onPress={() => {
                this.setState({open: true})
                if (isOpenDP) {
                  isOpenDP(true)
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 1,
                // backgroundColor: 'clear',
              }}
            />
          )}
          {leftIcon}
          <TextInput
            {...this.props}
            style={[
              {
                height: '100%',
                flex: 1,
                marginLeft: leftIcon ? '2%' : 0,
                marginRight: rightIcon ? '2%' : 0,
              },
              this.props.style,
            ]}
          />
          <TouchableOpacity
            disabled={this.props.disabled}
            onPress={this.props.rightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
export function CustomUIModal (props) {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.isShow}
      onRequestClose={props.onRequestClose}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <TouchableOpacity
          activeOpacity={0}
          style={{
            flex: 1,
            minHeight: SCREENHEIGHT,
            width: SCREENWIDTH,
            position: 'absolute',
          }}
          onPress={props.outsidePress}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            minHeight: getResHeight(100),
            maxHeight: getResHeight(580),
            paddingVertical: '5%',
            width: '100%',
            backgroundColor: '#FFFFFF',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10%',
              marginTop: '5%',
              paddingHorizontal: '6%',
            }}>
            <Text
              style={{
                fontSize: getFontSize(15),
                color: theme.color.black,
                fontFamily: theme.font.latoBold,
              }}>
              {props.leftText}
            </Text>
            <TouchableOpacity onPress={props.textOnPress}>
              <Text
                style={{
                  fontSize: getFontSize(13),
                  color: 'red',
                  fontFamily: theme.font.latoRegular,
                }}>
                {props.rightText}
              </Text>
            </TouchableOpacity>
          </View>

          {props.customUIRender}
        </View>
      </SafeAreaView>
    </Modal>
  )
}
export const AddressCard = props => {
  const {data} = props
  return (
    <>
      <TouchableOpacity
        onPress={props.selectedAddress}
        style={{
          backgroundColor: '#FFFFFF',
          marginBottom: '5%',
          borderRadius: 10,
          borderWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: '5%',
          }}>
          <Text>
            {' '}
            {setVectorIcon({
              type: 'Feather',
              name: 'home',
              size: getFontSize(23),
              color: theme.color.primary,
            })}
          </Text>
          <Text
            style={{
              fontSize: getFontSize(17),
              color: theme.color.primary,
              fontWeight: '600',
              marginLeft: '5%',
            }}>
            Home Address
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: '5%',
            paddingBottom: '5%',
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: getFontSize(17),
              color: theme.color.black,
            }}>
            {data.name}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: getFontSize(16),
              color: theme.color.darkGray,
              marginVertical: '4%',
            }}>
            {data.mobile}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: getFontSize(16),
              color: theme.color.darkGray,
            }}>
            {data.address}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}
export const ListHeader = props => {
  const {titleTextStyle} = props
  return (
    <View
      style={[
        {
          marginTop: '5%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.containerStyle,
      ]}>
      <Text
        style={[
          {
            flex: 1,
            color: '#000',
            fontSize: getFontSize(15),
            fontFamily: theme.font.latoBold,
            letterSpacing: 0.4,
          },
          titleTextStyle,
        ]}>
        {props.title}
      </Text>
      {props.allOnPress && (
        <Button
          onPress={props.allOnPress}
          title='See all'
          type='clear'
          iconContainerStyle={{}}
          iconPosition={'right'}
          containerStyle={[
            {
              borderRadius: 8,
            },
          ]}
          titleStyle={{
            fontFamily: theme.font.latoRegular,
            fontSize: getFontSize(13),
            color: theme.color.darkGray,
          }}
          buttonStyle={{}}
        />
      )}
    </View>
  )
}

