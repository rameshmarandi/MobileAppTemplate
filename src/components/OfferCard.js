import React, {Component, useState} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  NativeModules,
  ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import {
  CardComponent,
  IconInputText,
  CustomUIModal,
} from '../commonrender/CommonRender'
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../utility/responsive'
import theme from '../theme'
import {Button, Input} from 'react-native-elements'
import ImageViewer from 'react-native-image-zoom-viewer';

export default class OfferCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showmodal: false,
    }
  }

  render () {
    const {data, type} = this.props

    const images = [{
      // Simplest usage.
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  
      // width: number
      // height: number
      // Optional, if you know the image size, you can set the optimization performance
  
      // You can pass props to <Image />.
      props: {
          // headers: ...
      }
  }, {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      props: {
          // Or you can set source directory.
          // source: require('../background.png')
      }
  }, {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      props: {
          // Or you can set source directory.
          // source: require('../assets/img/model00.png')
      }
  }]
    return (
      <>
        <View>
          {type == 'singleProduct' ? (
            <>
             <Modal visible={this.state.showmodal} transparent={true}>
                <ImageViewer 
                // backgroundColor={"white"}
                enableSwipeDown={true}
                onCancel={()=>{this.setState({showmodal: !this.state.showmodal})}}
                imageUrls={images}/>
            </Modal>

              <TouchableOpacity
               onPress={()=>{this.setState({showmodal: !this.state.showmodal})}}
                style={{
                  alignSelf: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: '4%',
                  flex: 1,
                  width: type == 'home' ? SCREENWIDTH - 20 : SCREENWIDTH - 30,
                  height: SCREENHEIGHT / 3,
                  backgroundColor: theme.color.midGray,
                  margin: 10,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                  }}>
                  {data?.renderIcon}
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={{}}>
                {(data?.id + 1) % 2 !== 1 ? (
                  <>
                    <TouchableOpacity
                      disabled={
                        type == 'home' || type == 'singleProduct' ? true : false
                      }
                      style={{
                        alignSelf: 'center',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: '4%',                       
                        flex: 1,
                        width:
                          type == 'home' ? SCREENWIDTH - 20 : SCREENWIDTH - 30,
                        height: SCREENHEIGHT / 3.5,
                        backgroundColor: data?.color,
                        margin: 10,
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 1},
                        shadowRadius: 10,
                        shadowOpacity: 0.1,
                        elevation: 5,
                        borderRadius: 10,
                      }}>
                      <View
                        style={{
                          width: '50%',
                        }}>
                        <Text
                          style={{
                            fontSize: getFontSize(27),
                            color: theme.color.black,
                            fontWeight: 'bold',
                          }}>
                          {' '}
                          {data?.discount}{' '}
                        </Text>
                        <Text
                          style={{
                            fontSize: getFontSize(15),
                            color: theme.color.black,
                            fontWeight: '600',
                            marginVertical: '3%',
                          }}>
                          {' '}
                          {data?.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: getFontSize(12),
                            color: theme.color.black,
                            fontWeight: '400',
                            marginVertical: '3%',
                          }}>
                          {' '}
                          {data?.desc}
                        </Text>
                      </View>

                      <View
                        style={{
                          width: '50%',
                          height: '80%',
                        }}>
                        {data?.renderIcon}
                      </View>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      disabled={type == 'home' ? true : false}
                      style={{
                        alignSelf: 'center',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: '4%',
                        flex: 1,
                        width:
                          type == 'home' ? SCREENWIDTH - 20 : SCREENWIDTH - 30,
                        height: SCREENHEIGHT / 3.5,
                        backgroundColor: data?.color,
                        margin: 10,
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 1},
                        shadowRadius: 10,
                        shadowOpacity: 0.1,
                        elevation: 5,
                        borderRadius: 10,
                      }}>
                      <View
                        style={{
                          width: '50%',
                          height: '100%',
                        }}>
                        {data?.renderIcon}
                      </View>
                      <View
                        style={{
                          width: '50%',                     
                          marginLeft:"3%"
                          
                        }}>
                        <Text
                          style={{
                            fontSize: getFontSize(27),
                            color: theme.color.black,
                            fontFamily: theme.font.latoBold,
                          }}>
                          {' '}
                          {data?.discount}{' '}
                        </Text>
                        <Text
                          style={{
                            fontSize: getFontSize(15),
                            color: theme.color.black,
                            fontFamily: theme.font.latoBold,
                            marginVertical: '3%',
                          }}>
                          {' '}
                          {data?.title}
                        </Text>
                        <View>
                        <Text
                          style={{
                            fontSize: getFontSize(12),
                            color: theme.color.black,
                            fontFamily: theme.font.latoRegular,
                            marginVertical: '3%',
                            marginLeft: 0,
                          }}>
                          {' '}
                          {data?.desc}
                        </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </>
          )}
        </View>
      </>
    )
  }
}
