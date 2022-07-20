import React, { Component, PureComponent } from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
// import FontAwesome5Brands from 'react-native-vector-icons/dist/FontAwesome5Brands';
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";

export default function setVectorIcon(props) {
  const { name, type, size, color, style, solid } = props;
  let icon = null;
  switch (type) {
    case "AntDesign":
      icon = <AntDesign name={name} size={size} color={color} style={style} />;
      break;
    case "Entypo":
      icon = <Entypo name={name} size={size} color={color} style={style} />;
      break;
    case "EvilIcons":
      icon = <EvilIcons name={name} size={size} color={color} style={style} />;
      break;
    case "Feather":
      icon = <Feather name={name} size={size} color={color} style={style} />;
      break;
    case "FontAwesome":
      icon = (
        <FontAwesome name={name} size={size} color={color} style={style} />
      );
      break;
    case "FontAwesome5":
      icon = (
        <FontAwesome5 name={name} size={size} color={color} style={style} />
      );
      break;
    // case 'FontAwesome5Brands':
    //   icon = (
    //     <FontAwesome5Brands
    //       name={name}
    //       size={size}
    //       color={color}
    //       style={style}
    //     />
    //   );
    //   break;
    case "Fontisto":
      icon = <Fontisto name={name} size={size} color={color} style={style} />;
      break;
    case "Foundation":
      icon = <Foundation name={name} size={size} color={color} style={style} />;
      break;
    case "Ionicons":
      icon = <Ionicons name={name} size={size} color={color} style={style} />;
      break;
    case "Zocial":
      icon = <Zocial name={name} size={size} color={color} style={style} />;
      break;
    case "MaterialCommunityIcons":
      icon = (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
      break;
    case "MaterialIcons":
      icon = (
        <MaterialIcons name={name} size={size} color={color} style={style} />
      );
      break;
    case "Octicons":
      icon = <Octicons name={name} size={size} color={color} style={style} />;
      break;
    case "SimpleLineIcons":
      icon = (
        <SimpleLineIcons name={name} size={size} color={color} style={style} />
      );
      break;
    default:
      icon = null;
      break;
  }

  if (icon != null) {
    return icon;
  }
}
