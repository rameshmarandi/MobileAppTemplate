import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { getFontSize, getResHeight, getResWidth } from '../utility/responsive';
import theme from '../theme';
import Home from '../screens/Home/HomePage';
import TabCategories from '../screens/Categories/TabCategories';
import TabWishlist from '../screens/Wishlist/TabWishlist';
import setVectorIcon from '../components/VectorComponents';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/EditProfile';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    TabCategories: {
      screen: TabCategories,
    },
    TabWishlist: {
      screen: TabWishlist,
    },
    Profile: {
      screen: Profile,
    },
    // EditProfile: {
    //   screen: EditProfile,
    // },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: props => {
      return (
        <TabNavigation
          {...props}
          items={[
            {
              text: 'Home',
              color: 'yellow',
              icon: {
                type: 'Entypo',
                name: 'home',
                size: getFontSize(18),
              },
              route: 'Home',
            },
            {
              text: 'Categories',
              color: 'blue',
              icon: {
                type: 'AntDesign',
                name: 'appstore1',
                size: getFontSize(18),},
              route: 'TabCategories',
            },
            {
              text: 'Wishlist',
              color: 'lightblue',
              icon: {
                type: 'Foundation',
                name: 'heart',
                size: getFontSize(18),
              },
              route: 'TabWishlist',
            },
            {
              text: 'Profile',
              color: 'lightgrey',
              icon: {
                type: 'FontAwesome',
                name: 'user',
                size: getFontSize(18),
              },
              route: 'Profile',
            },
          ]}
        />
      );
    },
  },
);

class TabNavigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  route = route => {
    this.props.navigation.navigate(route);
  };
  render() {
    // const ApplicantId = async () => {
    //   const data = await SessionUser.MGSessionUser();
    //   if (data.ApplicantId) {
    //     return true;
    //   }
    //   return false;
    // };
    const { items } = this.props;
    const lastindex = items.length - 1;

    let tabs = items.map((item, index) => {
      let active =
        (this.props.navigationState && this.props.navigationState.index === index) ||
        (this.props.navigation && this.props.navigation.state && this.props.navigation.state.index === index);

      let icon = item.icon;
      icon.color = active ? theme.color.primary : theme.color.darkGray;
      return (
        <TouchableOpacity
          onPress={async () => {
            this.route(item.route);           
          }}
          key={index}
          disabled={active}
          style={{          
            borderRadius: 8,
            paddingVertical: '2%',
            paddingHorizontal: '3.5%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: index === lastindex ? 0 : '1.5%',
            marginTop: '1.5%',  
               

          }}
        >
          {item.icon && setVectorIcon(icon)}
          <Text
              style={
                ([styles.lblStyle],
                {
                  color: active ? theme.color.primary: theme.color.darkGray,
                 fontFamily: theme.font.latoBold,
                  fontSize: getFontSize(11),
                  paddingTop: '2%',
                
                })
              }
            >
              {item.text}
            </Text>        
        </TouchableOpacity>
      );
    });
    if (tabs.length == 0) {
      return null;
    } else {
      return (
        <View
          style={{
            width: '100%',
            minHeight: getResHeight(60),
            flexDirection: 'row',          
            backgroundColor: '#FFFFFF',
            paddingBottom: '2%',
          }}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              borderTopWidth:1,
              borderTopColor:theme.color.dimGray
              
            }}
          >
            {tabs}
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  lblStyle: {
    fontSize: getFontSize(12),
      fontFamily: theme.font.latoRegular,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

const authStack = createSwitchNavigator({
  dashboard: bottomTabNavigator,
});

export default createAppContainer(authStack);
