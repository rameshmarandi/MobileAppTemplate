import React, {Component, useState, useRef} from 'react'
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
 
} from 'react-native'
import {connect} from 'react-redux'
import {SearchBar} from 'react-native-elements'
import {Button, Input} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import Feather from 'react-native-vector-icons/dist/Feather'
import NavigationHeader from '../../components/NavigationHeader'
import Carousel from '../../components/Carousel'
import {
  CardComponent,
  BannerComponent,
  Placeholder,
} from '../../commonrender/CommonRender'
import setVectorIcon from '../../components/VectorComponents'
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../../utility/responsive'
import {
  IMG_URL
  } from '../../config/constants';
import theme from '../../theme'
import {ListHeader} from '../../commonrender/CommonRender'
import * as categoriesAPI from '../../features/Categories/categoriesAPI'
import * as AuthAPI from '../../features/auth/authAPI'
import OfferCard from '../../components/OfferCard'
import ViewPagerIndicator from '../../components/ViewPagerIndicator'

export class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeCard: 1,
      searchValue: '',
    }
  }
async componentDidMount (){
  await this.props.getAllCategoriesAPI()
  await this.props.getAllSubCategoriesAPI()
  await this.props.getUserAPI()
}
  render () {
    const SuperOfferData = [
      {
        id: 0,

        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/about00.png')}
          />
        ),
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
            source={require('../../assets/img/about01.png')}
          />
        ),
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
            source={require('../../assets/img/about01.png')}
          />
        ),
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
            source={require('../../assets/img/about01.png')}
          />
        ),
      },
    ]
    const CategoriesData = [
      {
        id: 0,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/women.png')}
          />
        ),
        category: 'Women',
      },
      {
        id: 1,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/men.png')}
          />
        ),
        category: 'Men',
      },
      {
        id: 2,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/girl.png')}
          />
        ),
        category: 'Girl',
      },
      {
        id: 3,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/boy.png')}
          />
        ),
        category: 'Boy',
      },
      {
        id: 4,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/women.png')}
          />
        ),
        category: 'Women',
      },
      {
        id: 5,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/men.png')}
          />
        ),
        category: 'Men',
      },
      {
        id: 6,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/girl.png')}
          />
        ),
        category: 'Girl',
      },
      {
        id: 7,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/boy.png')}
          />
        ),
        category: 'Boy',
      },
    ]
    const BrandForYouData = [
      {
        id: 0,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/brand00.png')}
          />
        ),
        type: 'Men',
      },
      {
        id: 1,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/brand01.png')}
          />
        ),
        type: 'Woman',
      },
      {
        id: 2,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/brand02.png')}
          />
        ),
        type: 'Boy',
      },

      {
        id: 4,
        renderIcon: (
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../assets/img/brand03.png')}
          />
        ),
        type: 'Men',
      },
    ]
    const MostPopularData = [
      {
        id: 0,
        renderIcon: (
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../../assets/img/prod02.png')}
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
            source={require('../../assets/img/prod07.png')}
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
            source={require('../../assets/img/prod02.png')}
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
            source={require('../../assets/img/prod02.png')}
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
            source={require('../../assets/img/prod02.png')}
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
            source={require('../../assets/img/prod07.png')}
          />
        ),
        p_name: 'EVERLY',
        desc: 'Beige & Tan Textured Wedge Pumps with Laser Cuts',
        price: '₹ 420.00/-',
        actualPrice: '₹ 500/-',
      },
    ]
    const dummyData = [
      {
        title: 'Anise Aroma Art Bazar',
        url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        id: 1,
      },
      {
        title: 'Food inside a Bowl',
        url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        id: 2,
      },
      {
        title: 'Vegatable Salad',
        url:
          'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        id: 3,
      },
    ]
    const superOfferData1 = [
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
    ]  
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <NavigationHeader
          cart={() => {
            this.props.navigation.navigate('MyCart')
          }}
          logo={'Logo'}
        />

        <View
          style={{
            alignSelf: 'center',
          }}>
           
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{}}
            data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({item, index}) => {
              switch (index) {
                case 0:
                  return (
                    <View
                      style={{
                        width: '100%',
                        alignSelf: 'center',
                        paddingHorizontal: '3%',
                        borderRadius: 10,
                        marginTop: '3%',
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('Search')
                        }>
                        <SearchBar
                          onFocus={() => {}}
                          editable={false}
                          placeholder='Search for Products and More'
                          onChangeText={text =>
                            this.setState({searchValue: text})
                          }
                          value={this.state.searchValue}
                          leftIconContainerStyle={{paddingLeft: 10}}
                          searchIcon={
                            <Ionicons
                              name='search'
                              size={18}
                              color={'#141414'}
                            />
                          }
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
                      </TouchableOpacity>
                    </View>
                  )
                case 1:
                  return (
                    <>
                      <View
                        style={{
                          paddingHorizontal: '4%',
                        }}>
                        <ListHeader
                          title={'Super Offers'}
                          style={{                         
                          }}
                          allOnPress={() => {
                            this.props.navigation.navigate('SuperOffers')
                          }}
                        />
                      </View>
                      <View style={{
                        marginTop:"3%"
                      }}>
                        <Carousel data={superOfferData1} />
                        {/* <Carousel data = {dummyData}/> */}
                      </View>
                      {/* <BannerComponent data={superOfferData1} type={'home'} /> */}
                    </>
                  )
                case 2:
                  return (
                    <Category
                      data={this.props.allcategories}
                      // data={CategoriesData}
                      allOnPress={() => {
                        this.props.navigation.navigate('Categories')
                      }}
                      singlePress={_id => {
                        this.props.navigation.navigate('SingleCategories', {
                          id: _id,
                        })
                      }}
                    />
                  )
                case 3:
                  return (
                    <BrandForYou
                      data={BrandForYouData}
                      allOnPress={() => {
                        // this.props.navigation.navigate('TrendingJobs')
                      }}
                    />
                  )
                case 4:
                  return (
                    <MostPopular
                      data={MostPopularData}
                      allOnPress={() => {
                        this.props.navigation.navigate('MostPopular')
                      }}
                      singleProductView={() => {
                        this.props.navigation.navigate('ProductOverview')
                      }}
                    />
                  )
                case 5:
                  return (
                    <>
                      <View
                        style={{
                          marginBottom: '20%',
                        }}>
                        <View>
                          {/* <Carousel data={superOfferData2} type={'home'} /> */}
                        </View>
                        <BannerComponent data={superOfferData1} type={'home'} />
                      </View>
                    </>
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

const Category = props => {
  const {data, allOnPress, singlePress} = props

  return (
    <>
      <View
        style={{
          width: '100%',
          paddingHorizontal: '4%',
        }}>
        <ListHeader
          title={'Categories'}
          allOnPress={() => {
            allOnPress()
          }}
        />
       
          <FlatList
            style={{
              marginTop: '8%',
            }}
            contentContainerStyle={{
              
            }}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
              {console.tron.log("Image Uerl",IMG_URL+ '/' + item.categoryImage[0])}
                <TouchableOpacity
                  onPress={() => singlePress(item._id)}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8%',
                  }}>
                  <View
                    style={{
                      height:70,
                      width:70,
                      backgroundColor: '#F2F2F2',
                      marginRight: '5%',
                      borderRadius: 50,
                      overflow: 'hidden',
                    }}>
                   <Image
                   key={index}
                   source={{
                    uri:  IMG_URL+ '/' + item.categoryImage,
                }}
                style={{
                  height: index == 0 ? getResHeight(120) : getResHeight(200),
                  width: '100%',
                   resizeMode: 'cover',
                  marginBottom: '1.5%',
                  borderRadius: 8,
                }}
              />
                    {/* {item.renderIcon} */}
                  </View>
                  <View style={{
                    width: '95%',
                    marginTop: '5%',
                  }}>
                    <Text
                      style={{                       
                        fontSize: getFontSize(12),
                        fontFamily: theme.font.regular,
                        
                        color: theme.color.darkGray,
                        textAlign:"center"
                      }}>
                      {item.categoryName}
                      {/* {item.category} */}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
       
      </View>
    </>
  )
}
const BrandForYou = props => {
  const {data, allOnPress} = props

  return (
    <>
      <View
        style={{
          width: '100%',
          marginBottom: '5%',
          paddingHorizontal: '3%',
          // flex:1
        }}>
        <ListHeader
          title={'Brand for You'}
          allOnPress={() => {
            allOnPress()
          }}
        />

        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <FlatList
            style={{
              marginTop: '5%',
            }}
            contentContainerStyle={{
              width: '100%',
              paddingHorizontal: '3%',
              justifyContent: 'space-between',
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={true}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    height: getResHeight(50),
                    width: getResWidth(50),
                    marginRight: '5%',
                  }}>
                  {item.renderIcon}
                </View>
              </>
            )}
          />
        </View>
      </View>
    </>
  )
}
const MostPopular = props => {
  const {data, allOnPress, singleProductView} = props

  return (
    <>
      <View
        style={{
          width: '100%',
          paddingHorizontal: '3%',
        }}>
        <ListHeader
          title={'Most Popular'}
          allOnPress={() => {
            allOnPress()
          }}
          logo={'Logo'}
        />

        <View
          style={{
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <FlatList
              style={{
                marginTop: '3%',
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
                  <SinglePopularProduct
                    data={item}
                    wish={true}
                    type={'popular'}
                    onPress={singleProductView}
                  />
                </>
              )}
            />
          </View>
        </View>
      </View>
    </>
  )
}
const SinglePopularProduct = props => {
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

        <TouchableOpacity
          onPress={() => setWishlist(!wishlist)}
          style={{
            height: 34,
            width: 34,
            backgroundColor: '#FFFFFF',
            borderRadius: 50,
            position: 'absolute',
            right: 15,
            top: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
              marginBottom: '3%',
              color: '#1F1F1F',
            }}>
            Samsung M21
          </Text>

          <Text
            style={{
              fontSize: getFontSize(9),
              fontFamily: theme.font.regular,
              color: theme.color.darkGray,
              marginVertical: '2%',
            }}>
            Beige & Tan Textured Wedge Pumps with Laser Cuts
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '97%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoBold,
                marginBottom: '3%',
                color: '#1F1F1F',
              }}>
              ₹ 420.00/-
            </Text>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: theme.font.latoRegular,
                marginBottom: '3%',
                color: theme.color.darkGray,
                fontWeight: '400',
                textDecorationLine: 'line-through',
              }}>
              ₹ 500/-
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCategoriesAPI: payload => dispatch(categoriesAPI.getAllCategoriesAPI(payload)),
    getAllSubCategoriesAPI: payload => dispatch(categoriesAPI.getAllSubCategoriesAPI(payload)),
    getUserAPI: payload => dispatch(AuthAPI.getUserAPI(payload)),
  }
}

const mapStateToProps = (state, props) => {
  return {
    allcategories: state.Categories.allcategories,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
