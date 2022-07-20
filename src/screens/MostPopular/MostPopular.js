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
export class MostPopular extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const MostPopularData = [
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
            source={require('../../assets/img/prod00.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
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
            source={require('../../assets/img/prod00.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
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
            source={require('../../assets/img/prod00.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
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
            source={require('../../assets/img/prod00.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },

      {
        id: 4,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod00.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },

      {
        id: 5,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod00.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
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
   
          search={()=>this.props.navigation.navigate('Search')}
          title={'Most Popular'}
        />
        <View
          style={{
            alignSelf: 'center',
            width: SCREENWIDTH,
            backgroundColor: 'white',
            marginBottom: '15%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignSelf: 'center',
              alignItems: 'center',
              // backgroundColor:"red"
            
            }}>
            <View style={styles.container}>
              <TouchableOpacity>
              {setVectorIcon({
                type: 'MaterialIcons',
                name: 'sort',
                size: getFontSize(23),
                color: theme.color.darkGray,
              })}
              </TouchableOpacity>
              <Text style={styles.text}>SORT</Text>
            </View>

            <View style={styles.container}>
              <TouchableOpacity>
              {setVectorIcon({
                type: 'Ionicons',
                name: 'ios-options-outline',
                size: getFontSize(23),
                color: theme.color.darkGray,
                textTransform: 'uppercase',
              })}
              </TouchableOpacity>
              <Text style={styles.text}>FILTER</Text>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{}}
            data={[0]}
            renderItem={({item, index}) => {
              switch (index) {
                case 0:
                  return (
                    <MostPopularProduct
                      data={MostPopularData}
                      allOnPress={() => {
                        // alert("Hi")
                        this.props.navigation.navigate('ProductOverview')
                      }}
                      // tapJob={JobID => {
                      //   this.props.navigation.navigate('TrendingJobDetails', {
                      //     JobID: JobID,
                      //   })
                      // }}
                      // data={this.props.FeaturedJob}
                      // addDefaultSrc={this.addDefaultSrc()}
                    />
                  )

                default:
                  break
              }
            }}
            keyExtractor={item => item}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const MostPopularProduct = props => {
  const {data, allOnPress} = props

  return (
    <>
      <View
        style={{
          width: '100%',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginBottom:"13%"
          }}>
          <FlatList
            style={{
              marginTop: '5%',
              alignSelf: 'center',
            }}
            contentContainerStyle={{
              width: '100%',
              flexDirection: 'row',
            }}
            numColumns={2}
            showsHorizontalScrollIndicator={true}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <CardComponent 
                data={item}
                wish={true}
                type={"popular"}
                onPress={allOnPress}
                />
              </>
            )}
          />
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',   
    width: '50%',
    alignSelf:"center",
    borderRightWidth: 0.5,
    borderColor : theme.color.darkGray,
    marginTop: '2%',
    marginBottom: '2%',
    textAlign: 'center',
    justifyContent: 'center',

  }
  ,text: {
    fontSize: getFontSize(13),
    color: theme.color.darkGray,
    fontFamily: theme.font.latoRegular, 
    paddingLeft:"4%",
    
  },
})

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MostPopular)
